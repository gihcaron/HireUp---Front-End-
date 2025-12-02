'use client';

import styles from './triagem.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function TriagemPage() {
  // TODO: Substituir por chamada real à API
  // Endpoint sugerido: GET /api/candidaturas
  const [candidatos] = useState({
    triagem: [
      {
        id: 1,
        nome: 'Julia Neves',
        status: 'Jovem Aprendiz',
        vaga: 'Assistente Administrativo',
        departamento: 'Administração'
      },
      {
        id: 2,
        nome: 'Flavia Mendes',
        status: 'Trainee',
        vaga: 'Assistente Administrativo',
        departamento: 'Administração'
      },
      {
        id: 3,
        nome: 'André Lucca',
        status: 'Jovem Aprendiz',
        vaga: 'Assistente Administrativo',
        departamento: 'Administração'
      }
    ],
    entrevista: [
      {
        id: 4,
        nome: 'Larrisa Alves',
        status: 'Efetivo',
        vaga: 'Criador de Conteúdo',
        departamento: 'Marketing e Propaganda',
        data: '29/11/2025',
        horario: '14:00 - 14h40'
      },
      {
        id: 5,
        nome: 'Larrisa Alves',
        status: 'Jovem Aprendiz',
        vaga: 'Analista de Recursos Humanos Pleno',
        departamento: 'Recursos Humanos',
        data: '29/11/2025',
        horario: '16:00 - 16h40'
      },
      {
        id: 6,
        nome: 'Larrisa Alves',
        status: 'Efetivo',
        vaga: '',
        departamento: '',
        data: '',
        horario: ''
      }
    ],
    proposta: [
      {
        id: 7,
        nome: 'Beatriz Soares',
        status: 'Jovem Aprendiz',
        vaga: 'Torneira Mecânica',
        departamento: 'Engenharia de Produção'
      },
      {
        id: 8,
        nome: 'Daniel Rodrigues',
        status: 'Efetivo',

        vaga: 'Engenharia Ambiental',
        departamento: 'Sustentabilidade e ESG'
      }
    ]
  });

  

  // Exemplo de chamada real (usar quando tiver backend):
  /*
  useEffect(() => {
    fetch('/api/candidaturas')
      .then(res => res.json())
      .then(data => setCandidatos(data))
      .catch(error => console.error('Erro ao buscar candidatos:', error));
  }, []);
  */

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <Image 
            src="/images/logo.png" 
            alt="HireUp Logo"
            width={120}
            height={40}
          />
        </div>

        <div className={styles.userProfile}>
          <div className={styles.avatar}>
            <span>GC</span>
          </div>
          <div className={styles.userName}>
            <strong>Giovanna Caron</strong>
            <span>Administrador</span>
          </div>
        </div>

        <nav className={styles.menu}>
          <button className={`${styles.menuItem} ${styles.active}`}>
            Acompanhar Triagem
          </button>
          <button className={styles.menuItem}>
            Gestão de Vagas
          </button>
          <button className={styles.menuItem}>
            Publicar Nova Vaga
          </button>
          <button className={styles.menuItem}>
            Sair
          </button>
        </nav>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.header}>
          <Image 
            src="/images/logoPreto.png" 
            alt="HireUp"
            width={150}
            height={50}
            className={styles.headerLogo}
          />
          <div className={styles.searchBar}>
            <label>Pesquisar por</label>
            <input type="text" placeholder="Candidatos" />
          </div>
        </header>

        
        <div className={styles.cardsContainer}>

          <div className={styles.column}>
            <h2 className={styles.columnTitle}>Triagem</h2>
            <div className={styles.cardsList}>
              {candidatos.triagem.map((candidato) => (
                <div key={candidato.id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.candidatoNome}>{candidato.nome}</h3>
                    <span className={`${styles.badge} ${styles[candidato.status.replace(' ', '')]}`}>
                      {candidato.status}
                    </span>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.infoGroup}>
                      <span className={styles.label}>Vaga:</span>
                      <span className={styles.value}>{candidato.vaga}</span>
                    </div>
                    <div className={styles.infoGroup}>
                      <span className={styles.label}>Departamento</span>
                      <span className={styles.value}>{candidato.departamento}</span>
                    </div>
                  </div>
                  <button className={styles.verMais}>Ver Mais</button>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h2 className={styles.columnTitle}>Entrevista</h2>
            <div className={styles.cardsList}>
              {candidatos.entrevista.map((candidato) => (
                <div key={candidato.id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.candidatoNome}>{candidato.nome}</h3>
                    <span className={`${styles.badge} ${styles[candidato.status.replace(' ', '')]}`}>
                      {candidato.status}
                    </span>
                  </div>
                  <div className={styles.cardBody}>
                    {candidato.vaga && (
                      <>
                        <div className={styles.infoGroup}>
                          <span className={styles.label}>Vaga:</span>
                          <span className={styles.value}>{candidato.vaga}</span>
                        </div>
                        <div className={styles.infoGroup}>
                          <span className={styles.label}>Departamento</span>
                          <span className={styles.value}>{candidato.departamento}</span>
                        </div>
                        <div className={styles.infoGroup}>
                          <span className={styles.label}>Data:</span>
                          <span className={styles.value}>
                            {candidato.data}<br />
                            {candidato.horario}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                  <button className={styles.verMais}>Ver Mais</button>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h2 className={styles.columnTitle}>Proposta</h2>
            <div className={styles.cardsList}>
              {candidatos.proposta.map((candidato) => (
                <div key={candidato.id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.candidatoNome}>{candidato.nome}</h3>
                    <span className={`${styles.badge} ${styles[candidato.status.replace(' ', '')]}`}>
                      {candidato.status}
                    </span>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.infoGroup}>
                      <span className={styles.label}>Vaga:</span>
                      <span className={styles.value}>{candidato.vaga}</span>
                    </div>
                    <div className={styles.infoGroup}>
                      <span className={styles.label}>Departamento</span>
                      <span className={styles.value}>{candidato.departamento}</span>
                    </div>
                  </div>
                  <button className={styles.verMais}>Ver Mais</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}