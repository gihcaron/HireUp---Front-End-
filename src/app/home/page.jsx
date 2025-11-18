"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

import Header from "../../Components/Header";
export default function home() {
  return (
    <section className={styles.homeContainer}>


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
      <section className={styles.callToActionSection}>
        <div className={styles.callToActionContainer}>
          <div className={styles.callToActionTitleArea}>
            <h2 className={styles.callToActionTitle}>
              Pronto para transformar seu processo de contratação?
            </h2>
            <p className={styles.callToActionDescription}>
              {" "}
              Na HireUp você combina as melhores vagas com seu perfil
              profissional. Está esperando o que para alavancar sua carreira,
              como já. Seja HireUP.{" "}
            </p>
          </div>

          <div className={styles.imageGrid}>
            {/* Imagem a esquerda */}
            <div className={styles.imageCardLeft}>
              <Image
                src="/images/workgroup.jpg"
                alt="Escritório 1"
                width={600}
                height={350}
                className={styles.LeftImage}
              />
              <div className={styles.overlayCard}>
                <h3>laldisal</h3>
                  <p>alguma coisa</p>
                  <p>alguma coisa</p>
              </div>
            </div>

            {/* Imagem a direita */}

            <div className={styles.imageCardRight}>
              <Image
                src="/images/jobWorkGroup.jpg"
                alt="Escritório 2"
                width={600}
                height={350}
                className={styles.mainImage}
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
