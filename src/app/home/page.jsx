"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import axios from "axios";
import { Card, Pagination } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { FaLaptopCode, FaBullhorn, FaUsers, FaCogs } from "react-icons/fa";

// Components
import Header from "../../Components/Header";
import JobCategoryCard from "../../Components/JobCategoryCard";
import JobCard from "../../Components/JobCard";
import Testimonials from "../../Components/Testimonials";

export default function Home() {
  const [search, setSearch] = useState("");

  // Job opportunity

  const [dataJobs, setDataJobs] = useState({
    jobs: [],
    loading: true,
    current: 1,
    pageSize: 6,
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data: jobs } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/jobs`
        );
        setDataJobs({ jobs, loading: false, current: 1, pageSize: 6 });
      } catch (err) {
        console.error("Erro ao buscar oportunidades de tabalho", err);
        toast.error("Erro ao buscar oportunidades de tabalho");
        setDataJobs((d) => ({ ...d, loading: false }));
      }
    };
    fetchJobs();
  }, []);

  // Jobs - Pagination

  const paginatedJobs = () => {
    const start = (dataJobs.current - 1) * dataJobs.pageSize;
    return dataJobs.jobs.slice(start, start + dataJobs.pageSize);
  };

  // Search Jobs

  const handleSearch = async () => {
    const title = search.trim();
    if (title) {
      try {
        const { data: jobs } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/jobs?title=${title}`
        );
        setDataJobs({ jobs, loading: false, current: 1, pageSize: 4 });
      } catch (error) {
        console.error("Erro ao buscar jobs:", error);
        toast.error("Erro ao buscar jobs");
        setData((d) => ({ ...d, loading: false }));
      }
    }
  };

  const handleFilter = async (type) => {
    if (type) {
      try {
        const { data: jobs } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/jobs?type=${type}`
        );
        setDataJobs({ jobs, loading: false, current: 1, pageSize: 4 });
      } catch (error) {
        console.error("Erro ao buscar jobs:", error);
        toast.error("Erro ao buscar jobs");
        setDataJobs((d) => ({ ...d, loading: false }));
      }
    }
  };

  return (
    <section className={styles.homeContainer}>
      <section className={styles.bannerSection}>
        <h1 className={styles.titleBanner}>
          Do primeiro contato à contratação,
          <span className={styles.coloredTitle}>
            {" "}
            contrate melhor com o HireUp.
          </span>
        </h1>
        <p className={styles.subtitleBanner}>
          Centralize seu processo seletivo com eficiência e simplicidade.
        </p>

        <div className={styles.imageContainer}>
          <Image
            src="/images/workGroup.png"
            alt="Banner Image"
            width={600}
            height={400}
            className={styles.bannerImage}
          />
        </div>
      </section>
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <div className={styles.statCardBlue}>
            <h2>50K</h2>
            <p>candidatos</p>
            <p>ativos</p>
          </div>
          <div className={styles.statCard}>
            <h2>13+</h2>
            <p>empresas</p>
          </div>
          <div className={styles.statCard}>
            <h2>20</h2>
            <p>vagas abertas</p>
          </div>
          <div className={styles.statCard}>
            <h2>10K</h2>
            <p>entrevistas</p>
          </div>
        </div>
      </section>
      <section className={styles.callToActionSection}>
        <div className={styles.callToActionContainer}>
          <div className={styles.callToActionTitleArea}>
            <h2 className={styles.callToActionTitle}>
              Pronto para transformar seu processo de contratação?
            </h2>
            <p className={styles.callToActionDescription}>
              {" "}
              Na HireUp você combina as melhores vagas com seu perfil
              profissional. Está esperando o que para alavancar sua carreira,
              como já. Seja HireUP.{" "}
            </p>
          </div>

          <div className={styles.imageGrid}>
            <div className={styles.imageCardLeft}>
              <Image
                src="/images/workgroup.jpg"
                alt="Escritório 1"
                width={600}
                height={350}
                className={styles.LeftImage}
              />
              <div className={styles.overlayCard}>
                <h3>
                  <span style={{ color: "#0052cc" }}>•</span> Cresça com a
                  HireUP
                </h3>

                <div>
                  <p style={{ color: "#4e4e4eff", fontWeight: "500" }}>
                    Alcance o próximo nível
                  </p>
                </div>
              </div>

              <div className={styles.arrowArea}>
                <svg
                  className={styles.arrowIcon}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  style={{ flex: "0 0 auto", stroke: "#333333ff" }}
                >
                  <path
                    d="M5 19L19 5"
                    stroke="#333333ff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 5H19V9"
                    stroke="#333333ff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className={styles.imageCardRight}>
              <Image
                src="/images/jobWorkGroup.jpg"
                alt="Escritório 2"
                width={600}
                height={350}
                className={styles.rightImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Oportunidade de Trabalho */}
      
          {/* Categories Section */}
          <section className={styles.categoriesSection}>
            <div className={styles.categoriesContent}>
              <h2 className={styles.categoriesTitle}>Áreas de Atuação</h2>
              <p className={styles.categoriesSubtitle}>Explore oportunidades em diferentes segmentos</p>
              <div className={styles.categoriesGrid}>
                <div className={styles.categoryCard}>
                  <FaLaptopCode className={styles.categoryIcon} />
                  <h3>Tecnologia</h3>
                  <p>Desenvolvedores, designers e especialistas em TI</p>
                  <div className={styles.categoryCount}>+{dataJobs.jobs.filter(j => j.type === 'Remoto').length} vagas</div>
                </div>
                <div className={styles.categoryCard}>
                  <FaBullhorn className={styles.categoryIcon} />
                  <h3>Marketing</h3>
                  <p>Profissionais de marketing digital e criação</p>
                  <div className={styles.categoryCount}>+{dataJobs.jobs.filter(j => j.type === 'Presencial').length} vagas</div>
                </div>
                <div className={styles.categoryCard}>
                  <FaUsers className={styles.categoryIcon} />
                  <h3>Recursos Humanos</h3>
                  <p>Recrutadores e especialistas em RH</p>
                  <div className={styles.categoryCount}>+{Math.floor(dataJobs.jobs.length / 3)} vagas</div>
                </div>
                <div className={styles.categoryCard}>
                  <FaCogs className={styles.categoryIcon} />
                  <h3>Operações</h3>
                  <p>Coordenadores e gerentes de processos</p>
                  <div className={styles.categoryCount}>+{Math.floor(dataJobs.jobs.length / 4)} vagas</div>
                </div>
              </div>
            </div>
          </section>

      <section className={styles.jobSearchSection}>
        <h2 className={styles.jobVacancyTitle}>
          Encontre a <span style={{ color: "#0052cc" }}>vaga ideal</span> para
          você
        </h2>

        <p className={styles.jobVacancyDescription}>
          Conectamos talentos qualificados às melhores oportunidades do mercado.{" "}
        </p>

        <div className={styles.jobVacancySearch}>
          <input
            type="text"
            placeholder="Pesquisar vagas..."
            className={styles.jobSearchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className={styles.jobSearchButton} onClick={handleSearch}>
            Pesquisar
          </button>
        </div>

        <div className={styles.buttonJobArea}>
          <button onClick={() => handleFilter("CLT")} className={styles.button}>
            CLT
          </button>

          <button
            onClick={() => handleFilter("Estagio")}
            className={styles.button}
          >
            Estágio
          </button>

          <button onClick={() => handleFilter("pj")} className={styles.button}>
            Pessoa Juridica
          </button>

          <button
            onClick={() => handleFilter("jovem_aprendiz")}
            className={styles.button}
          >
            Jovem Aprendiz
          </button>
        </div>

        <div className={styles.jobVacancyList}>
          {paginatedJobs().map((jobs) => (
            <JobCard
              key={jobs.id}
              title={jobs.title}
              company={jobs.company}
              city={jobs.city}
              type={jobs.type}
              salary={jobs.salary}
            />
          ))}
        </div>

        <div>
          {dataJobs.jobs?.length > 0 && (
            <Pagination
              current={dataJobs.current}
              pageSize={dataJobs.pageSize}
              total={dataJobs.jobs?.length || 0}
              onChange={(page) => setDataJobs((d) => ({ ...d, current: page }))}
              showSizeChanger={false}
            />
          )}
        </div>
      </section>
      <section className={styles.finalCallToActionSection}></section>

      <ToastContainer />

      <Testimonials />
    </section>
  );
}
