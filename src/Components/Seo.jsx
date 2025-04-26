import { Helmet } from "react-helmet";

function Seo({ title, description, keywords }) { 
  const defaultTitle = "home";
  const defaultDescription = "Welcome to my website. This is a description of my site.";
  const defaultKeywords = "website, react, seo, default";
  const defaultIcon = "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740";  
  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} /> 

      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content="/path/to/default-image.jpg" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
  

      <link rel="icon" href={defaultIcon} /> 
 
    </Helmet>
  );
}

export default Seo;
