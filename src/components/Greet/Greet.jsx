import React, { useState } from 'react';

export default function Greet() {
  return (
    <div data-aos="fade-up" className="flex flex-col lg:items-center">
      <a name="top"></a>

      <div className="mt-56 lg:w-2/3">
        <p className="text-4xl md:text-5xl lg:text-6xl">Раргхх!..</p>
        <p className="my-3 text-4xl md:text-5xl lg:text-6xl">
          Я веб-дракончик{' '}
          <span className="author-name text-base md:text-lg lg:text-xl text-[#818181]">
            Германа Чернышёва
          </span>
          .
        </p>
      </div>

      <div className="dragon-container">
        <img
          className="dragon-container__picture w-32 lg:w-48 my-14 lg:my-28"
          src="./assets/images/dragon.png"
        ></img>
      </div>
    </div>
  );
}
