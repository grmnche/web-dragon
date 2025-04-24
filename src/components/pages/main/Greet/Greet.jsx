import React from 'react';

export default function Greet() {
  return (
    <div data-aos="fade-up" id="top" className="greet">
      <div className="greet__text">
        <p>Герман Чернышёв</p>

        <h2>Frontend Developer / WebDragon</h2>

        <p className="text-[#dad394]">Огнеупорный код и пламенный UX/UI</p>

        <p>Сжигаю legacy-код, строю реактивные e-commerce-крепости</p>
      </div>

      <img
        className="greet__picture w-32 lg:w-48"
        src="./assets/images/dragon.png"
      />
    </div>
  );
}
