"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "antd";
import { useRouter } from 'next/navigation';
import styles from "./JobCard.module.css";

export default function JobCard({title,salary, company, city, type, link}) {
  const router = useRouter();
      
return (
<Card className={styles.jobCard}>
  <div className={styles.jobCardHeader}>
  

    <div className={styles.jobHeader}>
      <h3 className={styles.jobTitle}>{title}</h3>
      <p className={styles.jobCompany}>{company}</p>
    </div>
  </div>

  <div className={styles.jobDescription}>

  <p className={styles.jobLocation}>{city}</p>
  <p className={styles.jobType}>{type}</p>
  <p className={styles.jobSalary}>R$ {salary}</p>
  {link && <button className={styles.applyButton} onClick={() => router.push(link)}>Ver mais →</button>}

  </div>

</Card>
    );
}