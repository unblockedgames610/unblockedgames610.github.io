import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-between mt-8">
          <div className="w-full sm:w-1/2 md:w-1/3 mb-4">
            <h3 className="font-bold text-lg">Information</h3>
            <ul>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mb-4">
            <h3 className="font-bold text-lg">Connect</h3>
            <ul>
              <li><Link to="https://facebook.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Facebook</Link></li>
              <li><Link to="https://twitter.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Twitter</Link></li>
              <li><Link to="https://instagram.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Instagram</Link></li>
              <li><Link to="https://linkedin.com" className="hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</Link></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mb-4">
            <h3 className="font-bold text-lg">Explore More</h3>
            <ul>
              <li><Link to="/sitemap" className="hover:underline">Sitemap</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Unblocked Games 610 - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
