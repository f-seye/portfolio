import { useWindowWidth, useInView } from "../utils/hooks";
import { SectionLabel } from "./UI";
import portfolio from "../utils/portfolio";

export default function Skills() {
  const width = useWindowWidth();
  const [ref, visible] = useInView();

  const px = width < 480 ? "1.25rem" : width < 900 ? "2rem" : "clamp(2rem, 6vw, 6rem)";
  const gridColumns = width < 480 ? "1fr" : width < 768 ? "1fr 1fr" : "repeat(4, 1fr)";

  return (
    <section
      id="skills"
      style={{
        padding: `clamp(3.5rem, 8vw, 6rem) ${px}`,
        borderBottom: "1px solid #e8eaed",
        background: "#f8f9fa",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }} ref={ref}>
        <SectionLabel>Compétences</SectionLabel>

        <div style={{ display: "grid", gridTemplateColumns: gridColumns, gap: "1rem" }}>
          {portfolio.skills.map((category, index) => (
            <SkillCard
              key={category.category}
              category={category}
              index={index}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, index, visible }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "20px",
        padding: "1.5rem",
        border: "1px solid #e8eaed",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: `all 0.6s ease ${index * 0.1}s`,
      }}
    >
      {/* Barre de couleur en haut de la carte */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: category.color,
        }}
      />

      <p
        style={{
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 700,
          fontSize: "0.7rem",
          color: category.color,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "0.9rem",
        }}
      >
        {category.category}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {category.items.map((item) => (
          <span
            key={item}
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.78rem",
              color: "#3c4043",
              padding: "0.28rem 0.65rem",
              background: "#f1f3f4",
              border: "1px solid #e8eaed",
              borderRadius: "20px",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
