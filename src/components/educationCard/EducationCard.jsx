import React from "react";
import "./EducationCard.scss";
export default function EducationCard({school}) {
  return (
    <div>
      <article className="education-card">
        <div className="education-card-right">
          <h3 className="education-text-school">{school.school}</h3>
          <div className="education-text-details">
            <h4 className="education-text-subHeader">{school.degree}</h4>
            <p className="education-text-duration">{school.period}</p>
          </div>
        </div>
      </article>
      <div className="education-card-border" />
    </div>
  );
}
