import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Aos from 'aos';

function Skill({ skill }) {
  const [isActive, setIsActive] = useState(false);

  const handle = () => {
    setIsActive((isActive) => !isActive);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-up" className="skill" onClick={handle}>
      <div className="skill__preview w-full flex flex-col">
        <img src={skill.image} className="skill-img w-16 lg:w-28" alt="..." />

        <h1 className="skill__title text-lg lg:text-2xl">{skill.title}</h1>
      </div>

      <div className={isActive ? 'show w-full' : 'hide-opacity w-full'}>
        <p className="skill__description text-sm lg:text-xl text-[#dad394]">
          {skill.description}
        </p>
      </div>
    </div>
  );
}

Skill.propTypes = {
  skill: PropTypes.object.isRequired,
};

export default Skill;
