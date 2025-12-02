"use client";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import styles from "../../../notFound.module.css";

export default function Enviado() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const suggestions = useMemo(() => [
    { title: "Desenvolvedor Full Stack", company: "TechCorp", location: "São Paulo" },
    { title: "Designer UX/UI", company: "Creative Labs", location: "Remoto" },
    { title: "Analista de Dados", company: "DataInsights", location: "Rio de Janeiro" },
    { title: "Gerente de Projetos", company: "Solutions Inc", location: "Híbrido" }
  ], []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.customCursor}
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />

      <div className={styles.content}>
        <div className={styles.errorNumber}>✓</div>

        <h1 className={styles.title}>
          <span className={styles.titleGradient}>Enviado!</span> Candidatura recebida com sucesso
        </h1>

        <p className={styles.description}>
          Obrigado por se candidatar. Recebemos seu currículo e nossa equipe irá avaliar
          sua inscrição. Boa sorte!
        </p>

        <div className={styles.suggestionCard}>
          <span className={styles.suggestionLabel}>Enquanto isso</span>
          <div className={styles.suggestionContent}>
            <h3>{suggestions[0].title}</h3>
            <p className={styles.suggestionCompany}>{suggestions[0].company}</p>
            <span className={styles.suggestionLocation}>📍 {suggestions[0].location}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href="/candidaturas/acompanhamento" className={styles.primaryButton}>
            <span className={styles.buttonText}>Acompanhar Candidatura</span>
            <span className={styles.buttonIcon}>📋</span>
          </Link>
          <Link href="/home" className={styles.secondaryButton}>
            <span className={styles.buttonText}>Voltar para a Home</span>
            <span className={styles.buttonIcon}>→</span>
          </Link>
        </div>
      
      </div>

      <div className={styles.decoration}>
        <div className={styles.morphBlob1}></div>
        <div className={styles.morphBlob2}></div>
        <div className={styles.gridPattern}></div>
      </div>
    </div>
  );
}
