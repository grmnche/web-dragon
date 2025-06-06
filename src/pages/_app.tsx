import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import NoiseAnimation from '@/components/animation/NoiseAnimation';
import Loader from '@/components/common/Loader/Loader.jsx';
import DragonFireflies from '@/components/animation/DragonFireflies/DragonFireflies';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    Aos.init({ duration: 2000 });

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (loading) {
      document?.querySelector('body')?.classList.add('lock');
    } else {
      document?.querySelector('body')?.classList.remove('lock');
    }
  }, [loading]);

  return (
    <div className="app">
      <NoiseAnimation />
      <DragonFireflies count={9} />

      {loading ? (
        <Loader className={loading ? '' : 'hidden--opacity'} />
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}
