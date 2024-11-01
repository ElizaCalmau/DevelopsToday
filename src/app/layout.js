import localFont from 'next/font/local';
import './globals.css';
import Image from 'next/image';
import header from './header.jpg';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Vehicle Agency',
  description: 'buy a car',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Image
          src={header}
          alt="header image"
          className="h-40 w-full object-cover"
        />
        <h1 className="font-bold text-2xl w-full text-center my-5">
          International Vehicle Agency
        </h1>
        {children}
      </body>
    </html>
  );
}
