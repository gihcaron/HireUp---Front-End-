"use client";

import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
    const feedbacks = [
        {
            name: "Murilo Maluf",
            role: "Co-Founder DC Agency",
            feedback:
                "Consegui contratar +10 talentos incríveis de forma rápida e eficiente.",
            image: "/images/users/Murilo-Maluf.jpg",
        },
        {
            name: "Maria Vasconcelos",
            role: "UX Designer",
            feedback:
                "A plataforma facilitou muito minha busca por oportunidades alinhadas ao meu perfil.",
            image: "/images/users/Maria-Vasconcelos.jpg",
        },
        {
            name: "Michael Lee",
            role: "Product Manager",
            feedback:
                "Ótima experiência! A interface é intuitiva e o suporte ao cliente é excepcional.",
            image: "/images/users/Michael-Lee.jpg",
        },
        {
            name: "Sarah Carvalho",
            role: "HR Specialist",
            feedback:
                "Um excepcional aliado no recrutamento, economizando tempo e recursos valiosos.",
            image: "/images/users/Sarah-Carvalho.jpg",
        },
        {
            name: "Enrico Piquet",
            role: "Inova Tech Manager",
            feedback:
                "A plataforma transformou nosso processo de recrutamento, tornando-o mais ágil e eficaz.",
            image: "/images/users/Enrico-Piquet.jpg",
        },
    ];

    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % feedbacks.length);
    const prev = () =>
        setIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);

    // sempre mostra 3 cards: anterior | atual | próximo
    const prevIndex = (index - 1 + feedbacks.length) % feedbacks.length;
    const nextIndex = (index + 1) % feedbacks.length;

    const visibleCards = [
        feedbacks[prevIndex],
        feedbacks[index], // card do centro
        feedbacks[nextIndex],
    ];

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>
                O que nossos <span>Clientes Satisfeitos</span> Dizem
            </h1>

            <div className={styles.carousel}>
                <button onClick={prev} className={styles.navBtn}>‹</button>

                <div className={styles.cardsWrapper}>
                    {visibleCards.map((item, i) => (
                        <TestimonialCard
                            key={i}
                            item={item}
                            isCenter={i === 1}
                        />
                    ))}
                </div>

                <button onClick={next} className={styles.navBtn}>›</button>
            </div>
        </section>
    );
}