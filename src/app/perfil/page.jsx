"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./perfil.module.css";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaSave, FaTimes, FaLinkedin, FaGithub, FaCamera } from "react-icons/fa";

export default function Perfil() {
    const [editingSection, setEditingSection] = useState(null);
    const fileInputRef = useRef(null);
    const [userData, setUserData] = useState({
        name: "Maria Silva",
        email: "maria.silva@email.com",
        phone: "(11) 99999-9999",
        location: "São Paulo, SP",
        title: "Desenvolvedora Frontend",
        bio: "Desenvolvedora Frontend com 3 anos de experiência em React, Next.js e TypeScript. Apaixonada por criar interfaces de usuário intuitivas e acessíveis.",
        linkedin: "linkedin.com/in/mariasilva",
        github: "github.com/mariasilva",
        profileImage: null
    });

    const [experiences] = useState([
        {
            id: 1,
            company: "TechCorp",
            position: "Desenvolvedora Frontend Jr.",
            period: "Jan 2022 - Presente",
            description: "Desenvolvimento de interfaces web responsivas usando React e Next.js"
        },
        {
            id: 2,
            company: "StartupXYZ",
            position: "Estagiária de Desenvolvimento",
            period: "Jun 2021 - Dez 2021",
            description: "Assistência no desenvolvimento de componentes React e manutenção de código"
        }
    ]);

    const [skills] = useState([
        "React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3",
        "Tailwind CSS", "Git", "Figma", "Node.js"
    ]);

    const handleEdit = (section) => {
        setEditingSection(section);
    };

    const handleSave = () => {
        setEditingSection(null);
    };

    const handleCancel = () => {
        setEditingSection(null);
    };

    const handleInputChange = (field, value) => {
        setUserData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Validar tipo de arquivo
            const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
            if (!validTypes.includes(file.type)) {
                alert('Por favor, selecione uma imagem válida (JPEG, PNG, GIF ou WebP)');
                return;
            }

            // Validar tamanho do arquivo (máximo 5MB)
            const maxSize = 5 * 1024 * 1024; // 5MB em bytes
            if (file.size > maxSize) {
                alert('A imagem deve ter no máximo 5MB');
                return;
            }

            // Criar URL temporária para preview
            const imageUrl = URL.createObjectURL(file);
            setUserData(prev => ({
                ...prev,
                profileImage: imageUrl
            }));
        }
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <main className={styles.container}>
            {/* Header do Perfil */}
            <section className={styles.profileHeader}>
                <div className={styles.profileImageContainer}>
                    <div className={styles.profileImage} onClick={handleImageClick}>
                        {userData.profileImage ? (
                            <Image
                                src={userData.profileImage}
                                alt="Foto de perfil"
                                width={120}
                                height={120}
                                className={styles.profileImagePreview}
                            />
                        ) : (
                            <FaUser className={styles.profileIcon} />
                        )}
                        <div className={styles.imageUploadOverlay}>
                            <FaCamera className={styles.cameraIcon} />
                        </div>
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        accept="image/*"
                        className={styles.hiddenFileInput}
                    />
                </div>

                <div className={styles.profileInfo}>
                    {editingSection === 'basic' ? (
                        <div className={styles.editForm}>
                            <input
                                type="text"
                                value={userData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                className={styles.editInput}
                            />
                            <input
                                type="text"
                                value={userData.title}
                                onChange={(e) => handleInputChange('title', e.target.value)}
                                className={styles.editInput}
                            />
                            <textarea
                                value={userData.bio}
                                onChange={(e) => handleInputChange('bio', e.target.value)}
                                className={styles.editTextarea}
                                rows="3"
                            />
                            <div className={styles.editButtons}>
                                <button onClick={handleSave} className={styles.saveButton}>
                                    <FaSave /> Salvar
                                </button>
                                <button onClick={handleCancel} className={styles.cancelButton}>
                                    <FaTimes /> Cancelar
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className={styles.profileHeader}>
                                <h1 className={styles.profileName}>{userData.name}</h1>
                                <button
                                    onClick={() => handleEdit('basic')}
                                    className={styles.editButton}
                                >
                                    <FaEdit />
                                </button>
                            </div>
                            <p className={styles.profileTitle}>{userData.title}</p>
                            <p className={styles.profileBio}>{userData.bio}</p>
                        </>
                    )}
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Informações de Contato</h2>
                    {editingSection !== 'contact' && (
                        <button
                            onClick={() => handleEdit('contact')}
                            className={styles.editButton}
                        >
                            <FaEdit />
                        </button>
                    )}
                </div>

                {editingSection === 'contact' ? (
                    <div className={styles.editForm}>
                        <div className={styles.inputGroup}>
                            <FaEnvelope className={styles.inputIcon} />
                            <input
                                type="email"
                                value={userData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className={styles.editInput}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <FaPhone className={styles.inputIcon} />
                            <input
                                type="tel"
                                value={userData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                className={styles.editInput}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <FaMapMarkerAlt className={styles.inputIcon} />
                            <input
                                type="text"
                                value={userData.location}
                                onChange={(e) => handleInputChange('location', e.target.value)}
                                className={styles.editInput}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <FaLinkedin className={styles.inputIcon} />
                            <input
                                type="text"
                                value={userData.linkedin}
                                onChange={(e) => handleInputChange('linkedin', e.target.value)}
                                className={styles.editInput}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <FaGithub className={styles.inputIcon} />
                            <input
                                type="text"
                                value={userData.github}
                                onChange={(e) => handleInputChange('github', e.target.value)}
                                className={styles.editInput}
                            />
                        </div>
                        <div className={styles.editButtons}>
                            <button onClick={handleSave} className={styles.saveButton}>
                                <FaSave /> Salvar
                            </button>
                            <button onClick={handleCancel} className={styles.cancelButton}>
                                <FaTimes /> Cancelar
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <FaEnvelope className={styles.contactIcon} />
                            <span>{userData.email}</span>
                        </div>
                        <div className={styles.contactItem}>
                            <FaPhone className={styles.contactIcon} />
                            <span>{userData.phone}</span>
                        </div>
                        <div className={styles.contactItem}>
                            <FaMapMarkerAlt className={styles.contactIcon} />
                            <span>{userData.location}</span>
                        </div>
                        <div className={styles.contactItem}>
                            <FaLinkedin className={styles.contactIcon} />
                            <span>{userData.linkedin}</span>
                        </div>
                        <div className={styles.contactItem}>
                            <FaGithub className={styles.contactIcon} />
                            <span>{userData.github}</span>
                        </div>
                    </div>
                )}
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Experiência Profissional</h2>
                </div>

                <div className={styles.experienceList}>
                    {experiences.map((exp) => (
                        <div key={exp.id} className={styles.experienceItem}>
                            <h3 className={styles.experiencePosition}>{exp.position}</h3>
                            <h4 className={styles.experienceCompany}>{exp.company}</h4>
                            <p className={styles.experiencePeriod}>{exp.period}</p>
                            <p className={styles.experienceDescription}>{exp.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Habilidades</h2>
                </div>

                <div className={styles.skillsList}>
                    {skills.map((skill, index) => (
                        <span key={index} className={styles.skillTag}>
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Configurações</h2>
                </div>

                <div className={styles.settingsButtons}>
                    <button className={styles.settingsButton}>
                        Alterar Senha
                    </button>
                    <button className={styles.settingsButton}>
                        Privacidade
                    </button>
                    <button className={styles.settingsButton}>
                        Notificações
                    </button>
                    <button className={`${styles.settingsButton} ${styles.dangerButton}`}>
                        Excluir Conta
                    </button>
                </div>
            </section>
        </main>
    );
}
