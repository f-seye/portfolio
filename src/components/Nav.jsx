import { useState, useEffect } from "react";
import { useWindowWidth } from "../utils/hooks";
import portfolio from "../utils/portfolio";

export default function Nav({ activeSection }) {
  const width = useWindowWidth();
  const isMobile = width < 700;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ferme le menu si on passe en desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  const navLinks = [
    { label: "Compétences", id: "skills" },
    { label: "Projets", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const px = width < 480 ? "1rem" : width < 900 ? "1.5rem" : "clamp(1.5rem, 5vw, 4rem)";
  const navHeight = isMobile ? "56px" : "64px";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.96)" : "#fff",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid #e8eaed",
        boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.08)" : "none",
        transition: "all 0.3s ease",
        padding: `0 ${px}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: navHeight,
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 700,
          fontSize: isMobile ? "0.9rem" : "1rem",
          color: "#1a1a1a",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #1a73e8, #4285f4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.65rem",
            fontWeight: 800,
            color: "#fff",
            flexShrink: 0,
          }}
        >
          FS
        </span>
        Fama SEYE
      </a>

      {/* Liens desktop */}
      {!isMobile && (
        <ul style={{ display: "flex", gap: "0.25rem", listStyle: "none", margin: 0, padding: 0 }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: isActive ? "#1a73e8" : "#5f6368",
                    textDecoration: "none",
                    padding: "0.4rem 0.9rem",
                    borderRadius: "20px",
                    background: isActive ? "#e8f0fe" : "transparent",
                    transition: "all 0.2s",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "#f1f3f4";
                      e.currentTarget.style.color = "#1a1a1a";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#5f6368";
                    }
                  }}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      )}


      {/* Bouton Menu pour mobile */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          style={{
            background: "#f1f3f4",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            color: "#5f6368",
            width: "36px",
            height: "36px",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      )}

      {/* Menu mobile déroulant */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "56px",
            left: 0,
            right: 0,
            background: "#fff",
            borderBottom: "1px solid #e8eaed",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            padding: `1rem ${px}`,
            display: "flex",
            flexDirection: "column",
            gap: "0.1rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "1rem",
                color: activeSection === link.id ? "#1a73e8" : "#3c4043",
                fontWeight: activeSection === link.id ? 600 : 400,
                textDecoration: "none",
                padding: "0.85rem 0.5rem",
                borderBottom: "1px solid #f1f3f4",
              }}
            >
              {link.label}
            </a>
          ))}
          
        </div>
      )}
    </nav>
  );
}
