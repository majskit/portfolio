import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "movie-search-react",
    title: "Movie Search React App",
    description:
      "A modern movie search application built with React and The Movie Database API",
    longDescription:
      "This is a comprehensive movie search application that allows users to search for movies, and view detailed information. The app features a clean, responsive design with advanced search capabilities and real-time data from The Movie Database (TMDb) API.",
    technologies: [
      "React",
      "CSS",
      "The Movie Database API",
      "React Router",
      "Responsive Design",
    ],
    features: [
      "Search movies by title with real-time suggestions",
      "View detailed movie information including cast, reviews, and ratings",
      "Browse popular movies",
      "Responsive design for all devices",
      "Clean and intuitive user interface",
      "Fast loading with optimized API calls",
    ],
    links: {
      demo: "https://movie-search-react-omega.vercel.app/",
      github: "https://github.com/majskit/movie-search-react",
      live: "https://movie-search-react-omega.vercel.app/",
    },
    image: "/images/projects/movie-search.jpg",
    status: "completed",
    category: "frontend",
  },
];
