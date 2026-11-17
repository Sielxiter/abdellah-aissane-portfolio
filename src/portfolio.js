// Profil établi à partir du CV fourni ; voir docs/SOURCES.md.
export const portfolio = {
  "name": "Abdellah Aissane",
  "specialty": "Full Stack Java / Spring Boot",
  "status": "Élève ingénieur en Génie Informatique · ENSA Marrakech",
  "location": "Maroc",
  "email": "aissaneabdellah@gmail.com",
  "phone": "+212 770 472 728",
  "phoneHref": "tel:+212770472728",
  "github": "https://github.com/Sielxiter",
  "linkedin": null,
  "cv": null,
  "photo": "images/abdellah-aissane.jpg",
  "intro": "Je conçois des API Spring Boot et des interfaces React, puis je les accompagne jusqu’au déploiement avec Docker et AWS.",
  "about": [
    "Élève ingénieur à l’ENSA Marrakech, je me spécialise dans le développement Full Stack Java / Spring Boot. J’aime partir d’un besoin concret et construire une application utilisable, du backend à l’interface.",
    "Chez Code212, j’ai pris en charge une plateforme de candidature pour l’Université Cadi Ayyad. Chez Cdigital, j’ai participé à une plateforme E-Learning en microservices, avec React, Spring Boot et AWS.",
    "Je m’intéresse aussi au traitement de données en temps réel : mon projet d’analyse de sentiments associe Kafka, Spark, BERT et un dashboard Streamlit."
  ],
  "skills": [
    {
      "title": "Backend & architecture",
      "items": [
        "Java",
        "Java EE",
        "Spring Boot",
        "Spring Security",
        "Hibernate",
        "APIs REST",
        "Microservices",
        "Spring Cloud",
        "Kafka",
        "Design Patterns"
      ]
    },
    {
      "title": "Frontend",
      "items": [
        "React",
        "TypeScript",
        "HTML",
        "CSS",
        "TailwindCSS",
        "ShadCn"
      ]
    },
    {
      "title": "Bases de données",
      "items": [
        "MySQL",
        "PostgreSQL"
      ]
    },
    {
      "title": "DevOps & cloud",
      "items": [
        "Docker",
        "Docker Compose",
        "GitHub Actions",
        "AWS",
        "Git",
        "Jira"
      ]
    }
  ],
  "experience": [
    {
      "company": "Cdigital",
      "role": "Stage · Développeur Full Stack",
      "period": "Juillet – août 2026",
      "summary": "Participation au développement d’une plateforme E-Learning reposant sur une architecture microservices.",
      "missions": [
        "Conception et développement de trois microservices métier exposant des API REST avec Spring Boot, JPA / Hibernate et MySQL.",
        "Réalisation d’interfaces réactives avec React, ShadCn et TailwindCSS.",
        "Gestion du stockage des fichiers sur AWS S3 et déploiement des services conteneurisés avec Docker / Docker Compose sur AWS EC2."
      ],
      "technologies": [
        "Spring Boot",
        "Hibernate",
        "MySQL",
        "React",
        "ShadCn",
        "TailwindCSS",
        "Docker",
        "AWS S3",
        "AWS EC2"
      ]
    },
    {
      "company": "Code212",
      "role": "Stage · Développeur Full Stack & DevOps",
      "period": "Avril – juin 2026",
      "summary": "Conception et livraison d’une plateforme de candidature pour les enseignants universitaires de l’Université Cadi Ayyad.",
      "missions": [
        "Recueil des besoins auprès du service RH de l’UCA et définition de quatre espaces : Candidat, Super-Admin, Admin Établissement et Commission.",
        "Développement d’API REST avec Spring Boot et MySQL, gestion de l’authentification, des rôles et des règles métier.",
        "Conteneurisation Docker / Docker Compose, pipeline CI/CD GitHub Actions et mise en production sur les serveurs de l’UCA."
      ],
      "technologies": [
        "Spring Boot",
        "MySQL",
        "APIs REST",
        "Docker",
        "Docker Compose",
        "GitHub Actions"
      ]
    }
  ],
  "projects": [
    {
      "name": "Analyse de sentiments",
      "label": "YouTube en temps réel",
      "context": "Projet personnel · 2026",
      "category": "Big Data / AWS",
      "need": "Collecter des commentaires YouTube et suivre leur sentiment en temps réel.",
      "contribution": "Conception d’un pipeline distribué de collecte, de classification et de visualisation, avec une architecture cloud sur AWS.",
      "features": [
        "Collecte via YouTube Data API et AWS Lambda",
        "Traitement Kafka et Spark Structured Streaming",
        "Classification par BERT fine-tuné et indexation Elasticsearch",
        "Dashboard Streamlit hébergé sur AWS EC2"
      ],
      "technologies": [
        "Kafka",
        "Spark",
        "BERT",
        "Elasticsearch",
        "Streamlit",
        "AWS"
      ],
      "github": "https://github.com/Sielxiter/BIGDATA-Sentiment-",
      "demo": null
    },
    {
      "name": "Candidatures UCA",
      "label": "Recrutement universitaire",
      "context": "Stage Code212 · 2026",
      "category": "Full Stack / CI/CD",
      "need": "Accompagner le dépôt et la gestion des candidatures des enseignants universitaires.",
      "contribution": "Prise en charge du projet, de l’analyse des besoins avec le service RH jusqu’à la mise en production sur les serveurs de l’UCA.",
      "features": [
        "Quatre espaces selon les rôles des utilisateurs",
        "Authentification et contrôle d’accès",
        "API REST et règles métier Spring Boot",
        "Déploiement Docker et automatisation GitHub Actions"
      ],
      "technologies": [
        "Spring Boot",
        "MySQL",
        "Docker",
        "GitHub Actions"
      ],
      "github": null,
      "demo": "https://cand-mch2pes.uca.ma"
    },
    {
      "name": "Plateforme E-Learning",
      "label": "Services de formation",
      "context": "Stage Cdigital · 2026",
      "category": "Microservices / React",
      "need": "Développer une plateforme de formation avec des services métier et une interface React.",
      "contribution": "Participation au développement de trois microservices Spring Boot, des interfaces React et du déploiement des services sur AWS.",
      "features": [
        "API REST avec Spring Boot et Hibernate",
        "Interfaces React, ShadCn et TailwindCSS",
        "Stockage de fichiers sur AWS S3",
        "Services conteneurisés sur AWS EC2"
      ],
      "technologies": [
        "Spring Boot",
        "React",
        "MySQL",
        "Docker",
        "AWS"
      ],
      "github": null,
      "demo": null
    }
  ],
  "education": [
    {
      "school": "École Nationale des Sciences Appliquées de Marrakech",
      "degree": "Cycle ingénieur en Génie Informatique",
      "period": "2024 – présent"
    },
    {
      "school": "ENSA Marrakech",
      "degree": "Classes Préparatoires Intégrées",
      "period": "2022 – 2024"
    },
    {
      "school": "Lycée Abdellah Ben Brahim, Maroc",
      "degree": "Baccalauréat Sciences Physiques",
      "period": "2021 – 2022"
    }
  ],
  "engagement": null,
  "certifications": [],
  "training": null,
  "languages": [
    "Arabe · langue maternelle",
    "Français · courant",
    "Anglais · courant"
  ],
  "interests": [],
  "softSkills": [
    "Autonomie",
    "Rigueur",
    "Sens de la qualité"
  ]
};
