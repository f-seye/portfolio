const portfolio = {
  name: "Fama SEYE",
  title: "Étudiante en Troisième année de Licence en Informatique",
  tagline: "Future ingénieure en informatique",
  about: `Étudiante en informatique avec un intérêt particulier pour l'intelligence artificielle, le génie logiciel et la cybersécurité. Curieuse, rigoureuse et motivée, je suis à la recherche d'un stage à partir du mois de mai et d'une alternance pour la rentrée prochaine.`,
  email: "famasseye@gmail.com",
  github: "https://github.com/f-seye",
  linkedin: "https://www.linkedin.com/in/fama-seye-4811312b5/",
  skills: [
    {
      category: "Langages",
      items: ["Python", "C", "Java", "JavaScript", "TypeScript", "Ocaml", "SQL"],
      color: "#1a73e8",
    },
    {
      category: "Concepts",
      items: ["Algorithmique", "POO", "Structures de données","Programmation Web","Bases de données"],
      color: "#0f9d58",
    },
    {
      category: "Outils",
      items: ["Git", "Linux", "Excel"],
      color: "#f29900",
    },
    {
      category: "Intérêts",
      items: ["Intelligence Artificielle", "Cybersécurité", "Développement de logiciels"],
      color: "#ea4335",
    },
  ],
  projects: [
    {
      title: "Application de quiz",
      description:
        "Application de quiz en ligne avec système d'authentification, création de quiz personnalisés et classement des joueurs..",
      tech: ["Flask", "MySQL", "React"],
      github: "https://github.com/f-seye/quizzio",
      category: "Web App",
      accent: "#1a73e8",
    },
    {
      title: "Suivi de dépenses",
      description:
        "Application web de suivi de dépenses avec visualisation graphique des données et génération de relevés en PDF.",
      tech: ["React", "Flask","PostgreSQL"],
      github: "https://github.com/f-seye/fintrack",
      category: "Web App",
      accent: "#0f9d58",
    },
  ],
};

export default portfolio;
