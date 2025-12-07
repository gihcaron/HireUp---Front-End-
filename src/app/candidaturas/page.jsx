'use client';

import styles from './triagem.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import axios from 'axios'; // Removido temporariamente até configurar backend
import Sidebar from '@/Components/Sidebar';

export default function TriagemPage() {
  const router = useRouter();
  const [candidatos, setCandidatos] = useState({
    triagem: [],
    entrevista: [],
    proposta: []
  });
  const [candidatosOriginais, setCandidatosOriginais] = useState({
    triagem: [],
    entrevista: [],
    proposta: []
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCandidatos = async () => {
      try {
        setLoading(true);
        
        // Mock de dados para candidaturas
        const mockCandidates = [
          {
            id: 1,
            nome: "João Silva",
            email: "joao@email.com",
            status: "Triagem",
            vaga: "Auxiliar de Produção",
            data: new Date().toISOString()
          },
          {
            id: 2,
            nome: "Maria Santos",
            email: "maria@email.com",
            status: "Entrevista",
            vaga: "Desenvolvedor Frontend",
            data: new Date().toISOString()
          },
          {
            id: 3,
            nome: "Pedro Costa",
            email: "pedro@email.com",
            status: "Aprovado",
            vaga: "Estágio em Marketing",
            data: new Date().toISOString()
          },
          {
            id: 4,
            nome: "Ana Oliveira",
            email: "ana@email.com",
            status: "Rejeitado",
            vaga: "Analista de RH",
            data: new Date().toISOString()
          }
        ];
        
        console.log('Candidatos mockados:', mockCandidates);
        
        // Simular delay
        setTimeout(() => {
          const data = mockCandidates;
      
          const organizados = {
            triagem: data.filter(c => c.status === 'Triagem'),
            entrevista: data.filter(c => c.status === 'Entrevista'),
            proposta: data.filter(c => c.status === 'Aprovado' || c.status === 'Proposta')
          };
          
          console.log('Candidatos organizados:', organizados);
          
          setCandidatos(organizados);
          setCandidatosOriginais(organizados);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Erro ao buscar candidatos:', error);
        setError(`Erro ao carregar candidatos: ${error.message}`);
        setLoading(false);
      }
    };

    fetchCandidatos();
  }, []);

  const handleVerMais = (id) => {
    router.push(`/candidaturas/${id}`);
  };

  const handleSearch = (e) => {
    const termo = e.target.value.toLowerCase();
    setSearchTerm(termo);

    if (termo === '') {
      setCandidatos(candidatosOriginais);
      return;
    }

    const filtrarCandidatos = (lista) => {
      return lista.filter(candidato => 
        candidato.name.toLowerCase().includes(termo) ||
        candidato.email.toLowerCase().includes(termo) ||
        (candidato.phone && candidato.phone.toLowerCase().includes(termo))
      );
    };

    setCandidatos({
      triagem: filtrarCandidatos(candidatosOriginais.triagem),
      entrevista: filtrarCandidatos(candidatosOriginais.entrevista),
      proposta: filtrarCandidatos(candidatosOriginais.proposta)
    });
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          fontSize: '1.2rem'
        }}>
          Carregando candidatos...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          fontSize: '1.2rem',
          color: 'red',
          padding: '20px'
        }}>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              fontSize: '1rem',
              cursor: 'pointer',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Sidebar activeMenu="triagem" />

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
            <input 
              type="text" 
              placeholder="Candidatos" 
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </header>

        <div className={styles.cardsContainer}>
          <div className={styles.bigCard}>
            <h2 className={styles.bigCardTitle}>Triagem</h2>
            <div className={styles.cardsList}>
              {candidatos.triagem.length === 0 ? (
                <p style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
                  Nenhum candidato em triagem
                </p>
              ) : (
                candidatos.triagem.map((candidato) => (
                  <div key={candidato.id} className={styles.smallCard}>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.candidatoNome}>{candidato.name}</h3>
                      <span className={styles.badge}>Efetivo</span>
                    </div>
                    <div className={styles.cardBody}>
                      <div className={styles.infoGroup}>
                        <span className={styles.label}>Email:</span>
                        <span className={styles.value}>{candidato.email}</span>
                      </div>
                      <div className={styles.infoGroup}>
                        <span className={styles.label}>Telefone:</span>
                        <span className={styles.value}>{candidato.phone}</span>
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
                ))
              )}
            </div>
          </div>

          <div className={styles.bigCard}>
            <h2 className={styles.bigCardTitle}>Entrevista</h2>
            <div className={styles.cardsList}>
              {candidatos.entrevista.length === 0 ? (
                <p style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
                  Nenhum candidato em entrevista
                </p>
              ) : (
                candidatos.entrevista.map((candidato) => (
                  <div key={candidato.id} className={styles.smallCard}>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.candidatoNome}>{candidato.name}</h3>
                      <span className={styles.badge}>Efetivo</span>
                    </div>
                    <div className={styles.cardBody}>
                      <div className={styles.infoGroup}>
                        <span className={styles.label}>Email:</span>
                        <span className={styles.value}>{candidato.email}</span>
                      </div>
                      <div className={styles.infoGroup}>
                        <span className={styles.label}>Telefone:</span>
                        <span className={styles.value}>{candidato.phone}</span>
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
                ))
              )}
            </div>
          </div>

          <div className={styles.bigCard}>
            <h2 className={styles.bigCardTitle}>Proposta</h2>
            <div className={styles.cardsList}>
              {candidatos.proposta.length === 0 ? (
                <p style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
                  Nenhum candidato aprovado
                </p>
              ) : (
                candidatos.proposta.map((candidato) => (
                  <div key={candidato.id} className={styles.smallCard}>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.candidatoNome}>{candidato.name}</h3>
                      <span className={styles.badge}>Efetivo</span>
                    </div>
                    <div className={styles.cardBody}>
                      <div className={styles.infoGroup}>
                        <span className={styles.label}>Email:</span>
                        <span className={styles.value}>{candidato.email}</span>
                      </div>
                      <div className={styles.infoGroup}>
                        <span className={styles.label}>Telefone:</span>
                        <span className={styles.value}>{candidato.phone}</span>
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
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}