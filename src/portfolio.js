// Informations vérifiées dans le CV et les dépôts ; détails dans docs/SOURCES.md.
// Aucun appel GitHub ni secret n'est nécessaire pour afficher le portfolio.
export const portfolio = {
  name: "Amine Izmaoun",
  specialty: "Génie logiciel & DevOps",
  status: "À la recherche d’un stage PFE",
  location: "Casablanca, Maroc",
  email: "beleamine84@gmail.com",
  phone: "+212 708 91 92 05",
  phoneHref: "tel:+212708919205",
  github: "https://github.com/izmaoun",
  linkedin: "https://www.linkedin.com/in/amine-izmaoun-5ab61232a/",
  cv: "CV_IZMAOUN_Amine.pdf",
  photo: "images/amine-izmaoun-portrait.jpg",
  intro:
    "Étudiant ingénieur en génie informatique à l’ENSA Marrakech, je développe des applications Java / Spring Boot et travaille sur l’automatisation de leur déploiement.",
  about: [
    "Mon parcours à l’ENSA Marrakech m’a conduit vers le génie logiciel et le DevOps. J’aime comprendre un besoin métier, le traduire en services et suivre une application jusqu’à son déploiement.",
    "Avec Java et Spring Boot, je m’intéresse particulièrement aux architectures microservices, à la sécurité des API et à la communication entre services. Mon stage PFA chez Code212 m’a permis d’associer ce travail à la conteneurisation, à l’intégration continue et à l’observabilité.",
    "Pour mon PFE, je souhaite contribuer à un projet qui relie développement logiciel et pratiques DevOps, au sein d’une équipe auprès de laquelle continuer à apprendre."
  ],
  skills: [
    {
      title: "Back-end & architecture",
      items: [
        "Java",
        "Spring Boot",
        "Spring Cloud",
        "Spring Security",
        "Keycloak",
        "Microservices",
        "Hibernate",
        "Kafka"
      ]
    },
    {title: "Interfaces", items: ["Angular", "TypeScript", "React", "JavaFX"]},
    {
      title: "Bases de données",
      items: ["PostgreSQL", "MySQL", "MongoDB", "SQL", "PL/SQL"]
    },
    {
      title: "DevOps & cloud",
      items: [
        "Git",
        "Docker",
        "Docker Compose",
        "Jenkins",
        "SonarQube",
        "Trivy",
        "Kubernetes",
        "Helm",
        "Nginx",
        "Terraform",
        "Prometheus",
        "Grafana",
        "AWS"
      ]
    }
  ],
  experience: [
    {
      company: "Code212",
      role: "Stage PFA · Plateforme microservices & DevOps",
      period: "Juin – septembre 2026",
      summary:
        "Conception, développement et déploiement d’une plateforme de réservation des ressources du centre Code212.",
      missions: [
        "Développement de cinq microservices Spring Boot : Config, Eureka, Gateway, Resource et Reservation. Communication avec OpenFeign et Eureka, et bases PostgreSQL séparées par service.",
        "Sécurisation des API avec Keycloak, OAuth2 / OIDC, JWT et RBAC ; validation des jetons dans la Gateway et les services avec Spring Security 6.",
        "Développement d’API REST documentées avec OpenAPI 3 ; persistance avec Spring Data JPA, Hibernate et MapStruct.",
        "Automatisation d’un pipeline Jenkins : compilation Maven, tests, SonarQube, Trivy et publication des images Docker, déclenché par webhook Git.",
        "Conteneurisation Docker multi-stage, environnement Docker Compose avec contrôles de santé et déploiement Kubernetes sur Minikube via Ingress Nginx.",
        "Provisionnement Terraform, déploiements Helm et monitoring avec Prometheus et Grafana."
      ],
      technologies: [
        "Java 17",
        "Spring Boot 3.2.5",
        "Spring Cloud",
        "Spring Security 6",
        "PostgreSQL 16",
        "Keycloak 23",
        "Maven",
        "Git",
        "Jenkins",
        "SonarQube",
        "Trivy",
        "Docker",
        "Docker Compose",
        "Kubernetes",
        "Helm",
        "Nginx",
        "Terraform",
        "Prometheus",
        "Grafana"
      ]
    }
  ],
  projects: [
    {
      name: "Code212",
      label: "Réservation de ressources",
      context: "Stage PFA · 2026",
      category: "Microservices / DevOps",
      need: "Permettre au centre Code212 de gérer ses ressources et leurs réservations.",
      contribution:
        "Développement des services de ressources et de réservation, intégration de la sécurité et de l’environnement conteneurisé, dans le cadre de mon stage PFA.",
      features: [
        "Gestion des ressources et des réservations",
        "Contrôle des conflits de réservation",
        "Authentification Keycloak et API documentées",
        "Découverte de services et routage centralisé"
      ],
      technologies: [
        "Java 17",
        "Spring Boot",
        "Spring Cloud",
        "PostgreSQL",
        "Keycloak",
        "Docker Compose"
      ],
      github: "https://github.com/izmaoun/Code212",
      demo: null
    },
    {
      name: "Marketplace B2B",
      label: "Entreprises & freelances",
      context: "Projet de fin de semestre · 2026",
      category: "Microservices / Temps réel",
      need: "Mettre en relation des entreprises et des freelances autour de missions et de candidatures.",
      contribution:
        "Dans ce projet collectif, développement du service de messagerie WebSocket et connexion des services entreprise, freelance, administration et missions. Ces apports sont identifiables dans l’historique Git.",
      features: [
        "Publication de missions et gestion des candidatures",
        "Profils entreprises et freelances",
        "Conversations et messages en temps réel",
        "Authentification et contrôle d’accès"
      ],
      technologies: [
        "Spring Boot",
        "PostgreSQL",
        "MongoDB",
        "Keycloak",
        "WebSocket",
        "Docker"
      ],
      github: "https://github.com/izmaoun/Marketplace",
      demo: null
    },
    {
      name: "E-banking 2.0",
      label: "Services bancaires",
      context: "Projet académique · 2025",
      category: "Java / Angular",
      need: "Proposer une interface web pour gérer des clients, leurs comptes et leurs opérations bancaires.",
      contribution:
        "Développement d’un backend REST Java / Spring et d’une interface Angular. Le dépôt consultable présente la gestion des comptes et les opérations de débit, crédit et virement.",
      features: [
        "Gestion des clients et des comptes",
        "Débits, crédits et virements",
        "Historique paginé des opérations",
        "Interface Angular et environnement Docker"
      ],
      technologies: ["Spring Boot", "Angular", "MySQL", "Docker", "Nginx"],
      github: "https://github.com/izmaoun/e-banking-V2",
      demo: null
    }
  ],
  education: [
    {
      school: "École Nationale des Sciences Appliquées de Marrakech",
      degree: "Parcours ingénieur en génie informatique",
      period: "2022 – présent"
    },
    {
      school: "Faculté des Sciences et Techniques de Marrakech",
      degree: "Filière MPCI",
      period: "2021 – 2022"
    },
    {
      school: "Baccalauréat",
      degree: "Sciences physiques et chimie",
      period: "2021"
    }
  ],
  engagement: {
    role: "Chef de cellule Projets",
    organization: "Club de Filière (CGI)",
    period: "Septembre 2025 – septembre 2026",
    description:
      "Supervision et coordination des projets du club, accompagnement des membres et organisation d’événements scientifiques."
  },
  certifications: [
    "365 DataScience · Git and GitHub",
    "365 DataScience · Advanced SQL"
  ],
  training:
    "Oracle MyLearn · Comprehensive Java SE 17 Development — formation en cours.",
  languages: [
    "Tamazight · langue maternelle",
    "Arabe · langue maternelle",
    "Français · courant",
    "Anglais · intermédiaire"
  ],
  interests: ["Athlétisme"],
  softSkills: ["Résolution de problèmes", "Travail en équipe", "Adaptabilité"]
};
