import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/layout/Footer';
import { Header } from '../components/layout/Header';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Unblocked Games</title>
        <meta
          name="description"
          content="Learn more about our mission to provide the best unblocked games with easy access and engaging content for everyone."
        />
        <meta name="keywords" content="about us, unblocked games, gaming, gaming website, educational games" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="About Us - Unblocked Games" />
        <meta
          property="og:description"
          content="Learn more about our mission to provide the best unblocked games with easy access and engaging content for everyone."
        />
        <meta property="og:image" content="link-to-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Unblocked Games" />
        <meta
          name="twitter:description"
          content="Learn more about our mission to provide the best unblocked games with easy access and engaging content for everyone."
        />
        <meta name="twitter:image" content="link-to-image.jpg" />

        {/* Robots meta tag */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header />
      
      <div className="container mx-auto px-6 py-10 max-w-3xl bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">About Us</h1>
        
        <div className="space-y-6">
          <p className="text-lg text-gray-600">
            Welcome to our website! We are dedicated to providing the best games and gaming experiences.
            Our goal is to bring you the most exciting, fun, and educational games with easy access and engaging content.
          </p>
          
          <p className="text-lg text-gray-600">
            Whether you're looking for unblocked games for school breaks or for fun during your free time,
            we've got something for everyone. We constantly update our selection of games to ensure that you're always
            having a great time with new and exciting titles.
          </p>

          <p className="text-lg text-gray-600">
            Learn more about us and our team or feel free to contact us for any inquiries. We're always happy to hear from you!
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
