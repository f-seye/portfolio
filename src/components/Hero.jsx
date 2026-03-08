import { useState, useEffect } from "react";
import { useWindowWidth } from "../utils/hooks";
import portfolio from "../utils/portfolio";

export default function Hero() {
  const width = useWindowWidth();
  const isMobile = width < 700;
  const [mounted, setMounted] = useState(false);

  // Petit délai pour déclencher l'animation d'entrée
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navHeight = isMobile ? 56 : 64;
  const px = width < 480 ? "1.25rem" : width < 900 ? "2rem" : "clamp(2rem, 6vw, 5rem)";

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #f8faff 0%, #eef4ff 55%, #f0fdf4 100%)",
        borderBottom: "1px solid #e8eaed",
      }}
    >
      {/* Cercles décoratifs en arrière-plan */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            top: "-100px",
            right: "-100px",
            background: "radial-gradient(circle, rgba(26,115,232,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            bottom: "-80px",
            left: "-80px",
            background: "radial-gradient(circle, rgba(15,157,88,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(26,115,232,0.1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: `${navHeight + 36}px ${px} 3rem`,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1.6fr",
          gap: isMobile ? "2rem" : "5rem",
          alignItems: "center",
        }}
      >
        {/* Colonne gauche : photo + infos */}
        <ProfileCard isMobile={isMobile} mounted={mounted} />

        {/* Colonne droite : texte principal */}
        <HeroText isMobile={isMobile} mounted={mounted} width={width} />
      </div>
    </section>
  );
}

function ProfileCard({ isMobile, mounted }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: isMobile ? "center" : "flex-start",
        gap: "1rem",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "none" : "translateY(20px)",
        transition: "all 0.7s ease 0.1s",
      }}
    >
      {/* Photo de profil */}
      <div style={{ position: "relative", width: "120px", height: "120px" }}>
        <div
          style={{
            position: "absolute",
            inset: "-3px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #1a73e8, #4285f4, #0f9d58)",
          }}
        >
          <div
            style={{
              width: "calc(100% - 6px)",
              height: "calc(100% - 6px)",
              borderRadius: "50%",
              background: "#f0f4ff",
              margin: "3px",
            }}
          />
        </div>
        <img
          src={`${import.meta.env.BASE_URL}fama.PNG`}
          alt="Fama SEYE"
          style={{
            position: "absolute",
            inset: "3px",
            width: "calc(100% - 6px)",
            height: "calc(100% - 6px)",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #fff",
          }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextSibling.style.display = "flex";
          }}
        />
        {/* Fallback si la photo ne charge pas */}
        <div
          style={{
            display: "none",
            position: "absolute",
            inset: "3px",
            width: "calc(100% - 6px)",
            height: "calc(100% - 6px)",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #1a73e8, #4285f4)",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.5rem",
          }}
        >
          👩‍💻
        </div>
      </div>

      {/* Nom et localisation */}
      <div style={{ textAlign: isMobile ? "center" : "left" }}>
        <p style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#1a1a1a", margin: "0 0 0.2rem" }}>
          Fama SEYE
        </p>
        <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem", color: "#5f6368", margin: 0 }}>
          L3 Informatique · Université de Bordeaux
        </p>
      </div>

      {/* Infos rapides */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", width: "100%" }}>
        {[
          ["📍", "Bordeaux, France"],
          ["✉️", portfolio.email],
        ].map(([icon, value]) => (
          <div key={value} style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <span style={{ fontSize: "0.8rem", flexShrink: 0 }}>{icon}</span>
            <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.82rem", color: "#5f6368", wordBreak: "break-all" }}>
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* Liens GitHub / LinkedIn */}
      <div style={{ display: "flex", gap: "0.5rem", width: "100%" }}>
        {[
          ["GitHub", portfolio.github],
          ["LinkedIn", portfolio.linkedin],
        ].map(([label, url]) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noreferrer"
            style={{
              flex: 1,
              textAlign: "center",
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#1a73e8",
              textDecoration: "none",
              padding: "0.55rem",
              background: "#e8f0fe",
              border: "1px solid #c5d8fd",
              borderRadius: "12px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#d2e3fc"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#e8f0fe"; }}
          >
            {label} ↗
          </a>
        ))}
      </div>
    </div>
  );
}

function HeroText({ isMobile, mounted, width }) {
  return (
    <div
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "none" : "translateY(20px)",
        transition: "all 0.7s ease 0.25s",
        textAlign: isMobile ? "center" : "left",
      }}
    >
      {/* Badge disponibilité */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "#e8f5e9",
          border: "1px solid #a8d5b5",
          borderRadius: "100px",
          padding: "0.3rem 0.9rem",
          marginBottom: "1.25rem",
        }}
      >
        <span
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "#0f9d58",
            display: "inline-block",
            boxShadow: "0 0 6px #0f9d58",
            flexShrink: 0,
          }}
        />
        <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.78rem", color: "#137333", fontWeight: 500 }}>
          Disponible · Recherche alternance / stage
        </span>
      </div>

      <p
        style={{
          fontFamily: "DM Sans, sans-serif",
          fontSize: isMobile ? "0.95rem" : "1.05rem",
          color: "#3c4043",
          lineHeight: 1.9,
          marginBottom: "2rem",
          fontWeight: 400,
          letterSpacing: "0.01em",
          borderLeft: isMobile ? "none" : "3px solid #1a73e8",
          paddingLeft: isMobile ? 0 : "1.2rem",
        }}
      >
        {portfolio.about}
      </p>

      {/* Bouton voir mes projets */}
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          flexWrap: "wrap",
          justifyContent: isMobile ? "center" : "flex-start",
        }}
      >
  
      <a href="#projects"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "#1a73e8",
          color: "#fff",
          padding: "0.7rem 1.6rem",
          borderRadius: "24px",
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 600,
          fontSize: "0.9rem",
          textDecoration: "none",
          transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
          boxShadow: "0 2px 8px rgba(26,115,232,0.3)",
        }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#1557b0";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#1a73e8";
            e.currentTarget.style.transform = "none";
          }}
      >
          Voir mes projets →
      </a>
      </div>
  </div>
  );
}
