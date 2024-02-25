import React, { useState } from 'react';

export function Project({ className, index }) {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Кибервариус',
      description: 'Книжное пространство, представленное в виде игрового UI.',
      image:
        'https://github.com/grmnche/images/blob/main/cybervarius.png?raw=true',
      link: 'https://grmnche.github.io/cybervarius',
      stack: 'React JS, SCSS, Tailwind, Webpack.',
    },
    {
      id: 2,
      title: 'Апокрифы Квёлых Земель',
      description:
        'Лор авторского мира, полный загадочных существ, интриг и магии.',
      image:
        'https://github.com/grmnche/images/blob/main/weakly-world.png?raw=true',
      link: 'https://grmnche.github.io/weakly-world',
      stack: 'HTML5/CSS3, Native JS, Tailwind.',
    },
    {
      id: 3,
      title: 'Web Dragon Messenger',
      description:
        'WDM - простой в использовании мессенджер. С его помощью можно всегда оставаться на связи с друзьями и коллегами.',
      image:
        'https://github.com/grmnche/images/blob/main/messenger.png?raw=true',
      link: 'https://thriving-biscochitos-25136b.netlify.app/',
      stack: 'Native JS, TS, Handlebars, Vite, SCSS, Chai, Mocha, Express',
    },
  ]);

  return (
    <div data-aos="fade-up" className={`${className} project`}>
      <a href={projects[index].link} className='project__picture'>
        <img
          className="w-full"
          src={projects[index].image}
          alt="..."
        />
      </a>

      <div className='project__desc'>
          <a href={projects[index].link}>
            <h2 className="project-title text-2xl lg:text-3xl mt-6 lg:mt-10">
              {projects[index].title}
            </h2>
          </a>
          <div className="project-text gap-y-2 text-lg md:text-xl lg:text-2xl mt-2 lg:mt-4">
            {projects[index].description}

            <br />

            <span className="inline-block mt-6 lg:mt-8">
              <span>Стек:</span>
              <span className="project-text__stack text-[#dad394]">{projects[index].stack}</span>
            </span>
          </div>
      </div>
    </div>
  );
}
