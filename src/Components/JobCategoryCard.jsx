"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "antd";
import styles from "./JobCategoryCard.module.css";
import { FaLaptopCode, FaBullhorn, FaUsers, FaCogs } from "react-icons/fa";

export default function JobCategoryCard({ count, title, icon }) {


    return (
        <Card className={styles.jobCategoryCard}>
          <div className={styles.iconWrapper}>
            <FaLaptopCode size={40} color="#0052cc" />
          </div>
          <div className={styles.categoryContent}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.count}>{count} vagas</p>
          </div>
        </Card>
    );
}