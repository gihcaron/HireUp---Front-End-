"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "antd";
import styles from "./JobCard.module.css";

export default function JobCard() {
    return (
<Card className={styles.jobCard}>
  <div className={styles.jobCardHeader}>
    <div className={styles.logoArea}>
      <Image
        src="/images/logoPreto.png"
        alt="Company Logo"
        width={40}
        height={40}
        className={styles.companyLogo}
      />
    </div>

    <div className={styles.jobHeader}>
      <h3 className={styles.jobTitle}>Desenvolvedor Front-End - Júnior</h3>
      <p className={styles.jobCompany}>Tech Solutions</p>
    </div>
  </div>

  <div className={styles.jobDescription}>

  <p className={styles.jobLocation}>São Paulo, SP</p>
  <p className={styles.jobType}>CLT</p>
  <p className={styles.jobSalary}>R$ 5.000,00</p>
  <button className={styles.applyButton}>Ver mais →</button>

  </div>

</Card>
    );
}