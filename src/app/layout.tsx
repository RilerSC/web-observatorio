import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import '@/lib/fontawesome';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Providers from '@/components/Providers';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Observatorio de Sostenibilidad',
  description: 'Observatorio de Sostenibilidad - Información y recursos sobre sostenibilidad',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

