import React, { useEffect } from 'react';
import Skill from '../Skill/Skill.jsx';
import PropTypes from 'prop-types';
import 'aos/dist/aos.css';

function Skills(props) {
  return (
    <div className="skills-outer mt-32">
      <div data-aos="fade-up" className="dragon-container">
        <img
          className="w-64 lg:w-1/3 my-24"
          src="./assets/images/dragon3.png"
        ></img>
      </div>
      <hr data-aos="fade-up" className="border-[#818181]" />
      <a name="skills"></a>

      <h2 data-aos="fade-up" className="my-10 lg:my-20 text-3xl md:text-5xl lg:text-6xl">
        Скиллы
      </h2>

      <div data-aos="fade-up" className="skills grid">
        {props.skills.map((skill) => {
          return <Skill skill={skill} key={skill.id} />;
        })}
      </div>
    </div>
  );
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Skills;
