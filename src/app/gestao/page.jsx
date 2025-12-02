"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./gestao.module.css";

export default function GestaoVagas() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className={styles.page}>
      <button 
        className={styles.hamburgerButton}
        onClick={toggleMenu}
        aria-label="Abrir menu"
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>

      {isMenuOpen && (
        <div className={styles.overlay} onClick={closeMenu}></div>
      )}

      <div className={`${styles.sidebar} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.logoSection}>
          <Image
            src="/images/logo.png"
            alt="HireUp Logo"
            width={80}
            height={30}
            className={styles.logo}
          />
          <div className={styles.logoTextContainer}>
            <span className={styles.logoSubtext}>Agência de Recrutamento</span>
          </div>
        </div>

        <div className={styles.userProfile}>
          <div className={styles.userAvatar}>
            <Image
              src="/images/users/Sarah-Carvalho.jpg"
              alt="Avatar"
              width={50}
              height={50}
              className={styles.avatarImage}
            />
          </div>
          <div className={styles.userInfo}>
            <h3 className={styles.userName}>Giovanna Caron</h3>
            <p className={styles.userRole}>Administrador</p>
          </div>
        </div>

        <nav className={styles.navigation}>
          <div className={styles.menuSection}>
            <span className={styles.sectionTitle}>Acompanhar Triagem</span>
          </div>
          
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link href="/gestao" onClick={closeMenu} className={styles.menuLink}>
                Gestão de Vagas
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/publicar" onClick={closeMenu} className={styles.menuLink}>
                Publicar Nova Vaga
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/" onClick={closeMenu} className={styles.menuLink}>
                Sair
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.content}>
        <h1 className={styles.pageTitle}>Gestão de Vagas</h1>
        <p className={styles.pageSubtitle}>Gerencie e acompanhe todas as vagas publicadas</p>
        
        <div className={styles.mainContent}>
          <p>Página em desenvolvimento...</p>
        </div>
      </div>
    </main>
  );
}