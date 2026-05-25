import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export function useSEO({ title, description, image, url }: SEOProps) {
  useEffect(() => {
    // 1. Atualiza o Título do Documento
    const fullTitle = `${title} | Afetos - Fotografia e Cinema Fine Art`;
    document.title = fullTitle;

    // Helper para atualizar ou criar meta tags
    const updateMetaTag = (nameAttr: string, nameValue: string, contentValue: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${nameValue}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, nameValue);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', contentValue);
    };

    // 2. Meta Tags Principais
    updateMetaTag('name', 'description', description);

    // 3. Open Graph (Facebook/Social Media)
    updateMetaTag('property', 'og:title', fullTitle, true);
    updateMetaTag('property', 'og:description', description, true);
    if (image) {
      updateMetaTag('property', 'og:image', image, true);
    }
    if (url) {
      updateMetaTag('property', 'og:url', url, true);
    }

    // 4. Twitter Card
    updateMetaTag('name', 'twitter:title', fullTitle);
    updateMetaTag('name', 'twitter:description', description);
    if (image) {
      updateMetaTag('name', 'twitter:image', image);
    }
  }, [title, description, image, url]);
}
