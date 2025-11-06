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
                        <li className={styles.item}><a href="/home">Home</a></li>
                        <li className={styles.item}><a href="/profissionais">Vagas</a></li>
                        <li className={styles.item}><a href="/entrevistas">Entrevistas</a></li>
                        <li className={styles.sobreNos}><a href="/sobre-mim" className={styles.sobreTitle}>Nos Contate</a></li>
                    </ul>
                </nav>
            )}

            {/* Botão Hamburguer  */}
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
              <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
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
                      <Link href="/home" onClick={closeMenu}>Home</Link>
                    </li>
                    <li>
                      <Link href="/profissionais" onClick={closeMenu}>Vagas</Link>
                    </li>
                    <li>
                      <Link href="/entrevistas" onClick={closeMenu}>Entrevistas</Link>
                    </li>
                    <li className={styles.sobreNos}>
                      <Link href="/sobre-mim" className={styles.sobreTitle} onClick={closeMenu}>
                        Nos Contate
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
        </header>
    );
}