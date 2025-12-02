'use client';
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import styles from './notFound.module.css';

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSuggestion, setCurrentSuggestion] = useState(0);

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
    window.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      setCurrentSuggestion((prev) => (prev + 1) % suggestions.length);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, [suggestions.length]);

  return (
    <div className={styles.container}>
      {/* Cursor personalizado */}
      <div 
        className={styles.customCursor}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />

      <div className={styles.content}>
        <div className={styles.errorNumber}>404</div>

        <h1 className={styles.title}>
          <span className={styles.titleGradient}>Oops!</span> Esta vaga ainda não existe
        </h1>
        
        <p className={styles.description}>
          Parece que você se perdeu no caminho da carreira dos sonhos.
          <br />
          Mas calma, temos centenas de oportunidades incríveis esperando por você!
        </p>

        {/* Card de sugestão rotativo */}
        <div className={styles.suggestionCard}>
          <span className={styles.suggestionLabel}>Que tal esta?</span>
          <div className={styles.suggestionContent}>
            <h3>{suggestions[currentSuggestion].title}</h3>
            <p className={styles.suggestionCompany}>{suggestions[currentSuggestion].company}</p>
            <span className={styles.suggestionLocation}>📍 {suggestions[currentSuggestion].location}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href="/home" className={styles.primaryButton}>
            <span className={styles.buttonText}>Explorar Vagas</span>
            <span className={styles.buttonIcon}>→</span>
          </Link>
          <Link href="/contato" className={styles.secondaryButton}>
            <span className={styles.buttonText}>Fale Conosco</span>
            <span className={styles.buttonIcon}>✉</span>
          </Link>
        </div>

        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <div className={styles.statCircle}>
              <svg viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0052cc" />
                    <stop offset="100%" stopColor="#004AAD" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" className={styles.statCircleBg} />
                <circle cx="50" cy="50" r="45" className={styles.statCircleProgress} style={{ '--progress': 75 }} stroke="url(#gradient1)" />
              </svg>
              <span className={styles.statNumber}>500+</span>
            </div>
            <span className={styles.statLabel}>Vagas Ativas</span>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statCircle}>
              <svg viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0052cc" />
                    <stop offset="100%" stopColor="#004AAD" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" className={styles.statCircleBg} />
                <circle cx="50" cy="50" r="45" className={styles.statCircleProgress} style={{ '--progress': 60 }} stroke="url(#gradient2)" />
              </svg>
              <span className={styles.statNumber}>100+</span>
            </div>
            <span className={styles.statLabel}>Empresas</span>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statCircle}>
              <svg viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0052cc" />
                    <stop offset="100%" stopColor="#004AAD" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" className={styles.statCircleBg} />
                <circle cx="50" cy="50" r="45" className={styles.statCircleProgress} style={{ '--progress': 90 }} stroke="url(#gradient3)" />
              </svg>
              <span className={styles.statNumber}>1K+</span>
            </div>
            <span className={styles.statLabel}>Contratações</span>
          </div>
        </div>
      </div>

      {/* Elementos decorativos aprimorados */}
      <div className={styles.decoration}>
        <div className={styles.morphBlob1}></div>
        <div className={styles.morphBlob2}></div>
        <div className={styles.gridPattern}></div>
      </div>
    </div>
  );
}
