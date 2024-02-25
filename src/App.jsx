import React, { useState, useEffect } from 'react';
import Skills from './components/Skills/Skills.jsx';
import Greet from './components/Greet/Greet.jsx';
import Modal from './components/Modal/Modal.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Treasury from './components/Treasury/Treasury.jsx';
import Footer from './components/Footer/Footer.jsx';
import Loader from './components/Loader/Loader.jsx';
import DragonFireflies from './components/Animation/DragonFireflies/DragonFireflies.jsx';
import NoiseAnimation from './components/Animation/NoiseAnimation.jsx';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  const [skills, setSkills] = useState([
    {
      id: 1,
      image: './assets/images/icons/1.png',
      toggled: false,
      title: 'Пишу огнеупорный код',
      description: 'React JS TS Redux Node.js Express Docker jQuery',
    },
    {
      id: 2,
      image: './assets/images/icons/2.png',
      toggled: false,
      title: 'Верстаю, как королевский дракон',
      description:
        'SCSS/Sass LESS Gulp Webpack Vite Handlebars Pug Tailwind Bootstrap HTML5/CSS3',
    },
    {
      id: 3,
      image: './assets/images/icons/3.png',
      toggled: false,
      title: 'Создаю пламенный дизайн',
      description: 'UX/UI-дизайн',
    },
    {
      id: 4,
      image: './assets/images/icons/4.png',
      toggled: false,
      title: 'Командный дракончик',
      description: 'Soft skills / Git',
    },
  ]);

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

      {loading ? (
        <div className="loader" style={divStyle}>
          <div className="loader-img">
            <Loader />
          </div>
        </div>
      ) : (
        <div>
          {!loading && <DragonFireflies count={9} />}

          <div className="inner-page">
            <header>
              <Navbar />
            </header>

            <main>
              <Greet changeClass={changeClass} />
              <Modal />
              <Skills skills={skills} />
              <Treasury />
            </main>

            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
