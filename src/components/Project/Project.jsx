import React, { useState } from 'react';

export function Project({ className, index }) {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Кинокомпания 8 Студия',
      image: './assets/images/8studio.jpg',
      link: 'https://8studiofilm.ru',
      stack: 'React JS, SCSS, Tailwind, Webpack',
    },
    {
      id: 2,
      title: 'Flappy Progger',
      image: './assets/images/flappy-progger.jpg',
      link: 'https://github.com/Mansur903/game.praktikum.yandex',
      stack: 'React TS, Redux, Vite, Sass, Jest, PostgreSQL, Docker',
    },
    {
      id: 3,
      title: 'Web Dragon Messenger',
      image: './assets/images/wdm.jpg',
      link: 'https://github.com/grmnche/wdm',
      stack: 'JS, TS, Handlebars, Vite, SCSS, Chai, Mocha, Express',
    },
    {
      id: 4,
      title: 'Кибервариус',
      image: './assets/images/cybervarius.jpg',
      link: 'https://grmnche.github.io/cybervarius',
      stack: 'React JS, SCSS, Tailwind, Webpack, Redux/Redux Toolkit',
    },
  ]);

  return (
    <div data-aos="fade-up" className="project__outer">
      <a href={projects[index].link}>
        <div className="project">
          <img
            className="project__picture"
            src={projects[index].image}
            alt="..."
          />

          <div className="project__desc">
            <p className="project__title">{projects[index].title}</p>
            <p className="project__stack gap-y-2 text-lg text-[#dad394] md:text-xl lg:text-2xl mt-2 lg:mt-4">
              {projects[index].stack}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
