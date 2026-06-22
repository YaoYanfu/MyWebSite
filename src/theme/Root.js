import { useEffect } from 'react';
import { LanguageProvider } from '@site/src/context/LanguageContext';

export default function Root({ children }) {
  useEffect(() => {
    /* ── Navbar scroll shadow ── */
    const onScroll = () => {
      document.documentElement.classList.toggle('scrolled', window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}
