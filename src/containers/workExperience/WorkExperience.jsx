import React from "react";
import {portfolio as p} from "../../portfolio";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import "./WorkExperience.scss";
export default function WorkExperience() {
  return (
    <section
      className="experience-container"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div>
        <h2 className="experience-heading" id="experience-title">
          Expérience professionnelle
        </h2>
        <div className="experience-cards-div">
          {p.experience.map(e => (
            <ExperienceCard key={e.company} experience={e} />
          ))}
        </div>
      </div>
    </section>
  );
}
