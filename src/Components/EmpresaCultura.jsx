import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './EmpresaCultura.module.css';

const EmpresaCultura = ({company_mission, company_vision, company_values, address, jobTitle }) => {
  const router = useRouter();

  const handleCandidateClick = () => {
    const cargo = jobTitle || 'Vaga de Emprego';
    router.push(`/candidaturas/candidatura?cargo=${encodeURIComponent(cargo)}`);
  };

  return (
    <section className={styles.empresaCulturaSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>🏢 Empresa e Cultura</h2>
        
        <div className={styles.contentGrid}>

          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <div className={styles.iconCircle} style={{backgroundColor: '#4ECDC4'}}>
                  <Image src="/images/estrela.png" alt="Estrela" width={24} height={24} className={styles.iconImage} />
                </div>
              </div>
              <h3 className={styles.cardTitle}>MISSÃO</h3>
              <p className={styles.cardDescription}>
               {company_mission}
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <div className={styles.iconCircle} style={{backgroundColor: '#4A90E2'}}>
                  <Image src="/images/olho.png" alt="Olho" width={24} height={24} className={styles.iconImage} />
                </div>
              </div>
              <h3 className={styles.cardTitle}>VISÃO</h3>
              <p className={styles.cardDescription}>
                {company_vision}
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <div className={styles.iconCircle} style={{backgroundColor: '#0052CC'}}>
                  <Image src="/images/like.png" alt="Like" width={24} height={24} className={styles.iconImage} />
                </div>
              </div>
              <h3 className={styles.cardTitle}>VALORES</h3>
              <p className={styles.cardDescription}>
                {company_values}
              </p>
            </div>
          </div>

          <div className={styles.mapSection}>
            <div className={styles.textArea}>
              <h4 className={styles.locationTitle}>📍 Localização</h4>
              <p className={styles.companyDescription}>
                Estamos localizados em uma região de fácil acesso, próxima a linhas de transporte e com estrutura adequada para proporcionar um ambiente de trabalho seguro e confortável.
              </p>
              <p className={styles.companyDescription}>
               {address}
              </p>
            </div>
            
            <div className={styles.mapContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.2251990232053!2d-47.01267592581257!3d-22.978744940444543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cd9c133b52f5%3A0xbe859c603dcb641b!2sEscola%20SENAI%20de%20Valinhos!5e0!3m2!1spt-BR!2sbr!4v1764248975359!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{border: 0, borderRadius: '8px'}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização SENAI Valinhos"
              />
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <p className={styles.callToAction}>
             Interessado na vaga? Clique em "Candidatar-se" e envie seu currículo!
          </p>
          <button 
            className={styles.candidateButton}
            onClick={handleCandidateClick}
          >
            Candidatar-se
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmpresaCultura;