'use client';

import styles from './triagem.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TriagemPage() {
  const router = useRouter();
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

  // Função para navegar para a página de detalhes do candidato
  const handleVerMais = (id) => {
    console.log('Navegando para candidato ID:', id);
    router.push(`/candidaturas/${id}`);
  };

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
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
          {/* Card Grande - Triagem */}
          <div className={styles.bigCard}>
            <h2 className={styles.bigCardTitle}>Triagem</h2>
            <div className={styles.cardsList}>
              {candidatos.triagem.map((candidato) => (
                <div key={candidato.id} className={styles.smallCard}>
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
                  <button 
                    type="button"
                    className={styles.verMais} 
                    onClick={() => handleVerMais(candidato.id)}
                  >
                    Ver Mais
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.bigCard}>
            <h2 className={styles.bigCardTitle}>Entrevista</h2>
            <div className={styles.cardsList}>
              {candidatos.entrevista.map((candidato) => (
                <div key={candidato.id} className={styles.smallCard}>
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
                  <button 
                    type="button"
                    className={styles.verMais} 
                    onClick={() => handleVerMais(candidato.id)}
                  >
                    Ver Mais
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Card Grande - Proposta */}
          <div className={styles.bigCard}>
            <h2 className={styles.bigCardTitle}>Proposta</h2>
            <div className={styles.cardsList}>
              {candidatos.proposta.map((candidato) => (
                <div key={candidato.id} className={styles.smallCard}>
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
                  <button 
                    type="button"
                    className={styles.verMais} 
                    onClick={() => handleVerMais(candidato.id)}
                  >
                    Ver Mais
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}