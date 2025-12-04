import React from "react";
import Link from "next/link";
import styles from "./JobManagementCard.module.css";

export default function JobManagementCard({ title, salary, location, link }) {
  return (
    <div className={styles.jobCard}>
      <div className={styles.jobHeader}>
        <h3 className={styles.jobTitle}>{title}</h3>
      </div>
      <div className={styles.jobDetails}>
        <span className={styles.jobSalary}>{salary}</span>
        <span className={styles.jobLocation}>{location}</span>
        {link && (
          <Link href={link} className={styles.editButton}>
            Detalhes
          </Link>
        )}
      </div>
    </div>
  );
}
