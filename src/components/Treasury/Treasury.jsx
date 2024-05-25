import React from 'react';
import { Project } from '../Project/Project.jsx';

export default function Treasury() {
  return (
    <div className="treasury mt-32">
      <div data-aos="fade-up" className="dragon-container">
        <img
          className="w-56 w-56 lg:w-80 my-24"
          src="./assets/images/dragon2.png"
        ></img>
      </div>
      <hr data-aos="fade-up" className="border-[#818181]" />

      <a name="projects"></a>

      <h2
        data-aos="fade-up"
        className="my-10 lg:my-20 text-3xl md:text-5xl lg:text-6xl"
      >
        Сокровищница
      </h2>

      <div className="projects grid">
        <Project index={0} />
        <Project index={1} />
        <Project index={2} />
        <Project index={3} />
      </div>

      <div data-aos="fade-up" className="treasury__contact">
        <h2>Хочешь работать с веб-дракончиком?</h2>
        <a href="mailto:grmnche@yandex.ru">Написать</a>
      </div>
    </div>
  );
}
