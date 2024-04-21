import React from 'react';

function Navbar() {
  return (
    <nav
      data-aos="fade-down"
      className="z-10 h-10 text-center fixed top-0 left-0 bottom-0 right-0"
    >
      <ul className="mt-6 text-sm md:text-lg lg:text-xl">
        <li className="nav-item inline-block">
          <a href="#skills">Скиллы</a>
        </li>
        <li
          data-aos="fade-down"
          className="nav-icon inline-block mx-6 lg:mx-12"
        >
          <a href="#top">
            <img
              src="./assets/images/dragon-white.png"
              className="z-10 nav-img w-14"
              alt=""
            />
          </a>
        </li>
        <li className="nav-item inline-block">
          <a href="#projects">Сокровищница</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
