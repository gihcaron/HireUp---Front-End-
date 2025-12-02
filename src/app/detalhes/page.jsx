"use client";
import React from "react";
import styles from "./page.module.css";
import EmpresaCultura from "../../Components/EmpresaCultura";

export default function DetalhesVaga() {
	return (
		<main className={styles.page}>
			<header className={styles.header}>
				<h1 className={styles.title}>Auxiliar de Produção</h1>
				<h2 className={styles.subtitle}>Veja mais detalhes da oportunidade!</h2>
			</header>

			<section className={styles.hero}>
				<div className={styles.left}>
					<p className={styles.lead}>
						O Auxiliar de Produção será responsável por apoiar as etapas de fabricação, organização do ambiente de trabalho e controle de qualidade dos produtos. Procuramos alguém ágil, comprometido e com vontade de aprender.
					</p>

					<div className={styles.salaryCard}>
						<div className={styles.salaryLabel}>💰 Faixa Salarial</div>
						<div className={styles.salaryValue}>R$ 2.500,00</div>
						<div className={styles.salaryValue}>Salário compatível com o mercado + benefícios</div>
					</div>

					<div className={styles.insights}>
						<div className={styles.insightCard}>
							<div className={styles.insightHeader}>Responsabilidades Principais</div>
							<div className={styles.insightRows}>
								<div>• Auxiliar nas etapas de montagem, embalagem e separação de produtos</div>
								<div>• Realizar inspeções básicas de qualidade dos materiais</div>
								<div>• Manter organização e segurança do ambiente de trabalho</div>
							</div>
						</div>

						<div className={styles.insightCard}>
							<div className={styles.insightHeader}>Requisitos e Diferenciais</div>
							<div className={styles.insightRows}>
								<div>Ensino médio completo</div>
								<div>Boa comunicação e trabalho em equipe</div>
								<div>Disponibilidade para horários flexíveis</div>
								<div>Experiência prévia em produção</div>
								<div>Conhecimento básico em máquinas e equipamentos industriais</div>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.right}>
					<img
						src="/images/detalhes.png"
						alt="Pessoa segurando tablet"
						className={styles.person}
					/>
				</div>
			</section>

			<section className={styles.description}>
				<p>
					A empresa busca um profissional dedicado para integrar sua equipe de produção. Entre as atividades estão o apoio no processo de fabricação, organização do ambiente, registro de informações no sistema e garantia de que as etapas sigam os padrões estabelecidos.
				</p>
				<p>O colaborador trabalhará diretamente com a equipe de produção e terá oportunidade de aprender novas funções dentro do setor. A empresa valoriza pessoas responsáveis, proativas e que gostem de trabalhar em equipe.</p>
			</section>

			<EmpresaCultura />
		</main>
	);
}
