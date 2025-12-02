"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./contato.module.css";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    mensagem: "",
    concordancia: false,
  });
  const router = useRouter();

    const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.concordancia) {
    alert("Por favor, aceite a concordância de termos");
    return;
    }
    router.push('/contato/enviado');

    try {
      console.log("Formulário enviado (em background):", formData);
    } catch (err) {
      console.error('Erro ao enviar contato:', err);
    }
  };

  return (
    <main className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Contato</h1>
        <h2 className={styles.subtitle}>Somos a HireUp</h2>
        
        <p className={styles.description}>
            Somos uma empresa dedicada a recrutar e desenvolver talentos,
            oferecendo oportunidades de crescimento profissional. Acreditamos
            que o sucesso vem das pessoas certas, por isso nos buscamos atrair, reter
            e promover um ambiente de trabalho inclusivo e motivador para todos.
            Estamos à disposição para esclarecer quaisquer dúvidas. Não hesite
            em entrar em contato conosco a qualquer momento.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
            <label htmlFor="nome" className={styles.label}>
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="mensagem" className={styles.label}>
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                className={styles.textarea}
                rows="6"
                required
              />
            </div>

            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="concordancia"
                name="concordancia"
                checked={formData.concordancia}
                onChange={handleChange}
                className={styles.checkbox}
                required
              />
              <label htmlFor="concordancia" className={styles.checkboxLabel}>
                Concordância de termos
              </label>
            </div>

            <button type="submit" className={styles.button}>
              Enviar
            </button>
          </form>
        </div>
      </main>
  );
}
