"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import axios from "axios";
import { Card } from "antd";
import { useEffect, useState } from "react";
import { FaLaptopCode, FaBullhorn, FaUsers, FaCogs } from "react-icons/fa";

// Components
import Header from "../../Components/Header";
import JobCategoryCard from "../../Components/JobCategoryCard";

export default function Home() {
  const [search, setSearch] = useState("");

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
        <section className={styles.jobCategorySection}>
      <h1 className={styles.opportunityTitle}>
        Oportunidades de <span style={{ color: "#0052cc" }}>trabalho</span>
      </h1>

      <div className={styles.opportunityCards}></div>
        <JobCategoryCard count={12} title="Desenvolvimento" icon={<FaLaptopCode size={40} color="#0052cc" />} />
        <JobCategoryCard count={12} title="Marketing" icon={<FaLaptopCode size={40} color="#0052cc" />} />
        <JobCategoryCard count={12} title="Vendas" icon={<FaLaptopCode size={40} color="#0052cc" />} />
        <JobCategoryCard count={12} title="Design" icon={<FaLaptopCode size={40} color="#0052cc" />} />
        <JobCategoryCard count={12} title="Recursos Humanos" icon={<FaLaptopCode size={40} color="#0052cc" />} />
        <JobCategoryCard count={12} title="Finanças" icon={<FaLaptopCode size={40} color="#0052cc" />} />
        <JobCategoryCard count={12} title="Produto" icon={<FaLaptopCode size={40} color="#0052cc" />} />
        <JobCategoryCard count={12} title="Suporte" icon={<FaLaptopCode size={40} color="#0052cc" />} />
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

          <button className={styles.jobSearchButton}>Pesquisar</button>
        </div>

        <div className={styles.buttonJobArea}>
          <button onClick={() => handleFilter("clt")} className={styles.button}>
            CLT
          </button>

          <button
            onClick={() => handleFilter("estagio")}
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
          <Card className={styles.jobCard}>
            <div className={styles.jobCardHeader}>
              <div className={styles.logoArea}>
                <Image
                  src="/images/logoPreto.png"
                  alt="Company Logo"
                  width={50}
                  height={50}
                  className={styles.companyLogo}
                />
              </div>
              <div className={styles.jobHeader}>
                <h3 className={styles.jobTitle}>
                  Desenvolvedor Front-End - Junior{" "}
                </h3>
                <p className={styles.jobCompany}>Tech Solutions</p>
              </div>
            </div>
            <p className={styles.jobLocation}>São Paulo, SP</p>
            <p className={styles.jobType}>CLT</p>
            <p className={styles.jobSalary}> R$ 5.000,00</p>
            <button className={styles.applyButton}>Ver mais </button>
          </Card>
        </div>
      </section>
    </section>
  );
}
