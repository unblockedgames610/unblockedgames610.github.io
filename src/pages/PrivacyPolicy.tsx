import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Unblocked Games</title>
        <meta
          name="description"
          content="Read our Privacy Policy to learn how we protect and use your information when you use our website. Your privacy is important to us."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, user privacy, unblocked games"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Privacy Policy - Unblocked Games" />
        <meta
          property="og:description"
          content="Read our Privacy Policy to learn how we protect and use your information when you use our website. Your privacy is important to us."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - Unblocked Games" />
        <meta
          name="twitter:description"
          content="Read our Privacy Policy to learn how we protect and use your information when you use our website. Your privacy is important to us."
        />

        {/* Robots meta tag */}
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
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Privacy Policy - Unblocked Games",
              url: window.location.href,
              description:
                "Read our Privacy Policy to learn how we protect and use your information when you use our website. Your privacy is important to us.",
              publisher: {
                "@type": "Organization",
                name: "Unblocked Games",
                logo: {
                  "@type": "ImageObject",
                  url: "https://unblockedgames610.github.io/link-to-logo.jpg",
                },
              },
              mainEntityOfPage: window.location.href,
            }
          `}
        </script>
      </Helmet>

      <Header />

      <div className="container mx-auto px-6 py-10 max-w-3xl bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-lg text-gray-600">
          <p>
            At Unblocked Games, your privacy is our top priority. We are
            committed to protecting your personal information and ensuring that
            your experience on our website is secure and enjoyable.
          </p>

          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <p>
            We may collect information such as your IP address, browser type,
            and general usage data when you visit our website. This information
            helps us improve the performance and functionality of our site.
          </p>

          <h2 className="text-2xl font-semibold">
            How We Use Your Information
          </h2>
          <p>
            The information we collect is used to enhance your experience on our
            website. We use this data to analyze trends, improve site features,
            and provide personalized recommendations.
          </p>

          <h2 className="text-2xl font-semibold">Data Protection</h2>
          <p>
            We implement a variety of security measures to ensure that your
            personal data is protected. We do not share, sell, or rent your
            personal information to third parties without your consent, except
            where required by law.
          </p>

          <h2 className="text-2xl font-semibold">Cookies</h2>
          <p>
            Our website uses cookies to enhance user experience. Cookies are
            small files stored on your device that help us track site usage and
            preferences. You can disable cookies through your browser settings,
            but this may affect some website features.
          </p>

          <h2 className="text-2xl font-semibold">Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of these sites and encourage
            you to review their privacy policies before sharing any personal
            information.
          </p>

          <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
          <p>
            We may update our privacy policy from time to time. Any changes will
            be posted on this page, and we encourage you to review it
            periodically to stay informed.
          </p>

          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions or concerns about our privacy policy,
            please feel free to contact us at:
            <a href="mailto:support@website.com" className="text-blue-600">
              {" "}
              support@website.com
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
