import { useEffect } from 'react';
import { LanguageProvider } from '@site/src/context/LanguageContext';
import Lenis from 'lenis';

export default function Root({ children }) {
  useEffect(() => {
    /* ── Lenis smooth scroll ── */
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    /* ── Navbar scroll shadow ── */
    const onScroll = () => {
      document.documentElement.classList.toggle('scrolled', window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}
