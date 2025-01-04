import React from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - Unblocked Games - Play Educational Games Online</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about playing unblocked educational games. Learn more about game access, accounts, and more."
        />
        <meta
          name="keywords"
          content="FAQ, unblocked games, educational games, game access, game registration"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="FAQ - Unblocked Games - Play Educational Games Online"
        />
        <meta
          property="og:description"
          content="Find answers to frequently asked questions about playing unblocked educational games. Learn more about game access, accounts, and more."
        />
        <meta
          property="og:image"
          content="https://unblockedgames610.github.io/link-to-image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FAQ - Unblocked Games - Play Educational Games Online"
        />
        <meta
          name="twitter:description"
          content="Find answers to frequently asked questions about playing unblocked educational games. Learn more about game access, accounts, and more."
        />
        <meta
          name="twitter:image"
          content="https://unblockedgames610.github.io/link-to-image.jpg"
        />

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
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the best way to play the games?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "All games on our site can be played directly in your browser, no downloads required! Just choose a game, hit play, and start having fun.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need an account to play?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, you can enjoy most games without creating an account. However, registering may give you access to additional features like saving your progress and interacting with the community.",
                },
              },
              {
                "@type": "Question",
                name: "Can I suggest a game?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely! We love hearing from our users. Reach out to us through the contact form on our site, and we’ll review your suggestion for adding the game to our collection.",
                },
              },
              {
                "@type": "Question",
                name: "Are the games free to play?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! All games on our platform are completely free to play. We believe in making entertainment and education accessible to everyone.",
                },
              },
              {
                "@type": "Question",
                name: "How can I report a bug or issue with a game?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If you encounter any issues while playing, please let us know by visiting the contact page. We’re always working to improve your gaming experience!",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <Header />

      <div className="container mx-auto px-6 py-10 max-w-3xl bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">
              What is the best way to play the games?
            </h2>
            <p className="text-gray-600">
              All games on our site can be played directly in your browser, no
              downloads required! Just choose a game, hit play, and start having
              fun.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700">
              Do I need an account to play?
            </h2>
            <p className="text-gray-600">
              No, you can enjoy most games without creating an account. However,
              registering may give you access to additional features like saving
              your progress and interacting with the community.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700">
              Can I suggest a game?
            </h2>
            <p className="text-gray-600">
              Absolutely! We love hearing from our users. Reach out to us
              through the contact form on our site, and we’ll review your
              suggestion for adding the game to our collection.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700">
              Are the games free to play?
            </h2>
            <p className="text-gray-600">
              Yes! All games on our platform are completely free to play. We
              believe in making entertainment and education accessible to
              everyone.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700">
              How can I report a bug or issue with a game?
            </h2>
            <p className="text-gray-600">
              If you encounter any issues while playing, please let us know by
              visiting the contact page. We’re always working to improve your
              gaming experience!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQ;
