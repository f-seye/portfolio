import { useWindowWidth } from "../utils/hooks";
import portfolio from "../utils/portfolio";

export default function Footer() {
  const width = useWindowWidth();
  const px = width < 480 ? "1.25rem" : width < 900 ? "2rem" : "clamp(2rem, 6vw, 6rem)";

  return (
    <footer
      style={{
        padding: `1.5rem ${px}`,
        borderTop: "1px solid #e8eaed",
        background: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "0.75rem",
      }}
    >
      <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.8rem", color: "#80868b", margin: 0 }}>
        © {new Date().getFullYear()} Fama SEYE
      </p>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        {[
          ["GitHub", portfolio.github],
          ["LinkedIn", portfolio.linkedin],
        ].map(([label, url]) => (
          <a
            key={label}
            href={url}
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.8rem",
              color: "#80868b",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { e.target.style.color = "#1a73e8"; }}
            onMouseLeave={(e) => { e.target.style.color = "#80868b"; }}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
