import { Helmet } from 'react-helmet-async';
import Footer from '../components/layout/Footer';
import { Header } from '../components/layout/Header';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Your Website Name</title>
        <meta name="description" content="Read our Terms of Service for Your Website Name. By using our services, you agree to abide by our terms and conditions. Learn more about your rights and obligations." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Terms of Service - Your Website Name" />
        <meta property="og:description" content="Read our Terms of Service for Your Website Name. By using our services, you agree to abide by our terms and conditions. Learn more about your rights and obligations." />
        <meta property="og:url" content="https://unblockedgames610.github.io/terms-of-service" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`${window.location.href}`} />
        <meta name="google-site-verification" content="Tx6ZacnVnvGQhXsWQxuphlBeTkJ2HQw9Fisx0s7QNXQ" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5152482106464455" crossOrigin="anonymous"></script>

        {/* Schema Markup (Structured Data) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Terms of Service - Your Website Name",
              "url": "https://unblockedgames610.github.io/terms-of-service",
              "description": "Read our Terms of Service for Your Website Name. By using our services, you agree to abide by our terms and conditions. Learn more about your rights and obligations.",
              "publisher": {
                "@type": "Organization",
                "name": "Your Website Name",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://unblockedgames610.github.io/assets/logo.png"
                }
              },
              "mainEntityOfPage": "https://unblockedgames610.github.io/terms-of-service"
            }
          `}
        </script>
      </Helmet>
      
      <Header />
      <div className="container mx-auto px-6 py-10 max-w-3xl bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to Your Website Name! These Terms of Service govern your use of our website and services. By accessing or using our platform, you agree to comply with these terms. Please read them carefully before using our services. If you do not agree with any part of these terms, you should not use our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">2. Use of the Website</h2>
          <p>
            Our platform is intended for personal, non-commercial use. You agree to use the website solely for lawful purposes and to ensure that your use does not violate the rights of others or restrict others' ability to use and enjoy the website.
          </p>
          <p>
            Unauthorized access to the platform, including circumventing security measures, is strictly prohibited.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">3. Account Registration</h2>
          <p>
            In order to access certain features, you may be required to create an account. By registering, you agree to provide accurate and up-to-date information. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">4. User Content</h2>
          <p>
            Any content you upload, post, or otherwise submit to the website is your responsibility. You grant us a worldwide, royalty-free license to use, display, and distribute your content in connection with the operation of the site.
          </p>
          <p>
            You must not submit content that infringes upon any third-party rights or is unlawful, defamatory, or harmful in any way.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">5. Privacy and Data Collection</h2>
          <p>
            We take your privacy seriously. We collect and process personal data as described in our <a href="/privacy-policy" className="text-blue-600">Privacy Policy</a>. By using our services, you consent to the collection and use of your data as outlined.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">6. Prohibited Activities</h2>
          <p>
            You are prohibited from engaging in the following activities:
            <ul className="list-disc ml-6">
              <li>Hacking or attempting to gain unauthorized access to our platform.</li>
              <li>Distributing malware or engaging in phishing attacks.</li>
              <li>Spamming or flooding the platform with irrelevant or unwanted content.</li>
              <li>Engaging in any activity that could harm or disrupt the services provided by our platform.</li>
            </ul>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
          <p>
            Our platform and services are provided "as is." We do not guarantee that the website will always be available, error-free, or meet your specific needs. We are not responsible for any damages arising from your use of our platform, including loss of data or business interruption.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">8. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to the website at our discretion, especially if you violate these terms. We also reserve the right to modify or discontinue any aspect of the website at any time.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">9. Changes to Terms</h2>
          <p>
            We may update these Terms of Service at any time. When we do, we will post the updated terms on this page and indicate the date of the latest revision. It is your responsibility to review these terms periodically for any changes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">10. Governing Law</h2>
          <p>
            These terms are governed by the laws of [Your Country/State], and any disputes arising from your use of our platform will be subject to the jurisdiction of the courts located in [Your Location].
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">11. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at <a href="mailto:support@website.com" className="text-blue-600">support@website.com</a>.
          </p>
        </section>
        
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;
