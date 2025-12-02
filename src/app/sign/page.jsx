'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './sign.module.css';

export default function Signup() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [terms, setTerms] = useState(false);
    const [userType, setUserType] = useState('candidato'); // 'candidato' ou 'recrutador'

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!terms) {
            setError("You must agree to the Terms and Conditions.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:3000/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: fullName,
                    email,
                    password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Something went wrong.");
                setLoading(false);
                return;
            }

            setSuccess("Account created successfully!");
            setLoading(false);
            
            setTimeout(() => {
                window.location.href = "/login";
            }, 1500);

        } catch (err) {
            setError("Error connecting to the server.");
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

            <div className={styles.signupSection}>
                <div className={styles.signupContainer}>
                    <div className={styles.signupForm}>
                        <h1 className={styles.welcomeTitle}>Create Your Account</h1>
                        <p className={styles.welcomeSubtitle}>Sign up to get started</p>

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

                        {/* MENSAGENS */}
                        {error && <p className={styles.errorMessage}>{error}</p>}
                        {success && <p className={styles.successMessage}>{success}</p>}

                        <form className={styles.form} onSubmit={handleSubmit}>

                            {/* FULL NAME */}
                            <div className={styles.inputGroup}>
                                <div className={styles.inputWrapper}>
                                    <svg className={styles.inputIcon} viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className={styles.input}
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* EMAIL */}
                            <div className={styles.inputGroup}>
                                <div className={styles.inputWrapper}>
                                    <svg className={styles.inputIcon} viewBox="0 0 24 24">
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

                            {/* PASSWORD */}
                            <div className={styles.inputGroup}>
                                <div className={styles.inputWrapper}>
                                    <svg className={styles.inputIcon} viewBox="0 0 24 24">
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

                            {/* CONFIRM PASSWORD */}
                            <div className={styles.inputGroup}>
                                <div className={styles.inputWrapper}>
                                    <svg className={styles.inputIcon} viewBox="0 0 24 24">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                        <circle cx="12" cy="16" r="1"></circle>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        className={styles.input}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* TERMS */}
                            <div className={styles.checkboxContainer}>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        className={styles.checkbox}
                                        checked={terms}
                                        onChange={(e) => setTerms(e.target.checked)}
                                    />
                                    <span className={styles.checkboxText}>
                                        I agree to the Terms and Conditions
                                    </span>
                                </label>
                            </div>

                            {/* SUBMIT BUTTON */}
                            <button type="submit" className={styles.signupButton} disabled={loading}>
                                {loading ? "Creating Account..." : "Sign Up"}
                            </button>
                        </form>

                        <div className={styles.loginSection}>
                            <p className={styles.loginText}>
                                Already have an account?
                                <Link href="/login" className={styles.loginLink}> Log In</Link>
                            </p>
                        </div>

                        <div className={styles.divider}>
                            <span className={styles.dividerText}>Sign up with</span>
                        </div>

                        <div className={styles.socialLogin}>
                            <button className={styles.socialButton}>
                                <Image src="/images/google-icon.png" alt="Google" width={24} height={24} />
                            </button>
                            <button className={styles.socialButton}>
                                <Image src="/images/apple-icon.png" alt="Apple" width={24} height={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
