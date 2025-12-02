'use client';
import { usePathname } from 'next/navigation';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function LayoutWrapper({ children }) {
    const pathname = usePathname();
    const isLoginPage = pathname === '/login';
    const isSignPage = pathname === '/sign';
    const isGestaoPage = pathname === '/gestao';
    const isContatoEnviado = pathname === '/contato/enviado';
    const isCandidaturaEnviado = pathname === '/candidaturas/candidatura/enviado';
    const isEnviadoPage = isContatoEnviado || isCandidaturaEnviado;
    const hideHeaderAndFooter = isLoginPage || isSignPage || isEnviadoPage || isGestaoPage;

    return (
        <>
            {!hideHeaderAndFooter && <Header />}
            {children}
            {!hideHeaderAndFooter && <Footer />}
        </>
    );
}