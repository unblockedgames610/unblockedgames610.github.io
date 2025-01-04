import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from './pages/HomePage';
import { GameDetailPage } from './pages/GameDetailPage';
import React from 'react';
import { CategoryPage } from './pages/CategoryPage';
import { TagPage } from './pages/TagPage';
import { HotPage } from './pages/HotPage';
import { NewestPage } from './pages/NewestPage';
import { MostPopularPage } from './pages/MostPopularPage';
import { BestPage } from './pages/BestPage';
import { ExclusivePage } from './pages/ExclusivePage';
import { EditorPicksPage } from './pages/EditorPicksPage';
import { NoBrandPage } from './pages/NoBrandPage';
import { Sitemap } from './components/Sitemap';
import About from './pages/About';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game/:id" element={<GameDetailPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/tag/:tag" element={<TagPage />} />
            <Route path="/hot" element={<HotPage />} />
            <Route path="/newest" element={<NewestPage />} />
            <Route path="/most-popular" element={<MostPopularPage />} />
            <Route path="/best" element={<BestPage />} />
            <Route path="/exclusive" element={<ExclusivePage />} />
            <Route path="/editor-picks" element={<EditorPicksPage />} />
            <Route path="/no-brand" element={<NoBrandPage />} />
            <Route path="/sitemap.xml" element={<Sitemap />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;