// English translation of the verified French profile. Shared facts stay in portfolio.js.
export const englishProfile = {
  specialty: "Software Engineering & DevOps",
  status: "Looking for a final-year engineering internship",
  location: "Casablanca, Morocco",
  intro:
    "I am a computer engineering student at ENSA Marrakech. I develop Java / Spring Boot applications and work on automating their deployment.",
  about: [
    "My studies at ENSA Marrakech led me towards software engineering and DevOps. I enjoy understanding a business need, translating it into services and following an application through to deployment.",
    "With Java and Spring Boot, I am particularly interested in microservices, API security and communication between services. My PFA internship at Code212 brought this work together with containerisation, continuous integration and observability.",
    "For my final-year internship, I would like to contribute to a project combining software development and DevOps practices, working with a team I can continue to learn from."
  ],
  skillTitles: [
    "Back-end & architecture",
    "Front-end",
    "Databases",
    "DevOps & cloud"
  ],
  experience: [
    {
      role: "PFA internship · Microservices & DevOps platform",
      period: "June – September 2026",
      summary:
        "Design, development and deployment of a resource booking platform for the Code212 centre.",
      missions: [
        "Developed five Spring Boot microservices: Config, Eureka, Gateway, Resource and Reservation. Service communication with OpenFeign and Eureka, with separate PostgreSQL databases per service.",
        "Secured APIs using Keycloak, OAuth2 / OIDC, JWT and RBAC; token validation in the Gateway and services with Spring Security 6.",
        "Developed REST APIs documented with OpenAPI 3; persistence with Spring Data JPA, Hibernate and MapStruct.",
        "Automated a Jenkins pipeline covering Maven builds, tests, SonarQube, Trivy and Docker image publishing, triggered by a Git webhook.",
        "Used multi-stage Docker builds, a Docker Compose environment with health checks and Kubernetes deployment on Minikube through Nginx Ingress.",
        "Provisioned infrastructure with Terraform, packaged deployments with Helm and set up monitoring with Prometheus and Grafana."
      ]
    }
  ],
  projects: [
    {
      name: "Code212",
      label: "Resource booking",
      context: "PFA internship · 2026",
      category: "Microservices / DevOps",
      need: "Help the Code212 centre manage its resources and bookings.",
      contribution:
        "Developed the resource and reservation services and integrated security and a containerised environment during my PFA internship.",
      features: [
        "Resource and booking management",
        "Booking conflict checks",
        "Keycloak authentication and documented APIs",
        "Service discovery and centralised routing"
      ]
    },
    {
      name: "B2B Marketplace",
      label: "Companies & freelancers",
      context: "End-of-semester project · 2026",
      category: "Microservices / Real-time communication",
      need: "Connect companies and freelancers through project opportunities and applications.",
      contribution:
        "In this team project, I developed the WebSocket messaging service and connected the company, freelancer, administration and mission services. These contributions can be identified in the Git history.",
      features: [
        "Mission publishing and application management",
        "Company and freelancer profiles",
        "Real-time conversations and messages",
        "Authentication and access control"
      ]
    },
    {
      name: "E-banking 2.0",
      label: "Banking services",
      context: "Academic project · 2025",
      category: "Java / Angular",
      need: "Provide a web interface to manage customers, their accounts and banking transactions.",
      contribution:
        "Developed a Java / Spring REST backend and an Angular interface. The public repository includes account management and debit, credit and transfer operations.",
      features: [
        "Customer and account management",
        "Debits, credits and transfers",
        "Paginated transaction history",
        "Angular interface and Docker environment"
      ]
    }
  ],
  education: [
    {
      school: "École Nationale des Sciences Appliquées de Marrakech",
      degree: "Computer engineering programme",
      period: "2022 – present"
    },
    {
      school: "Faculté des Sciences et Techniques de Marrakech",
      degree: "MPCI programme",
      period: "2021 – 2022"
    },
    {school: "Baccalaureate", degree: "Physics and Chemistry", period: "2021"}
  ],
  engagement: {
    role: "Project Unit Lead",
    organization: "Department Club (CGI)",
    period: "September 2025 – September 2026",
    description:
      "Supervised and coordinated club projects, supported members and organised scientific events."
  },
  training:
    "Oracle MyLearn · Comprehensive Java SE 17 Development — training in progress.",
  languages: [
    "Tamazight · native",
    "Arabic · native",
    "French · fluent",
    "English · intermediate"
  ],
  interests: ["Athletics"],
  softSkills: ["Problem solving", "Teamwork", "Adaptability"]
};
