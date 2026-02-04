import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import { HiOutlineExternalLink } from "react-icons/hi";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    name: "NetflixGPT",
    description:
      "AI-powered movie recommendation platform using Groq LLM and TMDB API. Natural language search, Firebase auth, and Netflix-inspired UI with trailers and watchlists.",
    image: "/screenshots/NetflixGPT.png",
    github: "https://github.com/Rithikakalaimani/netflix_gpt",
    demo: "https://netflix-gpt-vdpk.vercel.app/",
    tags: ["React", "TailwindCSS", "Redux", "Firebase", "Groq AI", "TMDB API"],
    featured: true,
  },
  {
    name: "Linklet",
    description:
      "Production URL shortener with auth, analytics, QR codes, and Redis caching. Per-link stats, custom aliases, expiration, and geo/browser analytics.",
    image: "/screenshots/Linklet.png",
    github: "https://github.com/Rithikakalaimani/Linklet",
    demo: "https://linklett.netlify.app/",
    tags: ["Node.js", "Express", "MongoDB", "Redis", "React", "Firebase"],
    featured: true,
  },
  {
    name: "QueryPilot",
    description:
      "Text-to-SQL RAG chatbot: ask in natural language and get SQL + results. Schema synced to FAISS; Groq LLM generates validated SQL with retrieved context.",
    image: "/screenshots/QueryPilot.png",
    github: "https://github.com/Rithikakalaimani/QueryPilot",
    demo: "https://querypilot.netlify.app/",
    tags: ["FastAPI", "React", "MySQL", "FAISS", "Groq", "HuggingFace"],
    featured: true,
  },
  {
    name: "PathOps",
    description:
      "Real-time graph engine for shortest path under continuous edge updates. Incremental Dijkstra with lazy re-optimization—no full recompute when edges improve.",
    image: "/screenshots/PathOps.png",
    github: "https://github.com/Rithikakalaimani/PathOps",
    demo: "https://path-ops.vercel.app",
    tags: ["Java", "TypeScript", "React", "Dijkstra", "Graph"],
    featured: true,
  },
  {
    name: "CI_CD",
    description:
      "Anime-themed 3D CI/CD learning hub: explore concepts at shrines, view live pipeline metrics, and inspect deployment architecture with quality gates and Lighthouse CI.",
    image: "/screenshots/CI_CD.png",
    github: "https://github.com/Rithikakalaimani/CI_CD",
    demo: "https://rithikakalaimani.github.io/CI_CD/",
    tags: ["Vite", "React", "Three.js", "GitHub Actions", "Lighthouse CI"],
    featured: true,
  },
  {
    name: "AdSync",
    description:
      "Full-stack influencer marketing platform with smart KNN-based matching, automated post scheduling via Celery and Meta Graph APIs, and campaign tracking with short URLs and analytics.",
    image: "/screenshots/architecture.jpg",
    github: "https://github.com/ckritk/AdSync",
    tags: ["Streamlit", "Flask", "Node.js", "MongoDB", "Celery", "Redis", "Meta Graph API"],
    featured: true,
  },
  {
    name: "QuantumMusic RecSys",
    description:
      "Quantum-assisted music recommendation pipeline combining RAG, QKNN (SWAP test), and Grover's algorithm for emotion-aware, context-driven song recommendations and cold-start discovery.",
    image: "/screenshots/swap.png",
    github: "https://github.com/Rithikakalaimani/QuantumMusic",
    tags: ["Python", "Qiskit", "LangChain", "FAISS", "Groq", "scikit-learn", "RAG"],
    featured: true,
  },
  {
    name: "Stitchly",
    description:
      "Full-stack app for tailors to manage customers, orders, billing, and design galleries. Photo-first garments, payment tracking, WhatsApp billing share, and mobile-optimized dashboard.",
    image: "/screenshots/stitch.png",
    github: "https://github.com/Rithikakalaimani/Stitchly",
    demo: "https://stitchinv.vercel.app/",
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    featured: true,
  },
];

const ProjectCard = ({
  project,
  reverse = false,
}: {
  project: (typeof projects)[0];
  reverse?: boolean;
}) => (
  <div
    className={`flex flex-col gap-6 ${reverse ? "xl:flex-row-reverse" : "xl:flex-row"}`}
  >
    <a
      className="w-full xl:w-1/2 h-auto relative group block"
      href={project.demo ?? project.github}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-[#112240]">
        <Image
          className="w-full h-full object-cover group-hover:scale-105 duration-300"
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 1280px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-textGreen/10 rounded-lg group-hover:bg-transparent duration-300" />
      </div>
    </a>
    <div
      className={`w-full xl:w-1/2 flex flex-col gap-6 items-end text-right z-10 ${reverse ? "xl:mr-0 xl:ml-10" : "xl:-ml-16"}`}
    >
      <div>
        <p className="font-titleFont text-textGreen text-sm tracking-wide">
          Featured Project
        </p>
        <h3 className="text-2xl font-bold">{project.name}</h3>
      </div>
      <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
        {project.description}
      </p>
      <ul className="text-xs md:text-sm font-titleFont tracking-wide flex flex-wrap gap-2 md:gap-3 justify-end text-textDark">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="text-2xl flex gap-4">
        <a
          className="hover:text-textGreen duration-300"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          title="View on GitHub"
        >
          <TbBrandGithub />
        </a>
        {project.demo && (
          <a
            className="hover:text-textGreen duration-300"
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            title="View live demo"
          >
            <HiOutlineExternalLink />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Projects" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
