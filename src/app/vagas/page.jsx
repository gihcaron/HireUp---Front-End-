"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import axios from "axios";
import { Pagination, Spin, Empty, Select } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { FaLaptopCode, FaBullhorn, FaUsers, FaCogs, FaSearch, FaMapMarkerAlt } from "react-icons/fa";


// Components
import JobCategoryCard from "../../Components/JobCategoryCard";
import JobCard from "../../Components/JobCard";
import Testimonials from "../../Components/Testimonials";


export default function Vagas() {
    // Job opportunity

  const [dataJobs, setDataJobs] = useState({
    jobs: [],
    loading: true,
    current: 1,
    pageSize: 6,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data: jobs } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/jobs`
        );
        setDataJobs({ jobs, loading: false, current: 1, pageSize: 6 });
      } catch (err) {
        console.error("Erro ao buscar oportunidades de trabalho", err);
        toast.error("Erro ao buscar oportunidades de trabalho");
        setDataJobs((d) => ({ ...d, loading: false }));
      }
    };
    fetchJobs();
  }, []);

    // Jobs - Filtrage

    const filteredJobs = dataJobs.jobs.filter((job) => {
      const matchesSearch = job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.company?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = !selectedType || job.type === selectedType;
      const matchesCity = !selectedCity || job.city === selectedCity;
      
      return matchesSearch && matchesType && matchesCity;
    });

    // Jobs - Pagination

    const paginatedJobs = () => {
        const start = (dataJobs.current - 1) * dataJobs.pageSize;
        return filteredJobs.slice(start, start + dataJobs.pageSize);
      };

    // Get unique types and cities for filters
    const jobTypes = [...new Set(dataJobs.jobs.map(job => job.type))].filter(Boolean);
    const cities = [...new Set(dataJobs.jobs.map(job => job.city))].filter(Boolean);

    return(
        <main className={styles.main}>
          {/* Header Banner */}
          <div className={styles.headerBanner}>
            <div className={styles.bannerContent}>
              <h1 className={styles.title}>Oportunidades de Carreira</h1>
              <p className={styles.subtitle}>Encontre a vaga perfeita para seu futuro profissional</p>
            </div>
          </div>

          <div className={styles.jobVacancyContainer}>
            
            {/* Filters Section */}
            <div className={styles.filtersSection}>
              <div className={styles.searchBox}>
                <FaSearch className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Buscar por cargo ou empresa..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setDataJobs((d) => ({ ...d, current: 1 }));
                  }}
                  className={styles.searchInput}
                />
              </div>

              <div className={styles.filterGroup}>
                <Select
                  placeholder="Tipo de Trabalho"
                  value={selectedType || undefined}
                  onChange={(value) => {
                    setSelectedType(value || "");
                    setDataJobs((d) => ({ ...d, current: 1 }));
                  }}
                  allowClear
                  className={styles.filterSelect}
                  style={{ width: "100%" }}
                  options={jobTypes.map(type => ({ label: type, value: type }))}
                />
              </div>

              <div className={styles.filterGroup}>
                <Select
                  placeholder="Localização"
                  value={selectedCity || undefined}
                  onChange={(value) => {
                    setSelectedCity(value || "");
                    setDataJobs((d) => ({ ...d, current: 1 }));
                  }}
                  allowClear
                  className={styles.filterSelect}
                  style={{ width: "100%" }}
                  options={cities.map(city => ({ label: city, value: city }))}
                />
              </div>

              <button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedType("");
                  setSelectedCity("");
                  setDataJobs((d) => ({ ...d, current: 1 }));
                }}
                className={styles.resetButton}
              >
                Limpar Filtros
              </button>
            </div>

            {/* Results Info */}
            <div className={styles.resultsInfo}>
              <p>{filteredJobs.length} vaga{filteredJobs.length !== 1 ? 's' : ''} encontrada{filteredJobs.length !== 1 ? 's' : ''}</p>
            </div>

            {/* Loading State */}
            {dataJobs.loading ? (
              <div className={styles.loadingContainer}>
                <Spin size="large" />
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className={styles.emptyContainer}>
                <Empty
                  description="Nenhuma vaga encontrada"
                  style={{ marginTop: "50px" }}
                />
              </div>
            ) : (
              <>
                <div className={styles.jobVacancyList}>
                  {paginatedJobs().map((jobs) => (
                    <JobCard
                      key={jobs.id}
                      title={jobs.title}
                      company={jobs.company}
                      city={jobs.city}
                      type={jobs.type}
                      salary={jobs.salary}
                      link={`/vagas/${jobs.id}`}
                    />
                  ))}
                </div>

                <div className={styles.paginationContainer}>
                  {filteredJobs.length > 0 && (
                    <Pagination
                      current={dataJobs.current}
                      pageSize={dataJobs.pageSize}
                      total={filteredJobs.length}
                      onChange={(page) => setDataJobs((d) => ({ ...d, current: page }))}
                      showSizeChanger={false}
                      className={styles.pagination}
                    />
                  )}
                </div>
              </>
            )}
          </div>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Pronto para Começar sua Jornada?</h2>
              <p className={styles.ctaDescription}>
                Não encontrou a vaga perfeita? Inscreva-se em nosso programa de talentos e receba notificações sobre novas oportunidades que se alinhem com seu perfil.
              </p>
              <button className={styles.ctaButton}>Inscrever-se Agora</button>
            </div>
          </section>


        </main>
    )
}