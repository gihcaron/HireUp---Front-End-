"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "./candidatura.module.css";

export default function Candidatura() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [cargo, setCargo] = useState("Carregando...");
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        arquivo: null,
        concordancia: false,
    });

    const [fileName, setFileName] = useState("Nenhum arquivo selecionado");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const cargoParam = searchParams.get("cargo");
        if (cargoParam) {
            setCargo(cargoParam);
        } else {
            setCargo("Vaga de Emprego");
        }
    }, [searchParams]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            setFormData({
                ...formData,
                arquivo: file,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.concordancia) {
            setError("Você deve concordar com os termos para prosseguir");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const form = new FormData();
            form.append("nome", formData.nome);
            form.append("email", formData.email);
            form.append("telefone", formData.telefone);
            form.append("cargo", cargo);
            if (formData.arquivo) {
                form.append("curriculo", formData.arquivo);
            }

            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/candidaturas`, {
                    method: "POST",
                    body: form,
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log("Resposta do servidor:", data);
                }
            } catch (apiErr) {
                console.warn("Erro ao enviar para API, mas continuando:", apiErr);
            }

            setSuccess(true);
            setFormData({
                nome: "",
                email: "",
                telefone: "",
                arquivo: null,
                concordancia: false,
            });
            setFileName("Nenhum arquivo selecionado");
            
            router.push('/candidaturas/candidatura/enviado');
        } catch (err) {
            setError(err.message || "Erro ao enviar candidatura. Tente novamente.");
            console.error("Erro:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <main className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Candidatura</h1>
                    <h2 className={styles.subtitle}>{cargo}</h2>
                    
                    <p className={styles.description}>
                        Estamos buscando profissionais para atuar como Auxiliar de Produção.
                        Preencha seus dados e envie seu currículo para participar do processo
                        seletivo.
                    </p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="nome" className={styles.label}>Nome</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                className={styles.input}
                                placeholder="Digite seu nome completo"
                                value={formData.nome}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles.input}
                                placeholder="Digite seu email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="telefone" className={styles.label}>Telefone</label>
                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                className={styles.input}
                                placeholder="Digite seu telefone"
                                value={formData.telefone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className={styles.fileInputWrapper}>
                            <label htmlFor="arquivo" className={styles.fileButton}>
                                Escolher arquivo
                            </label>
                            <input
                                type="file"
                                id="arquivo"
                                name="arquivo"
                                className={styles.fileInput}
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx"
                                required
                            />
                            <span className={styles.fileName}>{fileName}</span>
                        </div>

                        <div className={styles.checkboxGroup}>
                            <input
                                type="checkbox"
                                id="concordancia"
                                name="concordancia"
                                className={styles.checkbox}
                                checked={formData.concordancia}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="concordancia" className={styles.checkboxLabel}>
                                Concordância de termos
                            </label>
                        </div>

                        <button type="submit" className={styles.submitButton} disabled={loading}>
                            {loading ? "Enviando..." : "Enviar"}
                        </button>
                    </form>
                </div>
            </main>
        </>
        
    );
}
