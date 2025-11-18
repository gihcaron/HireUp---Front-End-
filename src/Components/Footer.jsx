"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.logoSection}>
                    <div className={styles.logoContainer}>
                        <Image
                            src="/images/logoPreto.png"
                            alt="HireUp Logo"
                            width={200}
                            height={60}
                        />
                    </div>
                </div>
                <div className={styles.socialSection}>
                    <h3 className={styles.sectionTitle}>Siga-nos:</h3>
                    <div className={styles.socialLinks}>
                        <a href="https://www.instagram.com/senaivalinhos/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <circle cx="17.5" cy="6.5" r="1.5"></circle>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/school/senaisp-valinhos/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z"></path>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/senaisp.valinhos" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/channel/UCzqd0VpWU_w4BKwmSvFdieQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                            </svg>
                        </a>
                        <a href="mailto:contato@hireup.com.br" aria-label="Email">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Contato */}
                <div className={styles.contactSection}>
                    <h3 className={styles.sectionTitle}>Entre em contato</h3>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <span className={styles.contactLabel}>📍</span>
                            <span>Valinhos – SP</span>
                        </div>
                        <div className={styles.contactItem}>
                            <span className={styles.contactLabel}>📞</span>
                            <span>(19) 99999-9999</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className={styles.copyright}>
                <p>© HireUp — Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
