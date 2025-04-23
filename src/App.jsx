import React, { useState, useEffect } from 'react';
import Skills from './components/pages/main/Skills/Skills.jsx';
import Greet from './components/pages/main/Greet/Greet.jsx';
import Modal from './components/pages/main/Modal/Modal.jsx';
import Header from './components/Header/Header.jsx';
import Projects from './components/pages/main/Projects/Projects.jsx';
import Footer from './components/Footer/Footer.jsx';
import Loader from './components/pages/main/Loader/Loader.jsx';
import DragonFireflies from './components/Animation/DragonFireflies/DragonFireflies.jsx';
import NoiseAnimation from './components/Animation/NoiseAnimation.jsx';
import { skills } from '../storage/skills.js';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

 

  function changeClass() {
    let element = document.querySelector('.origin');

    element.onclick = function () {
      if (element == document.querySelector('.change')) {
        element.classList.remove('change');
      } else {
        element.classList.add('change');
      }
    };
    return element;
  }

  const divStyle = {
    backgroundImage: 'url("./assets/images/cave.png")',
  };

  return (
    <div className="app" style={divStyle}>
      <NoiseAnimation />

      {/* {loading ? (
        <div className="loader" style={divStyle}>
          <div className="loader-img">
            <Loader />
          </div>
        </div>
      ) : ( */}
      <>
        {!loading && <DragonFireflies count={9} />}

        <Header />

        <main>
          <div className="normalize-container">
            <Greet changeClass={changeClass} />
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
      </>
      {/* )} */}
    </div>
  );
}

export default App;
