"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams, useRouter } from 'next/navigation';
import styles from '../candidaturas.module.css';

export default function DetalhesCandidato() {

  const params = useParams();
  const router = useRouter();
  const [status, setStatus] = useState('Triagem');
  const [candidato, setCandidato] = useState(null);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        // A rota do backend é GET /candidates/:id
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/candidates/${params.id}`
        );
        setCandidato(data);
        setStatus(data.status || 'Triagem');
        setLoading(false);
      } catch (err) {
        console.error("Erro ao buscar candidato", err);
        console.log("Detalhes do erro:", err.response); // Ver mais detalhes
        toast.error("Erro ao buscar candidato");
        setLoading(false);
      }
    };

    if (params.id) {
      fetchCandidate();
    }
  }, [params.id]);

  const handleStatusChange = async (novoStatus) => {
    try {
      // A rota do backend é PUT /candidates/:id
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/candidates/${candidato.id}`,
        { 
          ...candidato, // Mantém todos os dados do candidato
          status: novoStatus // Atualiza apenas o status
        }
      );
      setStatus(novoStatus);
      toast.success("Status atualizado com sucesso!");
    } catch (err) {
      console.error("Erro ao atualizar status", err);
      toast.error("Erro ao atualizar status");
    }
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Carregando candidato...</div>
      </div>
    );
  }

  if (!candidato) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>Candidato não encontrado</div>
      </div>
    );
  }

  
  return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.menuIcon} onClick={() => router.back()}>
            ← Voltar
          </div>
          <h1 className={styles.title}>Detalhes do Candidato</h1>
        </div>

        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <div className={styles.section}>
              <h2 className={styles.candidateName}>
                {candidato.nome || candidato.name}
              </h2>
              
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span className={styles.icon}>📞</span>
                  <span>{candidato.telefone || candidato.phone}</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.icon}>✉️</span>
                  <span>{candidato.email}</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.icon}>📍</span>
                  <span>{candidato.localizacao || candidato.location}</span>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Cargo | Departamento</h3>
              <div className={styles.badges}>
                <span className={styles.badge}>
                  <span className={styles.badgeIcon}>👤</span>
                  {candidato.cargo || candidato.position || 'Auxiliar Administrativo'}
                </span>
                <span className={styles.badge}>
                  <span className={styles.badgeIcon}>📊</span>
                  {candidato.departamento || candidato.department || 'Administrativo'}
                </span>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Resumo</h3>
              <p className={styles.resumo}>
                {candidato.resumo || candidato.summary || candidato.description || 
                  "Profissional com experiência sólida na área, com habilidades em gestão de documentos, atendimento ao cliente e suporte administrativo. Busco novos desafios para aplicar minhas competências e contribuir para o crescimento da empresa."}
              </p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.statusSection}>
              <h3 className={styles.statusTitle}>Status</h3>
              <select 
                className={styles.statusSelect}
                value={status}
                onChange={(e) => handleStatusChange(e.target.value)}
              >
                <option value="Triagem">Triagem</option>
                <option value="Entrevista">Entrevista</option>
                <option value="Aprovado">Aprovado</option>
                <option value="Rejeitado">Rejeitado</option>
              </select>
              
              <div className={styles.buttonGroup}>
                <button 
                  className={styles.btnReject}
                  onClick={() => handleStatusChange('Rejeitado')}
                >
                  Rejeitado
                </button>
                <button 
                  className={styles.btnInterview}
                  onClick={() => handleStatusChange('Entrevista')}
                >
                  Move to Interview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}