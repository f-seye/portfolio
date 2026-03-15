const portfolio = {
  name: "Fama SEYE",
  title: "Étudiante en Troisième année de Licence en Informatique",
  about: `Étudiante en informatique passionnée par l'intelligence artificielle avec un intérêt particulier pour ses applications dans le domaine de la santé et des systèmes intelligents. Curieuse, rigoureuse et motivée, je suis à la recherche d'un stage à partir du mois de mai et d'une alternance pour la rentrée prochaine.`,
  email: "famasseye@gmail.com",
  github: "https://github.com/f-seye",
  linkedin: "https://www.linkedin.com/in/fama-seye-4811312b5/",
  skills: [
    {
      category: "Langages de programmation",
      items: ["Python", "C", "Java", "JavaScript", "TypeScript", "Ocaml"],
      color: "#1a73e8",
    },
    {
      category: "Progammation web et frameworks",
      items: ["HTML","CSS","SQL","Flask", "React", "Vue","Spring Boot"],
      color: "#bc2846",
    },
    {
      category: "Concepts",
      items: ["Algorithmique", "Programmation orientée objets", "Structures de données","Machine Learning"],
      color: "#0f9d58",
    },
    {
      category: "Outils et environnements",
      items: ["Git", "Linux", "PostgreSQL","MySQL","Excel"],
      color: "#f29900",
    },
  ],
  projects: [
    {
      title: "SleepAI",
      description:
        "Application de prédiction de la qualité du sommeil basée sur le Machine Learning. L'utilisateur répond à 9 questions via un chatbot conversationnel et reçoit un score personnalisé avec des recommandations générées par un modèle entraîné.",
      tech: ["Python", "scikit-learn", "Flask", "React"],
      github: "https://github.com/f-seye/sleepAi",
      category: "Machine Learning",
      accent: "#a62121",
    },
    {
      title: "Quizzio",
      description:
        "Application web de quiz avec authentification sécurisée, création de quiz personnalisés et classement en temps réel. Gestion complète des utilisateurs et des sessions via une API REST Flask et une base de données MySQL.",
      tech: ["Flask", "MySQL", "React"],
      github: "https://github.com/f-seye/quizzio",
      category: "Web App",
      accent: "#1a73e8",
    },
    {
      title: "Fintrack",
      description:
        "Application web de suivi de dépenses avec visualisation graphique des données et génération de relevés en PDF.",
      tech: ["React", "Flask","PostgreSQL"],
      github: "https://github.com/f-seye/fintrack",
      category: "Web App",
      accent: "#0f9d58",
    },
    {
      title: "Ubgarden",
      description:
        "Jeu 2D en Java/JavaFX : guider un jardinier à travers plusieurs niveaux, collecter toutes les carottes pour débloquer la porte suivante, ramasser des insecticides pour éliminer les guêpes et frelons, et éviter les pommes empoisonnées qui affaiblissent le jardinier. ",
      tech: ["Java"],
      github: "https://github.com/f-seye/ubgarden",
      category: "Programming",
      accent: "#8233a9",
    },
    {
      title: "NetGame",
      description:
        "Jeu de puzzle Net en C avec interface graphique SDL qui consiste à orienter des pièces sur une grille pour former un réseau entièrement connecté. Inclut un solveur et un générateur de parties aléatoires. ",
      tech: ["C","SDL"],
      github: "https://github.com/f-seye/netGame",
      category: "Programming",
      accent: "#bbd43d",
    },    
  ],
};

export default portfolio;
