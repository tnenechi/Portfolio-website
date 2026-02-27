type Project = {
  video?: string;
  image: string;
  name: string;
  description: string[];
  tech: string[];
  url: string;
  repo: string;
  website?: boolean;
};

// const dummyData: Project[] = [
//   {
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
//     name: "DevTrack",
//     tech: [
//       "Next.js",
//       "TypeScript",
//       "Prisma",
//       "PostgreSQL",
//       "NextAuth",
//       "Tailwind",
//     ],
//     url: "https://devtrack-demo.vercel.app/",
//     repo: "https://github.com/yourusername/devtrack",
//     description: [
//       "A developer productivity dashboard for tracking tasks and coding goals.",
//       "Includes authentication, protected dashboards, and real-time updates.",
//       "Users can create, edit, and manage project boards.",
//       "Uses Prisma ORM for database management and clean schema design.",
//       "Optimized for performance with server-side rendering and API routes.",
//     ],
//   },
//   {
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
//     name: "FinSight",
//     tech: ["React", "TypeScript", "Chart.js", "Node.js", "MongoDB", "Express"],
//     url: "https://finsight-demo.onrender.com/",
//     repo: "https://github.com/yourusername/finsight",
//     description: [
//       "A financial analytics dashboard for tracking income and expenses.",
//       "Interactive charts provide visual insights into spending habits.",
//       "RESTful backend built with Express and MongoDB.",
//       "Responsive UI with dynamic data visualization.",
//       "Implements secure user authentication and account management.",
//     ],
//   },
// ];

export const projects: Project[] = [
  {
    name: "Let's Cook",
    video: "/videos/projects/let's-cook/project-vid.mp4",
    image: "/images/projects/letsCook.png",
    tech: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Tailwind",
    ],
    url: "https://lets-cook.onrender.com/",
    repo: "https://github.com/tnenechi/Lets-Cook",
    description: [
      "Let’s Cook is a full-stack recipe discovery web app that integrates the Spoonacular API to help users find meals based on ingredients they already have.",
      "Users can search recipes, view detailed summaries, and save favorites.",
      "Implements secure authentication with JWT access and refresh tokens.",
      "Built with React, Express, and PostgreSQL using RESTful APIs.",
      "Features protected routes, persistent sessions, and responsive UI.",
    ],
    website: true,
  },

  {
    name: "TechniqueAI",
    image: "/images/projects/techniqueAI.png",
    tech: [
      "React",
      "Python",
      "TensorFlow",
      "Keras",
      "Flask",
      "MediaPipe",
      "OpenCV",
      "NumPy",
      "scikit-learn",
    ],
    url: "https://github.com/tnenechi/Over-Head-Press-Form-Detection-with-an-LSTM-model",
    repo: "https://github.com/tnenechi/Over-Head-Press-Form-Detection-with-an-LSTM-model",
    description: [
      "TechniqueAI is an AI-powered computer vision tool that analyzes overhead press form in real-time.",
      "Detects common mistakes in elbow and knee alignment (elbow flare, knee cave) using frame-by-frame keypoint analysis.",
      "Built three model architectures: Inception-style LSTM, custom LSTM, and feedforward neural network.",
      "Processes video input via MediaPipe for pose estimation, computes joint differences, and outputs per-frame predictions.",
      "Exposed through a REST API with video upload endpoint and multiple model selection.",
      "Includes complete training pipelines with checkpointing, early stopping, and detailed per-joint evaluation metrics (accuracy, precision, recall, F1).",
      "Designed to help lifters improve technique and reduce injury risk during strength training.",
    ],
  },
];
