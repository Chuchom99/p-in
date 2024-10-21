import React, { useEffect } from 'react';

const TranslateWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(script);

    script.onload = () => {
      console.log('Google Translate script loaded');
      console.log('window.google:', window.google);
    
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };
    

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="google_translate_element"></div>;
};

export default TranslateWidget;
