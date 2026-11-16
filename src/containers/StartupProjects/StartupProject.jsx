import React from "react";
import {useLanguage} from "../../i18n/LanguageContext";
import {Tags, ExternalLink} from "../../components/shared/Shared";
import "./StartupProjects.scss";
export default function StartupProject() {
  const {p, ui} = useLanguage();
  return (
    <section className="main" id="projects" aria-labelledby="projects-title">
      <h2 className="skills-heading" id="projects-title">
        {ui.projects}
      </h2>
      <p className="subTitle project-subtitle">{ui.projectsIntro}</p>
      <div className="projects-container">
        {p.projects.map(project => (
          <article
            className="project-card project-card-light"
            key={project.name}
          >
            <div className="project-detail">
              <h3 className="card-title">{project.name}</h3>
              <p className="project-context subTitle">{project.context}</p>
              <p className="card-subtitle">{project.need}</p>
              <h4>{ui.contribution}</h4>
              <p className="card-subtitle">{project.contribution}</p>
              <h4>{ui.features}</h4>
              <ul className="card-subtitle project-features">
                {project.features.map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Tags items={project.technologies} />
            </div>
            <div className="project-card-footer">
              <ExternalLink className="project-tag" href={project.github}>
                {ui.code} ↗
              </ExternalLink>
              {project.demo && (
                <ExternalLink className="project-tag" href={project.demo}>
                  {ui.demo} ↗
                </ExternalLink>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
