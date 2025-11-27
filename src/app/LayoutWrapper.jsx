'use client';
import { usePathname } from 'next/navigation';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function LayoutWrapper({ children }) {
    const pathname = usePathname();
    const isLoginPage = pathname === '/login';
    const isSignPage = pathname === '/sign';
    // Não mostrar header e footer nas páginas de confirmação (enviado)
    const isContatoEnviado = pathname === '/contato/enviado';
    const isCandidaturaEnviado = pathname === '/candidaturas/candidatura/enviado';
    const isEnviadoPage = isContatoEnviado || isCandidaturaEnviado;
    const hideHeaderAndFooter = isLoginPage || isSignPage || isEnviadoPage;

    return (
        <>
            {!hideHeaderAndFooter && <Header />}
            {children}
            {!hideHeaderAndFooter && <Footer />}
        </>
    );
}