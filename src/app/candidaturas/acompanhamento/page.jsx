"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./acompanhamento.module.css";

export default function Acompanhamento() {
  const [etapas] = useState([
    {
      id: 1,
      titulo: "Consideração",
      descricao: "Seu currículo está sendo avaliado",
      status: "completo",
      icon: "✓",
    },
    {
      id: 2,
      titulo: "Análise Comportamental",
      descricao: "Estamos analisando seu perfil comportamental",
      status: "completo",
      icon: "✓",
    },
    {
      id: 3,
      titulo: "Entrevista",
      descricao: "Próxima etapa do processo seletivo",
      status: "em-progresso",
      icon: "📋",
      progress: 75,
    },
    {
      id: 4,
      titulo: "Resultado",
      descricao: "Resultado final do processo",
      status: "pendente",
      icon: "🎯",
    },
  ]);

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.mainTitle}>
          Agradecemos por confiar na HireUp
        </h1>
        
        <div className={styles.subtitle}>
          <h2>Acompanhe o seu desempenho</h2>
          <p>Seu perfil está sendo analisado, acompanhe o processo</p>
        </div>

        <div className={styles.etapasContainer}>
          {etapas.map((etapa, index) => (
            <div
              key={etapa.id}
              className={`${styles.etapa} ${styles[etapa.status]}`}
            >
              <div className={styles.etapaContent}>
                <div className={styles.etapaInfo}>
                  <h3 className={styles.etapaTitulo}>{etapa.titulo}</h3>
                  <p className={styles.etapaDescricao}>{etapa.descricao}</p>
                </div>
                
                <div className={styles.etapaIcon}>
                  {etapa.status === "em-progresso" && etapa.progress ? (
                    <div className={styles.progressContainer}>
                      <div className={styles.progressBar}>
                        <div
                          className={styles.progressFill}
                          style={{ width: `${etapa.progress}%` }}
                        ></div>
                      </div>
                      <span className={styles.progressText}>
                        {etapa.progress}%
                      </span>
                    </div>
                  ) : (
                    <span className={styles.icon}>{etapa.icon}</span>
                  )}
                </div>
              </div>

              {index < etapas.length - 1 && (
                <div
                  className={`${styles.linha} ${
                    etapa.status === "completo" ? styles.completa : ""
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.info}>
          <p>
            Você receberá um email assim que houver atualizações no seu processo seletivo.
          </p>
        </div>

        <div className={styles.actions}>
          <Link href="/home" className={styles.button}>
            <span className={styles.buttonText}>Voltar para a Home</span>
            <span className={styles.buttonIcon}>→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
