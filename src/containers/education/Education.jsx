import React from "react";
import {useLanguage} from "../../i18n/LanguageContext";
import {Tags} from "../../components/shared/Shared";
import EducationCard from "../../components/educationCard/EducationCard";
import "./Education.scss";
export default function Education() {
  const {p, ui} = useLanguage();
  return (
    <>
      <section
        className="education-section"
        id="education"
        aria-labelledby="education-title"
      >
        <h2 className="education-heading" id="education-title">
          {ui.education}
        </h2>
        <div className="education-card-container">
          {p.education.map(s => (
            <EducationCard key={s.school} school={s} />
          ))}
        </div>
      </section>
      <section
        className="main"
        id="engagements"
        aria-labelledby="engagements-title"
      >
        <h2 className="skills-heading" id="engagements-title">
          {ui.engagement}
        </h2>
        <div className="engagement-columns">
          <article>
            <h3>{p.engagement.role}</h3>
            <p>
              {p.engagement.organization} · {p.engagement.period}
            </p>
            <p className="subTitle">{p.engagement.description}</p>
          </article>
          <article>
            <h3>{ui.certifications}</h3>
            <ul className="subTitle">
              {p.certifications.map(c => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="subTitle">{p.training}</p>
          </article>
        </div>
        <div className="profile-details">
          <article aria-labelledby="languages-title">
            <h3 id="languages-title">{ui.languages}</h3>
            <Tags items={p.languages} />
          </article>
          <article aria-labelledby="interests-title">
            <h3 id="interests-title">{ui.interests}</h3>
            <Tags items={p.interests} />
          </article>
          <article aria-labelledby="qualities-title">
            <h3 id="qualities-title">{ui.qualities}</h3>
            <Tags items={p.softSkills} />
          </article>
        </div>
      </section>
    </>
  );
}
