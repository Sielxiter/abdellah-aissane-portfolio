import React from "react";
import {useLanguage} from "../../i18n/LanguageContext";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import "./WorkExperience.scss";
export default function WorkExperience() {
  const {p, ui} = useLanguage();
  return (
    <section
      className="experience-container"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div>
        <h2 className="experience-heading" id="experience-title">
          {ui.experience}
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
