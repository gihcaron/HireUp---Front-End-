"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Pagination } from "antd";
import styles from "./styles.module.css";
import { FaMapMarkerAlt, FaDollarSign, FaBriefcase, FaUsers, FaArrowLeft } from "react-icons/fa";
import Sidebar from "@/Components/Sidebar";

export default function GestaoVagas() {
    const params = useParams();
    const id = params?.id;

    const [job, setJob] = useState(null);
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const pageSize = 6;

    useEffect(() => {
        const fetchJobAndCandidates = async () => {
            try {
                setLoading(true);
                // Buscar detalhes da vaga
                const { data: jobData } = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/jobs/${id}`
                );
                setJob(jobData);

                // Buscar candidatos da vaga
                const { data: appData } = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/applications?job_id=${id}`
                );

                console.log("Applications recebidas:", appData);

               
                const filteredApplications = appData.filter(app => app.job_title === jobData.title);
                console.log("Applications filtradas para esta vaga:", filteredApplications);

                setApplications(filteredApplications || []);
            } catch (error) {
                console.error("Erro ao buscar detalhes:", error);
                toast.error("Erro ao carregar dados");
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchJobAndCandidates();
    }, [id]);


    const visibleApplications = applications.slice(
        (page - 1) * pageSize,
        page * pageSize
    );

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleUpdateStatus = async (appId, newStatus) => {
        try {
            await axios.patch(
                `${process.env.NEXT_PUBLIC_API_URL}/applications/${appId}`,
                { status: newStatus }
            );
            setApplications(
                applications.map((app) =>
                    app.id === appId ? { ...app, status: newStatus } : app
                )
            );
            toast.success("Status atualizado!");
        } catch (error) {
            console.error("Erro ao atualizar status:", error);
            toast.error("Erro ao atualizar status");
        }
    };

    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <p>Carregando detalhes da vaga...</p>
            </div>
        );
    }

    if (!job) {
        return (
            <div className={styles.errorContainer}>
                <p>Vaga não encontrada</p>
                <Link href="/gestao" className={styles.backLink}>
                    <FaArrowLeft /> Voltar à Gestão
                </Link>
            </div>
        );
    }

    const statusColors = {
        APPLIED: "#3b82f6",
        INTERVIEW: "#f59e0b",
        HIRED: "#10b981",
        REJECTED: "#ef4444",
    };


    return (
        <main className={styles.container}>
            <ToastContainer />

            {/* Main Content */}
            <div className={styles.mainContent}>
                {/* Seção de Informações da Vaga */}
                <div className={styles.jobHeader}>
                    <div className={styles.jobHeaderContent}>
                        <h1 className={styles.jobTitle}>{job.title}</h1>
                        <p className={styles.company}>{job.company}</p>
                        <div className={styles.metaInfo}>
                            <span className={styles.metaBadge}>
                                <FaBriefcase /> {job.type}
                            </span>
                            <span className={styles.metaBadge}>
                                <FaMapMarkerAlt /> {job.city}
                            </span>
                            <span className={styles.metaBadge}>
                                <FaDollarSign /> R$ {job.salary?.toLocaleString("pt-BR") || "A Definir"}
                            </span>
                            <span
                                className={styles.statusBadge}
                                style={{
                                    backgroundColor: job.status === "OPEN" ? "#10b981" : "#f59e0b",
                                }}
                            >
                                {job.status === "OPEN" ? "Aberta" : "Entrevistando"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className={styles.contentGrid}>
                    {/* Coluna Esquerda - Detalhes da Vaga */}
                    <article className={styles.jobDetails}>
                        {/* Descrição */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Sobre a Vaga</h2>
                            <p className={styles.description}>{job.description}</p>
                            {job.summary && <p className={styles.summary}>{job.summary}</p>}
                        </section>

                        {/* Responsabilidades */}
                        {job.responsibilities && job.responsibilities.length > 0 && (
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>Responsabilidades</h2>
                                <ul className={styles.list}>
                                    {job.responsibilities.map((resp, idx) => (
                                        <li key={idx} className={styles.listItem}>
                                            {resp}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Requisitos */}
                        {job.requirements && job.requirements.length > 0 && (
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>Requisitos</h2>
                                <ul className={styles.list}>
                                    {job.requirements.map((req, idx) => (
                                        <li key={idx} className={styles.listItem}>
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Sobre a Empresa */}
                        {(job.company_mission || job.company_vision || job.company_values) && (
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>Sobre {job.company}</h2>
                                {job.company_mission && (
                                    <div className={styles.companyInfo}>
                                        <h3>Missão</h3>
                                        <p>{job.company_mission}</p>
                                    </div>
                                )}
                                {job.company_vision && (
                                    <div className={styles.companyInfo}>
                                        <h3>Visão</h3>
                                        <p>{job.company_vision}</p>
                                    </div>
                                )}
                                {job.company_values && (
                                    <div className={styles.companyInfo}>
                                        <h3>Valores</h3>
                                        <p>{job.company_values}</p>
                                    </div>
                                )}
                            </section>
                        )}

                        {/* Localização */}
                        {job.address && (
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>Localização</h2>
                                <p className={styles.address}>
                                    <FaMapMarkerAlt /> {job.address}
                                </p>
                            </section>
                        )}

                        {/* Informações Salariais */}
                        {job.salary_description && (
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>Detalhes Salariais</h2>
                                <p>{job.salary_description}</p>
                            </section>
                        )}
                    </article>

                    {/* Coluna Direita - Candidatos */}
                    <aside className={styles.sidebar}>
                        <div className={styles.candidatesCard}>
                            <h2 className={styles.cardTitle}>
                                <FaUsers /> Candidatos ({applications.length})
                            </h2>

                            {applications.length === 0 ? (
                                <p className={styles.emptyMessage}>Nenhum candidato ainda</p>
                            ) : (
                                <div className={styles.candidatesList}>
                                    {visibleApplications.map((app) => {
                                        return (
                                            <div
                                                key={app.id}
                                                className={styles.candidateCard}
                                            >
                                                <div className={styles.candidateHeader}>
                                                    <div className={styles.candidateInfo}>
                                                        <h3 className={styles.candidateName}>
                                                            {app?.candidate_name || "N/A"}
                                                        </h3>
                                                    </div>
                                                    <span
                                                        className={styles.statusBadgeSmall}
                                                        style={{
                                                            backgroundColor: statusColors[app.status] || "#6b7280",
                                                        }}
                                                    >
                                                        {app.status === "APPLIED" && "Candidatura"}
                                                        {app.status === "INTERVIEW" && "Entrevista"}
                                                        {app.status === "HIRED" && "Contratado"}
                                                        {app.status === "REJECTED" && "Rejeitado"}
                                                        {!app.status && "N/A"}
                                                    </span>
                                                </div>

                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {applications.length > pageSize && (
                                <div className={styles.paginationContainer}>
                                    <Pagination
                                        current={page}
                                        pageSize={pageSize}
                                        total={applications.length}
                                        onChange={handlePageChange}
                                        showSizeChanger={false}
                                    />
                                </div>
                            )}
                        </div>

                    </aside>
                </div>
            </div>
        </main>
    );
}