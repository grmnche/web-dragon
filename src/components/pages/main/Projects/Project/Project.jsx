import React, { useState } from 'react';
import { projects } from '../../../../../../storage/projects';

export function Project({ className, index }) {
  return (
    <a
      data-aos="fade-up"
      href={projects[index].link}
      target="_blank"
      className="project col-12 col-md-6"
    >
      <img className="project__picture" src={projects[index].image} alt="..." />

      <div className="project__desc">
        <p className="project__title">{projects[index].title}</p>

        <p className="project__stack">{projects[index].stack}</p>
      </div>
    </a>
  );
}
