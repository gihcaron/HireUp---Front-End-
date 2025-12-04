'use client';

import { useState } from 'react';
import Sidebar from '@/Components/Sidebar';
import styles from './publicar.module.css';

export default function PublicarVaga() {
    const [formData, setFormData] = useState({
        titulo: '',
        status: '',
        descricao: '',
        salario: '',
        empresa: '',
        regiao: '',
        tipo: '',
        idRecrutador: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        // Aqui você pode adicionar a lógica para enviar os dados
    };

    return (
        <div className={styles.pageContainer}>
            <Sidebar activeMenu="publicar" />
            
            <main className={styles.mainContent}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Adicione uma Nova Vaga de Emprego</h1>
                    <button className={styles.welcomeButton}>
                        Bem vindo de volta<br />
                        <strong>Hireup ADM</strong>
                    </button>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="titulo" className={styles.label}>Título</label>
                            <input
                                type="text"
                                id="titulo"
                                name="titulo"
                                value={formData.titulo}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Título"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="status" className={styles.label}>Status</label>
                            <div className={styles.selectWrapper}>
                                <select
                                    id="status"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className={styles.select}
                                >
                                    <option value="">Status</option>
                                    <option value="em andamento">em andamento</option>
                                    <option value="contratado">contratado</option>
                                    <option value="recusado">recusado</option>
                                </select>
                                <span className={styles.selectArrow}>›</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroupFull}>
                            <label htmlFor="descricao" className={styles.label}>Descrição</label>
                            <textarea
                                id="descricao"
                                name="descricao"
                                value={formData.descricao}
                                onChange={handleChange}
                                className={styles.textarea}
                                placeholder="Descrição"
                                rows={4}
                            />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="salario" className={styles.label}>Salário</label>
                            <input
                                type="text"
                                id="salario"
                                name="salario"
                                value={formData.salario}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Salário"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="empresa" className={styles.label}>Empresa</label>
                            <input
                                type="text"
                                id="empresa"
                                name="empresa"
                                value={formData.empresa}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Empresa"
                            />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="regiao" className={styles.label}>Região</label>
                            <input
                                type="text"
                                id="regiao"
                                name="regiao"
                                value={formData.regiao}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Região"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="tipo" className={styles.label}>Tipo</label>
                            <input
                                type="text"
                                id="tipo"
                                name="tipo"
                                value={formData.tipo}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Tipo"
                            />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroupFull}>
                            <label htmlFor="idRecrutador" className={styles.label}>ID Recrutador</label>
                            <input
                                type="text"
                                id="idRecrutador"
                                name="idRecrutador"
                                value={formData.idRecrutador}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="ID Recrutador"
                            />
                        </div>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button type="submit" className={styles.submitButton}>
                            Publicar Vaga
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}