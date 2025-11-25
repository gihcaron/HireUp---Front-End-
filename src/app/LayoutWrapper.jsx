'use client';
import { usePathname } from 'next/navigation';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function LayoutWrapper({ children }) {
    const pathname = usePathname();
    const isLoginPage = pathname === '/login';

    return (
        <>
            {!isLoginPage && <Header />}
            {children}
            {!isLoginPage && <Footer />}
        </>
    );
}