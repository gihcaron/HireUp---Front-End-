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
        <Image
          src="/images/workGroup.png"
          alt="Banner Image"
          width={600}
          height={400}
          className={styles.bannerImage}
        />
      </section>
    </section>
  );
}
