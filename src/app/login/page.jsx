"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './login.module.css';

export default function Login() {
    const router = useRouter();
    
    // Estados para guardar os dados
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [userType, setUserType] = useState('candidato'); // 'candidato' ou 'recrutador'

    const handleSubmit = async (e) => {
        e.preventDefault(); // Impede o recarregamento padrão do formulário
        setError('');
        setLoading(true);

        try {
            // Faz a chamada ao seu Backend
            const response = await fetch('http://localhost:3000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // 1. Salva o Token e o Role
                localStorage.setItem('token', data.token);
                localStorage.setItem('userRole', data.role);
                localStorage.setItem('userType', userType); // Salva se é candidato ou recrutador
                
                // 2. FORÇA O REDIRECIONAMENTO (Isso resolve o problema de não mudar de tela)
                router.push('/home') 
            } else {
                // Se errou a senha
                setError(data.message || 'Email ou senha incorretos.');
            }

        } catch (err) {
            console.error(err);
            setError('Erro ao conectar com o servidor. O backend está rodando?');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.videoSection}>
                <div className={styles.videoContainer}>
                    <div className={styles.logoContainer}>
                        <Image src="/images/logo.png" alt="HireUp Logo" className={styles.logo} width={100} height={100} />
                    </div>

                    <div className={styles.videoPlaceholder}>
                        <div className={styles.videoContent}>
                            <p>Video placeholder - Conectando talentos, criando oportunidades</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.loginSection}>
                <div className={styles.loginContainer}>
                    <div className={styles.loginForm}>
                        <h1 className={styles.welcomeTitle}>Welcome Back!</h1>
                        <p className={styles.welcomeSubtitle}>Log in to your account</p>

                        {/* Seletor de Tipo de Usuário */}
                        <div className={styles.userTypeSelector}>
                            <button
                                type="button"
                                className={`${styles.userTypeButton} ${userType === 'candidato' ? styles.active : ''}`}
                                onClick={() => setUserType('candidato')}
                            >
                                <svg className={styles.userTypeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                Candidato
                            </button>
                            <button
                                type="button"
                                className={`${styles.userTypeButton} ${userType === 'recrutador' ? styles.active : ''}`}
                                onClick={() => setUserType('recrutador')}
                            >
                                <svg className={styles.userTypeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                                Recrutador
                            </button>
                        </div>

                        {/* Mensagem de Erro (Aparece se falhar) */}
                        {error && (
                            <div style={{ color: 'red', textAlign: 'center', marginBottom: '1rem', padding: '10px', backgroundColor: '#ffe6e6', borderRadius: '5px' }}>
                                {error}
                            </div>
                        )}

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.inputGroup}>
                                <div className={styles.inputWrapper}>
                                    <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className={styles.input}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <div className={styles.inputWrapper}>
                                    <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                        <circle cx="12" cy="16" r="1"></circle>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className={styles.input}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.checkboxContainer}>
                                <label className={styles.checkboxLabel}>
                                    <input type="checkbox" className={styles.checkbox} />
                                    <span className={styles.checkboxText}>Remember Me</span>
                                </label>
                                <Link href="/forgot-password" className={styles.forgotPassword}>
                                    Forgot Password?
                                </Link>
                            </div>

                            <button type="submit" className={styles.loginButton} disabled={loading}>
                                {loading ? 'Carregando...' : 'Log In'}
                            </button>
                        </form>

                        <div className={styles.signupSection}>
                            <p className={styles.signupText}>
                                Don&apos;t have an account?
                                <Link href="/sign" className={styles.signupLink}> Sign Up</Link>
                            </p>
                        </div>

                        <div className={styles.divider}>
                            <span className={styles.dividerText}>Log in with</span>
                        </div>

                        <div className={styles.socialLogin}>
                            <button className={styles.socialButton} type="button">
                                <Image src="/images/google-icon.png" alt="Google" className={styles.socialIcon} width={24} height={24} />
                            </button>
                            <button className={styles.socialButton} type="button">
                                <Image src="/images/apple-icon.png" alt="Apple" className={styles.socialIcon} width={24} height={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}