"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

import Header from "../../Components/Header";
export default function home() {
  return (
    <section className={styles.homeContainer}>
      <Header />

      <section className={styles.bannerSection}>
        <h1 className={styles.titleBanner}>
          Do primeiro contato à contratação,
          <span className={styles.coloredTitle}>
            {" "}
            contrate melhor com o HireUp.
          </span>
        </h1>
        <p className={styles.subtitleBanner}>
          Centralize seu processo seletivo com eficiência e simplicidade.
        </p>

        <div className={styles.imageContainer}>
          <Image
            src="/images/workGroup.png"
            alt="Banner Image"
            width={600}
            height={400}
            className={styles.bannerImage}
          />
        </div>

      </section>
      <section className={styles.statsSection}>
      <div className={styles.statsContainer}>
        <div className={styles.statCardBlue}>
          <h2>50K</h2>
          <p>candidatos</p>
          <p>ativos</p>
        </div>
        <div className={styles.statCard}>
          <h2>13+</h2>
          <p>empresas</p>
        </div>
        <div className={styles.statCard}>
          <h2>20</h2>
          <p>vagas abertas</p>
        </div>
        <div className={styles.statCard}>
          <h2>10K</h2>
          <p>entrevistas</p>
        </div>
      </div>
      </section>

    </section>
  );
}
