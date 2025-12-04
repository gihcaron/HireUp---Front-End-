"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

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
              <p className={styles.subtitle}
              >Encontre a vaga perfeita para seu futuro profissional</p>
            </div>
          </div>

          {/* About (alternative layout, não em cards) */}
          <section className={styles.aboutAlt} aria-labelledby="about-alt">
            <div className={styles.aboutAltInner}>
              <div className={styles.aboutAltMedia} aria-hidden>
                <div className={styles.aboutArt}>
                  <FaBullhorn style={{ fontSize: 56 }} />
                </div>
              </div>

              <div className={styles.aboutAltText}>
                <h2 id="about-alt" className={styles.aboutAltTitle}>O HireUp não é só um banco de vagas</h2>
                <p className={styles.aboutAltLead}>
                  Nós acreditamos que carreira é sobre escolhas e crescimento. No HireUp combinamos dados,
                  curadoria humana e comunidade para apresentar oportunidades que te desafiem e façam sentido
                  na sua trajetória — sem ruído, sem spam.
                </p>

                <div className={styles.aboutAltFeatures}>
                  <div className={styles.aboutAltFeature}>
                    <div className={styles.aboutAltFeatureIcon}><FaLaptopCode /></div>
                    <div className={styles.aboutAltFeatureText}>Vagas com match profundo</div>
                  </div>

                  <div className={styles.aboutAltFeature}>
                    <div className={styles.aboutAltFeatureIcon}><FaUsers /></div>
                    <div className={styles.aboutAltFeatureText}>Rede e mentoria ativa</div>
                  </div>

                  <div className={styles.aboutAltFeature}>
                    <div className={styles.aboutAltFeatureIcon}><FaMapMarkerAlt /></div>
                    <div className={styles.aboutAltFeatureText}>Oportunidades locais e remotas</div>
                  </div>
                </div>

                <div style={{ marginTop: 18 }}>
                  
                </div>
              </div>
            </div>
          </section>


          <section className={styles.howItWorks}>
            <h3 className={styles.sectionHeading}>Como Funciona</h3>
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepIcon}><FaLaptopCode /></div>
                <h4 className={styles.stepTitle}>Candidate-se</h4>
                <p className={styles.stepDesc}>Encontre vagas alinhadas ao seu perfil e aplique com facilidade em poucos cliques.</p>
              </div>

              <div className={styles.stepCard}>
                <div className={styles.stepIcon}><FaUsers /></div>
                <h4 className={styles.stepTitle}>Conecte-se</h4>
                <p className={styles.stepDesc}>Nós aproximamos empresas e candidatos, facilitando entrevistas e feedbacks rápidos.</p>
              </div>

              <div className={styles.stepCard}>
                <div className={styles.stepIcon}><FaCogs /></div>
                <h4 className={styles.stepTitle}>Cresça</h4>
                <p className={styles.stepDesc}>Acompanhe sua evolução na plataforma com recomendações e oportunidades de desenvolvimento.</p>
              </div>
            </div>
          </section>


          {/* Blue info section - inovador e informativo */}
          <section className={styles.infoBlueSection} aria-labelledby="info-blue">
            <div className={styles.infoBlueInner}>
              <div className={styles.infoBlueText}>
                <h3 id="info-blue">Insights que te impulsionam</h3>
                <p>
                  Não basta ter vagas: oferecemos dados e ferramentas que ajudam você a decidir com confiança.
                  Aqui estão alguns recursos que tornam o HireUp diferente — pensado para acelerar sua carreira,
                  sem ruído desnecessário.
                </p>

                <div className={styles.infoBlueList}>
                  <div className={styles.infoBlueItem}>
                    <div className={styles.infoBlueIcon}><FaLaptopCode /></div>
                    <div>
                      <div className={styles.infoBlueStat}>Skill Match</div>
                      <div style={{ fontSize: 12, opacity: 0.9 }}>Recomendações baseadas nas suas skills reais</div>
                    </div>
                  </div>

                  <div className={styles.infoBlueItem}>
                    <div className={styles.infoBlueIcon}><FaUsers /></div>
                    <div>
                      <div className={styles.infoBlueStat}>Rede Ativa</div>
                      <div style={{ fontSize: 12, opacity: 0.9 }}>Mentoria e feedback da comunidade</div>
                    </div>
                  </div>

                  <div className={styles.infoBlueItem}>
                    <div className={styles.infoBlueIcon}><FaMapMarkerAlt /></div>
                    <div>
                      <div className={styles.infoBlueStat}>Local + Remoto</div>
                      <div style={{ fontSize: 12, opacity: 0.9 }}>Filtros inteligentes para encontrar o match ideal</div>
                    </div>
                  </div>
                </div>
              </div>

              <aside className={styles.infoBlueAside}>
                <h4>Já sabia?</h4>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)' }}>Candidatos que usam ferramentas de preparação têm 3x mais chances de avançar para entrevistas.</p>
                <button className={styles.infoBlueCTA} onClick={() => router.push('/vagas#jobs')}>Veja como</button>
              </aside>
            </div>
          </section>

          

          <div className={styles.jobVacancyContainer} id="jobs" >

          <h1 className={styles.jobVacancyTitle}> Confira as nossas vagas</h1>
            
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
                Não encontrou a vaga perfeita? Nos contate e fique por dentro das próximas oportunidades!
              </p>
              <button className={styles.ctaButton} onClick={() => {router.push('/contato')}}>Entrar em contato</button>
            </div>
          </section>


        </main>
    )
}