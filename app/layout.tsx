import { Limelight } from 'next/font/google';
import './globals.css';

const limelight = Limelight({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-limelight', // This creates a CSS variable
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={limelight.variable}>
      <body>{children}</body>
    </html>
  );
}