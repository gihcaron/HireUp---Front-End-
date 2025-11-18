"use client";
import React, { useState } from 'react';
import Header from '@/Components/Header';
import styles from './candidaturas.module.css';

export default function DetalhesCandidato() {
  const [status, setStatus] = useState('Triagem');

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.menuIcon}>☰</div>
          <h1 className={styles.title}>Detalhes do Candidato</h1>
        </div>

        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <div className={styles.section}>
              <h2 className={styles.candidateName}>Lorenzo Hayato Otto</h2>
              
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span className={styles.icon}>📞</span>
                  <span>+55 19 98243-5712</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.icon}>✉️</span>
                  <span>lorenzohayato@gmail.com</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.icon}>📍</span>
                  <span>Cambuí, Campinas - SP</span>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Cargo | Departamento</h3>
              <div className={styles.badges}>
                <span className={styles.badge}>
                  <span className={styles.badgeIcon}>👤</span>
                  Auxiliar Adiministrativo
                </span>
                <span className={styles.badge}>
                  <span className={styles.badgeIcon}>📊</span>
                  Adiministrativo
                </span>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Resumo</h3>
              <p className={styles.resumo}>
                Desenvolvedor Python Full Stack com 35 anos e ampla experiência empreendedora. Após liderar uma startup, busco novos desafios como colaborador, trazendo visão estratégica e técnica. Fluente em português, inglês, japonês, alemão e italiano, com conhecimentos básicos de espanhol e francês adquiridos durante intercâmbio na Espanha. Graduado pela Anhanguera, possuo múltiplas certificações técnicas que complementam minha formação. Experiência multidisciplinar em desenvolvimento de soluções completas, gestão de projetos e trabalho em ambientes multiculturais.
              </p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.statusSection}>
              <h3 className={styles.statusTitle}>Status</h3>
              <select 
                className={styles.statusSelect}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Triagem">Triagem</option>
                <option value="Entrevista">Entrevista</option>
                <option value="Aprovado">Aprovado</option>
                <option value="Rejeitado">Rejeitado</option>
              </select>
              
              <div className={styles.buttonGroup}>
                <button className={styles.btnReject}>Rejeitado</button>
                <button className={styles.btnInterview}>Move to Interview</button>
              </div>
            </div>
            </div>
          </div>
        </div>
        </>
  );
}