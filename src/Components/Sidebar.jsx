'use client';

import styles from './Sidebar.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Sidebar({ activeMenu = 'triagem' }) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    const handleMenuClick = (path) => {
        router.push(path);
        closeSidebar();
    };

    // Fecha o menu ao redimensionar para desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Previne scroll quando o menu está aberto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Botão Hamburger (visível apenas em mobile) */}
            <button
                className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
                onClick={toggleSidebar}
                aria-label="Toggle menu"
            >
                <div className={styles.hamburgerIcon}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>

            {/* Overlay para fechar o menu ao clicar fora (mobile) */}
            <div
                className={`${styles.overlay} ${isOpen ? styles.show : ''}`}
                onClick={closeSidebar}
            />

            {/* Sidebar */}
            <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <div className={styles.userProfile}>
                    <div className={styles.avatar}>
                        <Image
                            src="/images/users/Sarah-Carvalho.jpg"
                            alt="Giovanna Caron"
                            width={65}
                            height={65}
                            className={styles.avatarImage}
                            quality={100}
                            priority
                        />
                    </div>
                    <div className={styles.userName}>
                        <strong>Giovanna Caron</strong>
                        <span>Administrador</span>
                    </div>
                </div>

                <nav className={styles.menu}>
                    <button
                        className={`${styles.menuItem} ${activeMenu === 'triagem' ? styles.active : ''}`}
                        onClick={() => handleMenuClick('/candidaturas')}
                    >
                        Acompanhar Triagem
                    </button>
                    <button
                        className={`${styles.menuItem} ${activeMenu === 'gestao' ? styles.active : ''}`}
                        onClick={() => handleMenuClick('/gestao')}
                    >
                        Gestão de Vagas
                    </button>
                    <button
                        className={`${styles.menuItem} ${activeMenu === 'publicar' ? styles.active : ''}`}
                        onClick={() => handleMenuClick('/publicar')}
                    >
                        Publicar Nova Vaga
                    </button>
                    <button
                        className={styles.menuItem}
                        onClick={() => handleMenuClick('/login')}
                    >
                        Sair
                    </button>
                </nav>
            </aside>
        </>
    );
}
