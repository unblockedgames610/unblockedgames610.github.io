import React from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Unblocked Games Support</title>
        <meta
          name="description"
          content="Have questions or need assistance? Contact our support team via email or visit our office."
        />
        <meta
          name="keywords"
          content="contact us, support, email, game assistance, unblocked games"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Contact Us - Unblocked Games Support"
        />
        <meta
          property="og:description"
          content="Have questions or need assistance? Contact our support team via email or visit our office."
        />
        <meta property="og:image" content="https://unblockedgames610.github.io/link-to-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us - Unblocked Games Support"
        />
        <meta
          name="twitter:description"
          content="Have questions or need assistance? Contact our support team via email or visit our office."
        />
        <meta name="twitter:image" content="https://unblockedgames610.github.io/link-to-image.jpg" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${window.location.href}`} />
        <meta
          name="google-site-verification"
          content="Tx6ZacnVnvGQhXsWQxuphlBeTkJ2HQw9Fisx0s7QNXQ"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5152482106464455"
          crossOrigin="anonymous"
        ></script>

        {/* Schema Markup (Structured Data) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Us - Unblocked Games Support",
            description:
              "Have questions or need assistance? Contact our support team via email or visit our office.",
            url: window.location.href,
            contactOption: {
              "@type": "ContactPoint",
              contactType: "Customer Support",
              email: "support@website.com",
              availableLanguage: ["English"],
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Game St",
              addressLocality: "City",
              addressCountry: "Country",
            },
          })}
        </script>
      </Helmet>

      <Header />
      <main className="container mx-auto px-6 py-10 max-w-3xl bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Contact Us
        </h1>

        <section className="space-y-6">
          <p className="text-lg text-gray-600">
            If you have any questions or need assistance, feel free to reach out
            to our support team. We’re here to help!
          </p>

          <div className="text-lg text-gray-600">
            <p>
              <strong>Email us at:</strong>{" "}
              <a
                href="mailto:support@website.com"
                className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                support@website.com
              </a>
            </p>
          </div>

          <div className="text-lg text-gray-600">
            <p>
              <strong>Visit our office:</strong>
            </p>
            <address className="text-gray-700 not-italic">
              123 Game St, City, Country
            </address>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
