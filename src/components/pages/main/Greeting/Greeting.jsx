import React from 'react';

export default function Greeting() {
  return (
    <div data-aos="fade-up" id="top" className="greeting">
      <div className="greeting__text">
        <h3>Герман Чернышёв</h3>

        <h2>Frontend Developer / WebDragon</h2>

        <p>
          Огнеупорная бизнес-логика и пламенный UX/UI. Сжигаю legacy-код, строю
          реактивные e-commerce-крепости.
        </p>
      </div>

      <img
        className="greeting__img w-32 lg:w-48"
        src="./assets/img/dragon.png"
      />
    </div>
  );
}
