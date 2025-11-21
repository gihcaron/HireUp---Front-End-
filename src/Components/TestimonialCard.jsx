"use client";
import Image from "next/image";
import styles from "./TestimonialCard.module.css";

export default function TestimonialCard({ item, isCenter }) {
  return (
    <div
      className={`${styles.card} ${isCenter ? styles.center : ""}`}
    >
      <div className={styles.profile}>
        <Image
          src={item.image}
          alt={item.name}
          width={60}
          height={60}
          className={styles.avatar}
        />
        <h3>{item.name}</h3>
        <span>{item.role}</span>
      </div>

      <p className={styles.feedback}>{item.feedback}</p>

    </div>
  );
}