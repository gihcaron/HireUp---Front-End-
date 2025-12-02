"use client";
import React from "react";
import styles from "./page.module.css";
import EmpresaCultura from "../../../Components/EmpresaCultura";
import { useEffect, useState } from "react";
import { Card } from "antd";
import { useParams } from "next/navigation";
import Image from "next/image";
import axios from "axios";

export default function DetalhesVaga() {
	    const { id } = useParams();
    const [data, setData] = useState(null);
    const [activeTab, setActiveTab] = useState('job');

	console.log("ID da vaga:", id);

	
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const { data: job } = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/jobs/${id}`
                );
                setData(job);
            } catch (error) {
                console.error("Erro ao buscar vagas:", error);
                setData((d) => ({ ...d, loading: false }));
            }
        };
        fetchJobs();
    }, []);


	const renderParagraphs = (value) => {
		if (!value) return null;
		if (Array.isArray(value)) {
			return value.map((v, i) => <p key={i}>{v}</p>);
		}
		return value
			.split(/\r?\n/)
			.map((line) => line.trim())
			.filter(Boolean)
			.map((line, i) => <p key={i}>{line}</p>);
	};

	return (
		<main className={styles.page}>
			<header className={styles.header}>
				<h1 className={styles.title}>{data?.title}</h1>
				<h2 className={styles.subtitle}>Veja mais detalhes da oportunidade!</h2>
			</header>

			<section className={styles.hero}>
				<div className={styles.left}>
					<p className={styles.lead}>
						{data?.description}
					</p>

					<div className={styles.salaryCard}>
						<div className={styles.salaryLabel}>💰 Faixa Salarial</div>
						<div className={styles.salaryValue}>R$ {data?.salary}</div>
						<div className={styles.salaryValue}>{data?.salary_description}</div>
					</div>

					<div className={styles.insights}>
						<div className={styles.insightCard}>
							<div className={styles.insightHeader}>Responsabilidades Principais</div>
							<div className={styles.insightRows}>
								<div>{data?.responsibilities[0]}</div>
								<div>{data?.responsibilities[1]}</div>
								<div>{data?.responsibilities[2]}</div>
								<div>{data?.responsibilities[3]}</div>
								<div>{data?.responsibilities[4]}</div>
								<div>{data?.responsibilities[5]}</div>		
							</div>
						</div>

						<div className={styles.insightCard}>
							<div className={styles.insightHeader}>Requisitos e Diferenciais</div>
							<div className={styles.insightRows}>
								<div>{data?.requirements[0]}</div>
								<div>{data?.requirements[1]}</div>
								<div>{data?.requirements[2]}</div>
								<div>{data?.requirements[3]}</div>
								<div>{data?.requirements[4]}</div>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.right}>
					<Image
						src="/images/detalhes.png"
						alt="Pessoa segurando tablet"
						className={styles.person}
						width={500}
						height={400}
					/>
				</div>
			</section>

			<section className={styles.description}>
				{renderParagraphs(data?.company_description)}
				{renderParagraphs(data?.company_overview)}
			</section>

			<EmpresaCultura
				company_mission={data?.company_mission}
				company_vision={data?.company_vision}
				company_values={data?.company_values}
				address={data?.address}
			/>
		</main>
	);
}
