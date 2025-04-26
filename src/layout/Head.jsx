// src/components/SEO.jsx
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "Default Title",
  description = "Default description",
  keyword = "Trial, Website, Helmet"
}) { 
  useEffect(() => {
    const updateTags = () => {
      document.title = title;
       
      const tags = [ 
        { property: 'title', content: title },
        { property: 'description', content: description },
        { property: 'keyword', content: keyword }
      ];

      tags.forEach(tag => {
        const selector = tag.name 
          ? `meta[name="${tag.name}"]` 
          : `meta[property="${tag.property}"]`;
        
        let element = document.head.querySelector(selector);
        if (!element) {
          element = document.createElement('meta');
          if (tag.name) element.name = tag.name;
          if (tag.property) element.setAttribute('property', tag.property);
          document.head.appendChild(element);
        }
        element.content = tag.content;
      });
    };

    updateTags();
    const timer = setTimeout(updateTags, 100);  
    return () => clearTimeout(timer);
  }, [title, description, keyword]);

  return (
    <Helmet>
      <title>{title}</title>  
      <meta property="description" content={description} />
      <meta property="keyword" content={keyword} />
    </Helmet>
  );
}