import Footer from '@/components/india/common/Footer';
import Header from '@/components/india/common/Header';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import { FormProvider } from '@/context/formContext';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata = {
  title: 'Indian Visa Application Services | Official e-Visa Portal',
  description:
    'Streamlined Indian e-Visa application process. Apply for tourist, business, or medical visas with our secure and efficient online portal. Fast processing and expert support available.',
  keywords:
    'Indian visa, e-visa India, visa application, tourist visa, business visa, medical visa, online visa application',
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Indian Visa Application Services | Official e-Visa Portal',
    description:
      'Secure and efficient Indian e-Visa application process. Apply online for tourist, business, or medical visas.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/assets/images/india/common/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Indian Visa Application Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indian Visa Application Services | Official e-Visa Portal',
    description:
      'Secure and efficient Indian e-Visa application process. Apply online for tourist, business, or medical visas.',
    images: ['/assets/images/india/common/twitter-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="flex flex-col min-h-screen font-sans antialiased bg-light">
        <FormProvider>
          <ReactQueryProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </ReactQueryProvider>
        </FormProvider>
        <GoogleTagManager gtmId="G-LC9MZM89N4" />
        <GoogleAnalytics gaId="G-LC9MZM89N4" />
      </body>
    </html>
  );
}
