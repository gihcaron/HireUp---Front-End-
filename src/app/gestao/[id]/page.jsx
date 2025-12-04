"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Pagination } from "antd";
import styles from "./styles.module.css";
export default function GestaoVagas() {
    const params = useParams();
    const id = params?.id;

    const [vaga, setVaga] = useState(null);
    const [candidatos, setCandidatos] = useState([]);
    const [loading, setLoading] = useState(false);

    const [page, setPage] = useState(1);
    const pageSize = 6;

    const normalizeJob = (data) => {
        if (!data) return null;
        return {
            id: data.id,
            title: data.title || data.titulo,
            description: data.description || data.descricao,
            company: data.company || data.empresa,
            city: data.city || data.cidade || data.city,
            type: data.type || data.tipo,
            salary: data.salary ?? data.salario,
            status: data.status,
            salaryDescription: data.salary_description || data.salaryDescription,
            summary: data.summary,
            responsibilities: data.responsibilities || data.responsabilidades,
            requirements: data.requirements || data.requisitos,
            companyMission: data.company_mission,
            companyVision: data.company_vision,
            companyValues: data.company_values,
            address: data.address,
            companyDescription: Array.isArray(data.company_description) ? data.company_description.join("\n\n") : data.company_description,
            companyOverview: Array.isArray(data.company_overview) ? data.company_overview.join("\n\n") : data.company_overview,
            logoUrl: data.company_logo || data.logoUrl || data.logo || data.avatar_url || null,
        };
    };

    const normalizeCandidates = (arr) => {
        if (!Array.isArray(arr)) return [];
        return arr.map((item) => {
            // se for um registro de application que embute candidate
            const cand = item.candidate || item.candidates || item;
            const id = cand.id ?? item.candidate_id ?? item.id;
            const nome = cand.name || cand.nome || cand.full_name || "";
            const email = cand.email || "";
            const avatarUrl = cand.avatar_url || cand.avatarUrl || cand.avatar || null;
            // possível URL para currículo
            const curriculoUrl = cand.curriculo_url || cand.cv || cand.resume_url || null;
            const applicationStatus = item.status || cand.status || null;
            return {
                id,
                nome,
                email,
                avatarUrl,
                curriculoUrl,
                applicationStatus,
            };
        });
    };

    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            try {
                setLoading(true);

                const vagaRes = await axios.get(`/api/jobs/${id}`);
                setVaga(normalizeJob(vagaRes.data));

                let candRes;
                try {
                    candRes = await axios.get(`/api/jobs/${id}/applications`);
                } catch (e) {
                    try {
                        candRes = await axios.get(`/api/jobs/${id}/candidates`);
                    } catch (err) {
                        candRes = { data: [] };
                    }
                }

                setCandidatos(normalizeCandidates(candRes.data));
            } catch (err) {
                console.error(err);
                toast.error("Erro ao carregar detalhes da vaga.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const onPageChange = (p) => {
        setPage(p);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const start = (page - 1) * pageSize;
    const visibleCandidatos = candidatos.slice(start, start + pageSize);

    return (
        <div className={styles.container}>
            <ToastContainer />
            <div className={styles.header}>
                <Link href="/gestao" className={styles.back}>
                    ← Voltar à gestão
                </Link>
                <h1>Detalhes da Vaga</h1>
            </div>

            {loading && <p>Carregando...</p>}

            {!loading && vaga && (
                <section className={styles.vagaCard}>
                    <div className={styles.top}>
                        {vaga.logoUrl ? (
                            <Image
                                src={vaga.logoUrl}
                                alt={vaga.company || "Logo"}
                                width={80}
                                height={80}
                            />
                        ) : (
                            <div className={styles.logoFallback}>{(vaga.company && vaga.company[0]) || "V"}</div>
                        )}
                        <div className={styles.info}>
                            <h2>{vaga.title}</h2>
                            <p className={styles.meta}>
                                {vaga.company} • {vaga.city} • {vaga.type || "—"}
                            </p>
                            {vaga.salary !== undefined && vaga.salary !== null && (
                                <p className={styles.salario}>Salário: {vaga.salary}</p>
                            )}
                            <p className={styles.descricao}>{vaga.description}</p>
                        </div>
                    </div>

                    <div className={styles.footer}>
                        <span>Status: {vaga.status || "OPEN"}</span>
                        <span>Candidatos inscritos: {candidatos.length}</span>
                    </div>
                </section>
            )}

            {!loading && !vaga && <div className={styles.empty}>Vaga não encontrada.</div>}

            <section className={styles.candidatosSection}>
                <h3>Candidatos</h3>

                {candidatos.length === 0 && <p>Nenhum candidato inscrito nesta vaga.</p>}

                <ul className={styles.candidatosList}>
                    {visibleCandidatos.map((cand) => (
                        <li key={cand.id} className={styles.candidatoItem}>
                            <div className={styles.candLeft}>
                                {cand.avatarUrl ? (
                                    <Image src={cand.avatarUrl} alt={cand.nome} width={56} height={56} />
                                ) : (
                                    <div className={styles.avatarFallback}>{cand.nome?.[0] || "C"}</div>
                                )}
                                <div>
                                    <strong>{cand.nome}</strong>
                                    <div className={styles.email}>{cand.email}</div>
                                </div>
                            </div>

                            <div className={styles.candRight}>
                                {cand.curriculoUrl && (
                                    <a
                                        href={cand.curriculoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={styles.cvLink}
                                    >
                                        Ver currículo
                                    </a>
                                )}

                                <Link href={`/gestao/${id}/candidato/${cand.id}`} className={styles.verPerfil}>
                                    Ver perfil
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>

                {candidatos.length > pageSize && (
                    <div className={styles.pagination}>
                        <Pagination
                            current={page}
                            pageSize={pageSize}
                            total={candidatos.length}
                            onChange={onPageChange}
                            showSizeChanger={false}
                        />
                    </div>
                )}
            </section>
        </div>
    );
}