import { useState } from "react";
import { useWindowWidth, useInView } from "../utils/hooks";
import { SectionLabel } from "./UI";
import portfolio from "../utils/portfolio";

export default function Projects() {
  const width = useWindowWidth();
  const [ref, visible] = useInView();

  const px = width < 480 ? "1.25rem" : width < 900 ? "2rem" : "clamp(2rem, 6vw, 6rem)";
  const gridColumns = width < 640 ? "1fr" : "repeat(auto-fill, minmax(300px, 1fr))";

  return (
    <section
      id="projects"
      style={{
        padding: `clamp(3.5rem, 8vw, 6rem) ${px}`,
        borderBottom: "1px solid #e8eaed",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }} ref={ref}>
        <SectionLabel>Projets</SectionLabel>

        <div style={{ display: "grid", gridTemplateColumns: gridColumns, gap: "1.25rem" }}>
          {portfolio.projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#fafbff" : "#fff",
        border: `1px solid ${hovered ? "#c5d8fd" : "#e8eaed"}`,
        borderRadius: "20px",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        opacity: visible ? 1 : 0,
        transform: visible ? (hovered ? "translateY(-3px)" : "none") : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.3s ease, background 0.2s, border-color 0.2s`,
        boxShadow: hovered ? "0 4px 20px rgba(26,115,232,0.1)" : "0 1px 4px rgba(0,0,0,0.06)",
      }}
    >
      {/* En-tête : catégorie + lien GitHub */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.72rem",
            fontWeight: 600,
            color: project.accent,
            background: `${project.accent}14`,
            border: `1px solid ${project.accent}30`,
            borderRadius: "20px",
            padding: "0.25rem 0.7rem",
          }}
        >
          {project.category}
        </span>
        <a
          href={project.github}
          style={{
            color: "#80868b",
            fontSize: "1rem",
            textDecoration: "none",
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            background: hovered ? "#e8f0fe" : "#f1f3f4",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#1a73e8"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "#80868b"; }}
        >
          ↗
        </a>
      </div>

      {/* Titre et description */}
      <div>
        <h3
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 600,
            fontSize: "1.05rem",
            color: "#1a1a1a",
            margin: "0 0 0.5rem",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.875rem",
            color: "#5f6368",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {project.description}
        </p>
      </div>

      {/* Technologies utilisées */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginTop: "auto" }}>
        {project.tech.map((tech) => (
          <span
            key={tech}
            style={{
              fontFamily: "DM Sans, monospace",
              fontSize: "0.75rem",
              color: "#5f6368",
              padding: "0.25rem 0.65rem",
              background: "#f1f3f4",
              border: "1px solid #e8eaed",
              borderRadius: "6px",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
