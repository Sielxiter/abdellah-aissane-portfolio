import React from "react";
import {asset} from "../shared/Shared";
const icons = {
  Java: "java",
  "Spring Boot": "spring",
  "Spring Cloud": "spring",
  "Spring Security": "spring",
  Hibernate: "hibernate",
  Kafka: "apachekafka",
  Angular: "angular",
  TypeScript: "typescript",
  React: "react",
  JavaFX: "java",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  MongoDB: "mongodb",
  Git: "git",
  Docker: "docker",
  "Docker Compose": "docker",
  Jenkins: "jenkins",
  SonarQube: "sonarqube",
  Kubernetes: "kubernetes",
  Helm: "helm",
  Nginx: "nginx",
  Terraform: "terraform",
  Prometheus: "prometheus",
  Grafana: "grafana",
  AWS: "amazonwebservices"
};
// Symboles de domaine pour les outils sans logo local ; le nom reste explicite.
export default function TechnologyIcon({name}) {
  if (icons[name])
    return (
      <img
        src={asset(`icons/technologies/${icons[name]}.svg`)}
        alt=""
        width="38"
        height="38"
        loading="lazy"
      />
    );
  const security = name === "Keycloak" || name === "Trivy";
  const database = name === "SQL" || name === "PL/SQL";
  return (
    <svg
      viewBox="0 0 32 32"
      width="38"
      height="38"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      {security ? (
        <>
          <path d="M16 3 27 8v8c0 7-11 13-11 13S5 23 5 16V8Z" />
          <path d="m10 15 4 4 8-8" />
        </>
      ) : database ? (
        <>
          <ellipse cx="16" cy="7" rx="11" ry="4" />
          <path d="M5 7v18c0 5 22 5 22 0V7M5 16c0 5 22 5 22 0" />
        </>
      ) : (
        <>
          <rect x="12" y="2" width="8" height="8" rx="2" />
          <rect x="2" y="22" width="8" height="8" rx="2" />
          <rect x="22" y="22" width="8" height="8" rx="2" />
          <path d="M16 10v7H6v5m10-5h10v5" />
        </>
      )}
    </svg>
  );
}
