import React, { useEffect } from 'react';
import Skill from './Skill/Skill.jsx';
import PropTypes from 'prop-types';
import 'aos/dist/aos.css';

function Skills(props) {
  return (
    <div id="skills" className="skills">
      <img
        data-aos="fade-up"
        className="skills__icon w-64 lg:w-1/3"
        src="./assets/img/dragon3.png"
      />

      <h2 data-aos="fade-up">Скиллы</h2>

      <div data-aos="fade-up" className="skills__list grid">
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
