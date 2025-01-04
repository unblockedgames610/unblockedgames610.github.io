// src/components/Sitemap.tsx
import React, { useEffect } from 'react';
import { generateSitemapXML } from '../utils/sitemapGenerator';

export function Sitemap() {
  useEffect(() => {
    const sitemap = generateSitemapXML();
    
    // Create a Blob with the sitemap content
    const blob = new Blob([sitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sitemap.xml';
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, []);

  return null;
}