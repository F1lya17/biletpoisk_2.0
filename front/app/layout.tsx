import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import { createContext } from 'react';
import BasketStore from "../store/BasketStore"
import { StoreProvider } from '@/provider';

export const metadata: Metadata = {
    title: 'Билетпоиск',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <StoreProvider>
                    <div className="App">
                        <Header />
                        <div className="main">
                            {children}
                        </div>
                        <Footer />
                    </div>
                </StoreProvider>
                <div id="modal"></div>
                <div id="drop-down"></div>
            </body>
        </html>
    )
}
