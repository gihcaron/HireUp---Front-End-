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
                <Image
                    src="/images/logoPreto.png"
                    alt="Logo"
                    width={170}
                    height={50}
                />
            </div>

            {/* Menu Desktop */}
            {!isMobile && (
              <nav className={styles.navigation}>
                <ul className={styles.list}>
                  <li className={styles.item}><Link href="/home">Home</Link></li>
                  <li className={styles.item}><Link href="/vagas">Vagas</Link></li>
                  <li className={styles.item}><Link href="/candidaturas">Candidaturas</Link></li>
                  <li className={styles.item}><Link href="/perfil">Perfil</Link></li>
                  <li className={styles.sobreNos}>
                    <Link href="/contato" className={styles.sobreTitle}>Nos Contate</Link>
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

            {/* Overlay */}
            {isMobile && isMenuOpen && (
              <div className={styles.overlay} onClick={closeMenu}></div>
            )}

            {/* Menu Mobile */}
            {isMobile && (
              <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
                <button
                  className={styles.closeButton}
                  onClick={closeMenu}
                  aria-label="Fechar menu"
                >
                  ×
                </button>
                
                {/* Perfil do usuário */}
                <div className={styles.userProfile}>
                  <div className={styles.userAvatar}>
                    <Image
                      src="/images/users/Sarah-Carvalho.jpg"
                      alt="Avatar"
                      width={40}
                      height={40}
                      className={styles.avatarImage}
                    />
                  </div>
                  <div className={styles.userInfo}>
                    <h3 className={styles.userName}>Giovanna Caron</h3>
                    <p className={styles.userRole}>Administrador</p>
                  </div>
                </div>

                <nav className={styles.menuNav}>
                  <ul className={styles.menuList}>
                    <li className={styles.menuSection}>
                      <span className={styles.sectionTitle}>Acompanhar Triagem</span>
                    </li>
                    <li className={styles.menuItem}>
                      <Link href="/gestao" onClick={closeMenu}>
                        Gestão de Vagas
                      </Link>
                    </li>
                    <li className={styles.menuItem}>
                      <Link href="/publicar" onClick={closeMenu}>
                        Publicar Nova Vaga
                      </Link>
                    </li>
                    <li className={styles.menuItem}>
                      <Link href="/" onClick={closeMenu}>
                        Sair
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
        </header>
    );
}