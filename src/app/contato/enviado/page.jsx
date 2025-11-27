"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../../notFound.module.css";

export default function EnviadoContato() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
          <span className={styles.titleGradient}>Enviado!</span> Mensagem recebida
        </h1>

        <p className={styles.description}>
          Obrigado por entrar em contato. Recebemos sua mensagem e retornaremos em breve.
        </p>

        <div className={styles.actions}>
          <Link href="/home" className={styles.primaryButton}>
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
