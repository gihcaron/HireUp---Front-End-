"use client";
import React from "react";
import styles from "./page.module.css";

export default function DetalhesVaga() {
	return (
		<main className={styles.page}>
			<header className={styles.header}>
				<h1 className={styles.title}>Auxiliar de Produção</h1>
				<h2 className={styles.subtitle}>Veja mais detalhes!</h2>
			</header>

			<section className={styles.hero}>
				<div className={styles.left}>
					<p className={styles.lead}>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum ha
					</p>

					<div className={styles.salaryCard}>
						<div className={styles.salaryLabel}>Lorem</div>
						<div className={styles.salaryValue}>2.500$</div>
					</div>

					<div className={styles.insights}>
						<div className={styles.insightCard}>
							<div className={styles.insightHeader}>Insigths Overview</div>
							<div className={styles.insightRows}>
								<div>HireUp</div>
								<div> Lorem Ipsum ha</div>
								<div> Lorem Ipsum ha</div>
							</div>
						</div>

						<div className={styles.insightCardLight}>
							<div className={styles.insightHeader}>Insigths Overview</div>
							<div className={styles.tags}>
								<span className={styles.tag}>been the industry's</span>
								<span className={styles.tagOutline}>2.400</span>
								<span className={styles.tag}>been the industry's</span>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.right}>
					<img
						src="/images/workGroup.png"
						alt="Pessoa segurando tablet"
						className={styles.person}
					/>
				</div>
			</section>

			<section className={styles.description}>
				<p>
					been the industry's standard dummy text ever since the 1500s, when an
					unknown printer took a galley of type and scrambled it to make a type
					specimen book. It has survived not only five centuries, but also the
					leap into electronic typesetting, remaining essentially unchanged.
					It was popula
				</p>
			</section>

			<section className={styles.company}>
				<h3 className={styles.companyTitle}>Empresa e Cultura</h3>
				
				<div className={styles.missionCards}>
					<div className={styles.missionCard}>
						<div className={styles.missionIcon} style={{backgroundColor: '#22d3ee'}}>
							<div className={styles.iconText}>MISSÃO</div>
						</div>
						<h4 className={styles.missionLabel}>MISSÃO</h4>
						<p className={styles.missionText}>
							Lorem Ipsum is simply dummy text of the
						</p>
					</div>

					<div className={styles.missionCard}>
						<div className={styles.missionIcon} style={{backgroundColor: '#3b82f6'}}>
							<div className={styles.iconText}>Visão</div>
						</div>
						<h4 className={styles.missionLabel}>MISSÃO</h4>
						<p className={styles.missionText}>
							Lorem Ipsum is simply dummy text of the
						</p>
					</div>

					<div className={styles.missionCard}>
						<div className={styles.missionIcon} style={{backgroundColor: '#1e40af'}}>
							<div className={styles.iconText}>Valores</div>
						</div>
						<h4 className={styles.missionLabel}>MISSÃO</h4>
						<p className={styles.missionText}>
							Lorem Ipsum is simply dummy text of the
						</p>
					</div>
				</div>

				<div className={styles.companyContent}>
					<div className={styles.companyLeft}>
						<p className={styles.companyDescription}>
							been the industry's standard dummy text ever since the 1500s, when an unknown 
							printer took a galley of type and scrambled it to make a type specimen book.
						</p>
					</div>
					
					<div className={styles.companyRight}>
						<div className={styles.mapContainer}>
							<div className={styles.mapPlaceholder}>
								<div className={styles.mapPin}>📍</div>
								<div className={styles.mapText}>Localização da Empresa</div>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.buttonContainer}>
					<button className={styles.applyButton}>
						Quero me Candidatar
					</button>
				</div>
			</section>
		</main>
	);
}
