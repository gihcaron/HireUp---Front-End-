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
        <div className={styles.header}>
          <div className={styles.heroImage}>
            <Image
              src="/images/jobWorkGroup.jpg"
              alt="Equipe trabalhando"
              width={600}
              height={200}
              className={styles.workImage}
            />
          </div>
          <div className={styles.welcomeCard}>
            <div className={styles.welcomeContent}>
              <span className={styles.welcomeTitle}>HireUp</span>
              <span className={styles.welcomeSubtitle}>Agência de Recrutamento</span>
              <p className={styles.welcomeText}>Bem vindo de volta</p>
              <p className={styles.welcomeUser}>HireUp ADM</p>
            </div>
          </div>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <Image src="/images/text.png" alt="Vagas Postadas" width={32} height={32} />
            </div>
            <div className={styles.statNumber}>254</div>
            <div className={styles.statLabel}>Vagas Postadas</div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <Image src="/images/folder.png" alt="Vagas em aberto" width={32} height={32} />
            </div>
            <div className={styles.statNumber}>15</div>
            <div className={styles.statLabel}>Vagas em aberto</div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <Image src="/images/checked.png" alt="Vagas fechadas" width={32} height={32} />
            </div>
            <div className={styles.statNumber}>10</div>
            <div className={styles.statLabel}>Vagas fechadas</div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <Image src="/images/users.png" alt="Aplicações" width={32} height={32} />
            </div>
            <div className={styles.statNumber}>300</div>
            <div className={styles.statLabel}>Aplicações</div>
          </div>
        </div>

        <div className={styles.searchSection}>
          <div className={styles.searchContainer}>
            <div className={styles.searchInputWrapper}>
              <Image 
                src="/images/loupe.png" 
                alt="Pesquisar" 
                width={20} 
                height={20} 
                className={styles.searchIcon}
              />
              <input
                type="text"
                placeholder="Vagas"
                className={styles.searchInput}
              />
              <button className={styles.searchButton}>Pesquisar</button>
            </div>
          </div>
        </div>

          </div>
    </main>
  );
}