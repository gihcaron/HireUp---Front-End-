"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Pagination } from "antd";
import JobManagementCard from "@/Components/JobManagementCard";
import Sidebar from "@/Components/Sidebar";
import styles from "./gestao.module.css";

export default function GestaoVagas() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/jobs`
        );
        setJobs(data);
        setLoading(false);
      } catch (err) {
        console.error("Erro ao buscar oportunidades de trabalho", err);
        toast.error("Erro ao buscar oportunidades de trabalho");
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => 
    job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  const handlePageChange = (page, newPageSize) => {
    setCurrentPage(page);
    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);
      setCurrentPage(1); 
    }
  };

  return (
    <div className={styles.layout}>
      <Sidebar activeMenu="gestao" />
      
      <main className={styles.content}>
        <div className={styles.header}>
          <div className={styles.heroImage}>
            <Image
              src="/images/corporativa.webp"
              alt="Equipe trabalhando"
              width={600}
              height={200}
              className={styles.workImage}
            />
          </div>
          <div className={styles.welcomeCard}>
            <div className={styles.welcomeContent}>
              <Image
                src="/images/logoPreto.png"
                alt="HireUp Logo"
                width={150}
                height={45}
                className={styles.logoImage}
              />
              <p className={styles.welcomeText}>Bem vindo de volta</p>
              <p className={styles.welcomeUser}>HireUp ADM</p>
            </div>
          </div>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <Image src="/images/text.png" alt="Vagas Postadas" width={32} height={32} />
            </div>
            <div className={styles.statNumber}>254</div>
            <div className={styles.statLabel}>Vagas Postadas</div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <Image src="/images/opened-door-aperture.png" alt="Vagas em aberto" width={32} height={32} />
            </div>
            <div className={styles.statNumber}>15</div>
            <div className={styles.statLabel}>Vagas em aberto</div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <Image src="/images/checked.png" alt="Vagas fechadas" width={32} height={32} />
            </div>
            <div className={styles.statNumber}>10</div>
            <div className={styles.statLabel}>Vagas fechadas</div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <Image src="/images/users.png" alt="Aplicações" width={32} height={32} />
            </div>
            <div className={styles.statNumber}>300</div>
            <div className={styles.statLabel}>Aplicações</div>
          </div>
        </div>

        <div className={styles.searchSection}>
          <div className={styles.searchContainer}>
            <div className={styles.searchInputWrapper}>
              <Image 
                src="/images/loupe.png" 
                alt="Pesquisar" 
                width={20} 
                height={20} 
                className={styles.searchIcon}
              />
              <input
                type="text"
                placeholder="Vagas"
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className={styles.searchButton}>Pesquisar</button>
            </div>
          </div>
        </div>

        <div className={styles.jobsSection}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <p>Carregando vagas...</p>
            </div>
          ) : filteredJobs.length > 0 ? (
            currentJobs.map((job) => (
              <JobManagementCard
                key={job.id}
                title={job.title}
                salary={job.salary || "A combinar"}
                location={`${job.city || ""} - ${job.state || ""}`.trim()}
                link={`/gestao/${job.id}`}
              />
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <p>Nenhuma vaga encontrada</p>
            </div>
          )}
        </div>

        {!loading && filteredJobs.length > 0 && (
          <div className={styles.paginationContainer}>
            <Pagination
              current={currentPage}
              total={filteredJobs.length}
              pageSize={pageSize}
              onChange={handlePageChange}
              showSizeChanger
              pageSizeOptions={['6', '12', '18', '24']}
              showTotal={(total, range) => `${range[0]}-${range[1]} de ${total} vagas`}
            />
          </div>
        )}

        <ToastContainer />
      </main>
    </div>
  );
}