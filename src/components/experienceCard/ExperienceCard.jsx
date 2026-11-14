import React from "react";
import {Tags} from "../shared/Shared";
import "./ExperienceCard.scss";
export default function ExperienceCard({experience: e}) {
  return (
    <article className="experience-card">
      <div className="experience-banner">
        <div className="experience-div-company">
          <h3 className="experience-text-company">{e.company}</h3>
        </div>
      </div>
      <div className="experience-text-details">
        <h4 className="experience-text-role">{e.role}</h4>
        <p className="experience-text-date">{e.period}</p>
        <p className="subTitle experience-text-desc">{e.summary}</p>
        <ul className="experience-missions">
          {e.missions.map(m => (
            <li className="subTitle" key={m}>
              {m}
            </li>
          ))}
        </ul>
        <Tags items={e.technologies} />
      </div>
    </article>
  );
}
