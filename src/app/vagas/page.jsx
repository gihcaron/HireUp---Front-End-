"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import axios from "axios";
import { Card, Pagination } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { FaLaptopCode, FaBullhorn, FaUsers, FaCogs } from "react-icons/fa";


// Components
import JobCategoryCard from "../../Components/JobCategoryCard";
import JobCard from "../../Components/JobCard";
import Testimonials from "../../Components/Testimonials";


export default function Vagas() {
    // Job opportunity

  const [dataJobs, setDataJobs] = useState({
    jobs: [],
    loading: true,
    current: 1,
    pageSize: 6,
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data: jobs } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/jobs`
        );
        setDataJobs({ jobs, loading: false, current: 1, pageSize: 6 });
      } catch (err) {
        console.error("Erro ao buscar oportunidades de tabalho", err);
        toast.error("Erro ao buscar oportunidades de tabalho");
        setDataJobs((d) => ({ ...d, loading: false }));
      }
    };
    fetchJobs();
  }, []);

    // Jobs - Pagination

    const paginatedJobs = () => {
        const start = (dataJobs.current - 1) * dataJobs.pageSize;
        return dataJobs.jobs.slice(start, start + dataJobs.pageSize);
      };

    return(
        <main className={styles.jobVacancyContainer}>
        
        <div className={styles.jobVacancyList}>
          {paginatedJobs().map((jobs) => (
            <JobCard
              key={jobs.id}
              title={jobs.title}
              company={jobs.company}
              city={jobs.city}
              type={jobs.type}
              salary={jobs.salary}
            />
          ))}
        </div>

        <div>
          {dataJobs.jobs?.length > 0 && (
            <Pagination
              current={dataJobs.current}
              pageSize={dataJobs.pageSize}
              total={dataJobs.jobs?.length || 0}
              onChange={(page) => setDataJobs((d) => ({ ...d, current: page }))}
              showSizeChanger={false}
            />
          )}
        </div>
        </main>
    )
}