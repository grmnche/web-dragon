import React, { useState, useEffect } from 'react';
import Skills from './components/pages/main/Skills/Skills.jsx';
import Greet from './components/pages/main/Greet/Greet.jsx';
import Modal from './components/pages/main/Modal/Modal.jsx';
import Header from './components/Header/Header.jsx';
import Projects from './components/pages/main/Projects/Projects.jsx';
import Footer from './components/Footer/Footer.jsx';
import Loader from './components/pages/main/Loader/Loader.jsx';
import DragonFireflies from './components/animation/DragonFireflies/DragonFireflies.jsx';
import NoiseAnimation from './components/animation/NoiseAnimation.jsx';
import { skills } from '../storage/skills.js';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('lock')
      : document.querySelector('body').classList.remove('lock');
  }, [loading]);

  return (
    <div className="app">
      <NoiseAnimation />

      {loading ? (
        <Loader className={loading ? '' : 'hidden--opacity'} />
      ) : (
        <div className="main-page">
          {!loading && <DragonFireflies count={9} />}

          <Header />

          <main>
            <div className="normalize-container">
              <Greet />
            </div>

            <div className="normalize-container">
              <Modal />
            </div>

            <div className="normalize-section normalize-container">
              <Skills skills={skills} />
            </div>

            <div className="normalize-section normalize-container">
              <Projects />
            </div>
          </main>

          <div className="normalize-container">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
