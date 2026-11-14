import React from "react";
import {portfolio as p} from "../../portfolio";
import TechnologyIcon from "../../components/softwareSkills/TechnologyIcon";
import illustration from "../../assets/images/developerActivity.svg";
import "./Skills.scss";
export default function Skills() {
  return (
    <>
      <section className="main" id="skills" aria-labelledby="about-title">
        <div className="skills-main-div">
          <div className="skills-image-div">
            <img
              src={illustration}
              width="1144"
              height="618"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="skills-text-div">
            <h2 className="skills-heading" id="about-title">
              À propos
            </h2>
            <p className="subTitle skills-text-subtitle">
              Génie logiciel et DevOps · ENSA Marrakech
            </p>
            {p.about.map(text => (
              <p className="subTitle skills-text" key={text}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="main" id="competences" aria-labelledby="skills-title">
        <h2 className="skills-heading" id="skills-title">
          Compétences
        </h2>
        <div className="skill-domains">
          {p.skills.map(group => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <ul className="skill-icon-grid">
                {group.items.map(item => (
                  <li key={item}>
                    <TechnologyIcon name={item} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
