'use client';
import PartiallyFillForm from '@/components/homePage/PartiallyFillForm';
import PaymentForCompletedForm from '@/components/homePage/PaymentForCompletedForm';
import VisaStatusForm from '@/components/homePage/VisaStatusForm';
import ApplySection from '@/components/india/homepage/ApplySection';
import Banner from '@/components/india/homepage/Banner';
import { useFormContext } from '@/context/formContext';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Home = () => {
  const { dispatch } = useFormContext();
  const [isPaymentForCompletedFormOpen, setPaymentForCompletedFormOpen] =
    useState(false);
  const [isPartiallyFillFormOpen, setPartiallyFillFormOpen] = useState(false);
  const [isVisaStatusFormOpen, setVisaStatusFormOpen] = useState(false);

  const handlePartiallyFillFormOpen = () =>
    setPartiallyFillFormOpen(prev => !prev);
  const handlePaymentForCompletedFormOpen = () =>
    setPaymentForCompletedFormOpen(prev => !prev);
  const handleVisaStatusFormOpen = () => setVisaStatusFormOpen(prev => !prev);

  useEffect(() => {
    localStorage.removeItem('formId');
  }, [dispatch]);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-light to-white">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-wave-pattern opacity-5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>

        <Banner />

        {/* Action Cards Section */}
        <section className="container relative w-full py-16 mx-auto">
          <div className="grid grid-cols-1 gap-8 px-4 md:px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-4 animate-fadeIn">
            {/* Apply for India Card */}
            <Link href="/visa/step-one" className="group">
              <div
                className="relative h-full p-6 transition-all duration-300 bg-white border animate-fadeInUp rounded-xl hover:border-primary/20 hover:shadow-glow group-hover:scale-[1.02]"
                style={{ '--delay': '0s' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 via-tertiary/5 to-transparent rounded-bl-full -z-10"></div>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <span className="text-xl font-semibold text-dark">
                    Start New Application
                  </span>
                  <p className="text-sm text-gray-600">
                    Begin your Indian e-Visa application process
                  </p>
                  <span className="inline-flex items-center justify-center w-12 h-12 text-white transition-transform duration-300 rounded-full bg-gradient-to-r from-primary to-tertiary group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Complete Application Card */}
            <button onClick={handlePartiallyFillFormOpen} className="group">
              <div
                className="relative h-full p-6 transition-all duration-300 bg-white border animate-fadeInUp rounded-xl hover:border-accent/20 hover:shadow-glow group-hover:scale-[1.02]"
                style={{ '--delay': '0.2s' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 via-tertiary/5 to-transparent rounded-bl-full -z-10"></div>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <span className="text-xl font-semibold text-dark">
                    Resume Application
                  </span>
                  <p className="text-sm text-gray-600">
                    Continue your saved visa application
                  </p>
                  <span className="inline-flex items-center justify-center w-12 h-12 text-white transition-transform duration-300 rounded-full bg-gradient-to-r from-accent to-tertiary group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </button>

            {/* Payment Card */}
            <button
              onClick={handlePaymentForCompletedFormOpen}
              className="group"
            >
              <div
                className="relative h-full p-6 transition-all duration-300 bg-white border animate-fadeInUp rounded-xl hover:border-success/20 hover:shadow-glow group-hover:scale-[1.02]"
                style={{ '--delay': '0.4s' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-success/10 via-tertiary/5 to-transparent rounded-bl-full -z-10"></div>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <span className="text-xl font-semibold text-dark">
                    Process Payment
                  </span>
                  <p className="text-sm text-gray-600">
                    Complete payment for your application
                  </p>
                  <span className="inline-flex items-center justify-center w-12 h-12 text-white transition-transform duration-300 rounded-full bg-gradient-to-r from-success to-tertiary group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </button>

            {/* Track Status Card */}
            <button onClick={handleVisaStatusFormOpen} className="group">
              <div
                className="relative h-full p-6 transition-all duration-300 bg-white border animate-fadeInUp rounded-xl hover:border-info/20 hover:shadow-glow group-hover:scale-[1.02]"
                style={{ '--delay': '0.6s' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-info/10 via-tertiary/5 to-transparent rounded-bl-full -z-10"></div>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <span className="text-xl font-semibold text-dark">
                    Track Application
                  </span>
                  <p className="text-sm text-gray-600">
                    Check your visa application status
                  </p>
                  <span className="inline-flex items-center justify-center w-12 h-12 text-white transition-transform duration-300 rounded-full bg-gradient-to-r from-info to-tertiary group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </button>
          </div>
        </section>

        <ApplySection />
      </div>

      {/* Modals */}
      <PartiallyFillForm
        isFormModalOpen={isPartiallyFillFormOpen}
        handleFormModal={handlePartiallyFillFormOpen}
      />
      <PaymentForCompletedForm
        isFormModalOpen={isPaymentForCompletedFormOpen}
        handleFormModal={handlePaymentForCompletedFormOpen}
      />
      <VisaStatusForm
        isFormModalOpen={isVisaStatusFormOpen}
        handleFormModal={handleVisaStatusFormOpen}
      />
    </>
  );
};

export default Home;
