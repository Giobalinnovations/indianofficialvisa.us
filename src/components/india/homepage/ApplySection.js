import Image from 'next/image';

const ApplySection = () => {
  const stepData = [
    {
      id: 1,
      title: 'Complete Online Form',
      imgSrc: '/assets/images/india/common/apply-online.jpg',
      description:
        'Fill out your e-Visa application with accurate details. Our smart form ensures error-free submissions.',
      arrow: true,
    },
    {
      id: 2,
      title: 'Document Upload',
      imgSrc: '/assets/images/india/common/doc.jpg',
      description:
        'Upload required documents including passport, photo, and supporting materials in digital format.',
      arrow: true,
    },
    {
      id: 3,
      title: 'Receive e-Visa',
      imgSrc: '/assets/images/india/common/visaImg.jpg',
      description:
        'Get your e-Visa delivered electronically. Download and print for your travel to India.',
      arrow: false,
    },
  ];

  return (
    <div className="container pb-20 md:pb-32">
      {/* Process Section */}
      <div className="pt-20 animate-fadeIn">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Simple Process
          </span>
          <h2 className="mb-4 text-3xl font-bold text-dark">
            Easy 3-Step Application Process
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our streamlined e-Visa application process makes it easy to get your
            Indian visa. Follow these simple steps to begin your journey.
          </p>
        </div>

        <div className="container grid gap-8 md:grid-cols-3">
          {stepData.map((step, index) => (
            <div
              key={index}
              className="relative flex items-center animate-fadeInUp"
              style={{ '--delay': `${index * 0.2}s` }}
            >
              <div className="relative w-full transition-all duration-300 bg-white rounded-xl shadow-soft hover:shadow-glow hover:-translate-y-1">
                <div className="p-6">
                  <div className="absolute left-1/2 -top-12 -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 rotate-45 bg-gradient-to-r from-primary/20 to-tertiary/20 w-24 h-24 -z-10 rounded-xl"></div>
                      <Image
                        src={step.imgSrc}
                        width={80}
                        height={80}
                        alt={step.title}
                        className="object-cover w-20 h-20 mx-auto rounded-lg shadow-soft"
                      />
                    </div>
                  </div>

                  <div className="pt-10 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 mb-4 text-white rounded-lg bg-gradient-to-r from-primary to-tertiary">
                      {step.id}
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-dark">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
              {step.arrow && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <Image
                    src="/assets/images/india/common/curved-arrow.png"
                    width={32}
                    height={32}
                    alt="Next step"
                    className="w-8 h-8"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Advisory Section */}
      <div
        className="px-6 py-12 mt-20 text-center bg-white rounded-xl shadow-soft animate-fadeInUp"
        style={{ '--delay': '0.6s' }}
      >
        <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
          Important Notice
        </span>
        <h2 className="mb-4 text-2xl font-bold text-dark">Official Advisory</h2>
        <p className="max-w-4xl mx-auto text-sm leading-relaxed text-gray-600 md:text-base">
          The Government of India has not authorized any third-party agents to
          charge additional fees for emergency or express visa processing. A
          valid visa and passport are mandatory for travel to India, except for
          categories exempted under bilateral arrangements. Persons of Indian
          origin (all categories) must possess an OCI card for travel.
        </p>
      </div>
    </div>
  );
};

export default ApplySection;
