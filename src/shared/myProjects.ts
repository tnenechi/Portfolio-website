type Project = {
  video: string;
  image: string;
  name: string;
  description: string[];
  tech: string[];
  url: string;
  repo: string;
};

export const projects: Project[] = [
  {
    video: "/videos/projects/let's-cook/project-vid.mp4",
    image: "/images/projects/et's-cook/project-img.png",
    name: "Let's Cook",
    tech: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "ProstgreSQL",
      "JWT",
      "Tailwind",
    ],
    url: "https://lets-cook.onrender.com/",
    repo: "https://github.com/tnenechi/Lets-Cook",

    description: [
      "Let’s Cook is a full-stack recipe discovery web app that helps users find meals based on ingredients they already have, reducing food waste and decision fatigue.",
      "Users can search recipes, view detailed summaries, and save favorites to their personal collection.",
      "The app features secure authentication with JWT access and refresh tokens, protected routes, and persistent sessions using HTTP-only cookies.",
      "The frontend is built with React, React Router, and Tailwind/DaisyUI, while the backend uses Express, PostgreSQL, and RESTful APIs.",
      "The architecture emphasizes clean separation of concerns, centralized API handling, and scalable auth state management via React Context.",
      "Ingredient-based recipe search",
      "User authentication and session persistence",
      "Save and unsave recipes with real-time UI updates",
      "Responsive, modern UI",
      "Secure backend with token rotation and protected endpoints",
    ],
  },
];
