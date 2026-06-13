import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Biradar Srikanth — Backend Engineer & Problem Solver',
  description:
    'Portfolio of Biradar Srikanth — B.Tech CS student building enterprise systems with Spring Boot, microservices, and cloud infrastructure. Seeking software engineering roles.',
  keywords: [
    'Biradar Srikanth',
    'Backend Engineer',
    'Spring Boot',
    'Java',
    'Portfolio',
    'Software Engineer',
  ],
  authors: [{ name: 'Biradar Srikanth' }],
  openGraph: {
    title: 'Biradar Srikanth — Backend Engineer',
    description:
      'From data analytics to enterprise systems. Building cloud-backed solutions with Spring Boot, FastAPI, and microservices.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        {/* Skip-to-content for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
