"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleLogoClick = () => router.push("/home");
  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoRectangular} onClick={handleLogoClick}>
        <Image src="/images/logoPreto.png" alt="Logo" width={170} height={50} />
      </div>

      {/* Menu Desktop */}
      {!isMobile && (
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="/home">Home</Link>
            </li>
            <li className={styles.item}>
              <Link href="/vagas">Vagas</Link>
            </li>
            <li className={styles.item}>
              <Link href="/login">Perfil para Recrutador</Link>
            </li>
            <li className={styles.sobreNos}>
              <Link href="/contato" className={styles.sobreTitle}>
                Nos Contate
              </Link>
            </li>
          </ul>
        </nav>
      )}
      {isMobile && !isMenuOpen && (
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
        </button>
      )}

      {/* Menu Mobile */}
      {isMobile && (
        <div
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}
        >
          <button
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            ×
          </button>
          <nav>
            <ul>
              <li>
                <Link href="/home" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/vagas" onClick={closeMenu}>
                  Vagas
                </Link>
              </li>
              <li>
                <Link href="/login" onClick={closeMenu}>
                  Perfil para Recrutador
                </Link>
              </li>
              <li>
              </li>
              <li className={styles.contato}>
                <Link
                  href="/contato"
                  className={styles.sobreTitle}
                  onClick={closeMenu}
                >
                  Nos Contate
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Menu Mobile */}
    </header>
  );
}
