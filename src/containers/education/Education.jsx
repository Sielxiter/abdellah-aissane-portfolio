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
        aria-label={ui.languages}
      >
        <div className="profile-details">
          <article aria-labelledby="languages-title">
            <h3 id="languages-title">{ui.languages}</h3>
            <Tags items={p.languages} />
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
