'use client';

import styles from './Sidebar.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Sidebar({ activeMenu = 'triagem' }) {
    const router = useRouter();

    return (
        <aside className={styles.sidebar}>
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
                    onClick={() => router.push('/candidaturas')}
                >
                    Acompanhar Triagem
                </button>
                <button
                    className={`${styles.menuItem} ${activeMenu === 'gestao' ? styles.active : ''}`}
                    onClick={() => router.push('/gestao')}
                >
                    Gestão de Vagas
                </button>
                <button
                    className={`${styles.menuItem} ${activeMenu === 'publicar' ? styles.active : ''}`}
                    onClick={() => router.push('/publicar')}
                >
                    Publicar Nova Vaga
                </button>
                <button
                    className={styles.menuItem}
                    onClick={() => router.push('/login')}
                >
                    Sair
                </button>
            </nav>
        </aside>
    );
}
