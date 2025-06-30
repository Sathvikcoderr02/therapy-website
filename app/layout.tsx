import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';

// Import components
import Header from '@/components/Header';
import Footer from '@/app/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dr. Serena Blake | Clinical Psychologist in Los Angeles, CA',
  description: 'Licensed clinical psychologist specializing in anxiety, relationship counseling, and trauma recovery. Offering in-person and virtual therapy sessions in Los Angeles.',
  keywords: 'therapist, psychologist, therapy, anxiety, depression, trauma, counseling, Los Angeles, telehealth, mental health',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#319795',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Dr. Serena Blake | Clinical Psychologist',
    description: 'Licensed clinical psychologist in Los Angeles specializing in anxiety, relationships, and trauma recovery.',
    url: 'https://www.drserenablake.com',
    siteName: 'Dr. Serena Blake',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Serena Blake | Clinical Psychologist',
    description: 'Licensed clinical psychologist in Los Angeles specializing in anxiety, relationships, and trauma recovery.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth font-sans`}>
      <body className="flex min-h-screen flex-col bg-white text-gray-900">
        <Header />
        <main className="grow">
          {children}
        </main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
