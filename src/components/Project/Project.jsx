import React, { useState } from 'react';

export function Project({ className, index }) {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Кибервариус',
      image: './assets/images/cybervarius.jpg',
      link: 'https://grmnche.github.io/cybervarius',
      stack: 'React JS, SCSS, Tailwind, Webpack.',
    },
    {
      id: 2,
      title: 'Кинокомпания 8 Студия',
      image: './assets/images/8studio.jpg',
      link: 'https://8studiofilm.ru',
      stack: 'React JS, SCSS, Tailwind, Webpack.',
    },
    {
      id: 3,
      title: 'Web Dragon Messenger',
      image: './assets/images/wdm.jpg',
      link: 'https://thriving-biscochitos-25136b.netlify.app/',
      stack: 'JS, TS, Handlebars, Vite, SCSS, Chai, Mocha, Express',
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
