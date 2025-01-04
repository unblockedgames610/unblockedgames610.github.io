import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Unblocked Games Support</title>
        <meta
          name="description"
          content="Have questions or need assistance? Contact our support team via email or visit our office."
        />
        <meta name="keywords" content="contact us, support, email, game assistance, unblocked games" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact Us - Unblocked Games Support" />
        <meta
          property="og:description"
          content="Have questions or need assistance? Contact our support team via email or visit our office."
        />
        <meta property="og:image" content="link-to-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Unblocked Games Support" />
        <meta
          name="twitter:description"
          content="Have questions or need assistance? Contact our support team via email or visit our office."
        />
        <meta name="twitter:image" content="link-to-image.jpg" />

        {/* Robots meta tag */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header />
      <div className="container mx-auto px-6 py-10 max-w-3xl bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Contact Us</h1>
        
        <div className="space-y-6">
          <p className="text-lg text-gray-600">
            If you have any questions or need assistance, feel free to reach out to our support team. We’re here to help!
          </p>
          
          <div className="text-lg text-gray-600">
            <p>
              <strong>Email us at: </strong>
              <a href="mailto:support@website.com" className="text-blue-600 hover:underline">
                support@website.com
              </a>
            </p>
          </div>

          <div className="text-lg text-gray-600">
            <p>
              <strong>Or visit our office:</strong>
            </p>
            <p className="text-gray-700">123 Game St, City, Country</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
