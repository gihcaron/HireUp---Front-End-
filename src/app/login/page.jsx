import Link from 'next/link';
import Image from 'next/image';
import styles from './login.module.css';

export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.videoSection}>
                <div className={styles.videoContainer}>
                    <div className={styles.logoContainer}>
                        <Image src="/images/logo.png" alt="HireUp Logo" className={styles.logo} width={100} height={100} />
                    </div>

                    {/* Área reservada para o vídeo */}
                    <div className={styles.videoPlaceholder}>
                        {/* Aqui será colocado o vídeo da mão e animações */}
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

                        <form className={styles.form}>
                            <div className={styles.inputGroup}>
                                <div className={styles.inputWrapper}>
                                    <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        className={styles.input}
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

                            <button type="submit" className={styles.loginButton}>
                                Log In
                            </button>
                        </form>

                        <div className={styles.signupSection}>
                            <p className={styles.signupText}>
                                Don&apos;t have an account?
                                <Link href="/signup" className={styles.signupLink}> Sign Up</Link>
                            </p>
                        </div>

                        <div className={styles.divider}>
                            <span className={styles.dividerText}>Log in with</span>
                        </div>

                        <div className={styles.socialLogin}>
                            <button className={styles.socialButton}>
                                <Image src="/images/google-icon.png" alt="Google" className={styles.socialIcon} width={24} height={24} />
                            </button>
                            <button className={styles.socialButton}>
                                <Image src="/images/apple-icon.png" alt="Apple" className={styles.socialIcon} width={24} height={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}