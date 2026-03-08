import { useState } from "react";
import { useWindowWidth, useInView } from "../utils/hooks";
import { SectionLabel } from "./UI";

const API_URL = import.meta.env.VITE_API_URL;

export default function Contact() {
  const width = useWindowWidth();
  const isMobile = width < 600;
  const [ref, visible] = useInView();
  
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "success" | "error" | "error_empty" | "error_email" | "error_message_short"
  const [loading, setLoading] = useState(false);
  
  const px = width < 480 ? "1.25rem" : width < 900 ? "2rem" : "clamp(2rem, 6vw, 6rem)";
  
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }
  
  async function handleSubmit() {
    if (!form.name || !form.email || !form.message) {
      setStatus("error_empty");
      return;
    }

    if (!isValidEmail(form.email)) {
      setStatus("error_email");
      return;
    }

    if (form.message.trim().length < 10) {
      setStatus("error_message_short");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        // Mapping des erreurs backend → statuts frontend
        if (data.error?.includes("Email invalide")) setStatus("error_email");
        else if (data.error?.includes("Message trop court")) setStatus("error_message_short");
        else if (data.error?.includes("champs")) setStatus("error_empty");
        else setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setLoading(false);
  }

  const inputStyle = {
    width: "100%",
    background: "#fff",
    border: "1px solid #dadce0",
    borderRadius: "12px",
    color: "#1a1a1a",
    fontFamily: "DM Sans, sans-serif",
    fontSize: isMobile ? "0.875rem" : "0.9rem",
    padding: "0.85rem 1rem",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
  };

  const errorFieldStyle = {
    borderColor: "#ea4335",
    boxShadow: "0 0 0 3px rgba(234,67,53,0.12)",
  };

  function onFocus(e) {
    e.target.style.borderColor = "#1a73e8";
    e.target.style.boxShadow = "0 0 0 3px rgba(26,115,232,0.12)";
  }

  function onBlur(e) {
    e.target.style.borderColor = "#dadce0";
    e.target.style.boxShadow = "none";
  }

  const statusMessages = {
    success:             { color: "#0f9d58", text: "✓ Message envoyé !" },
    error:               { color: "#ea4335", text: "✗ Erreur lors de l'envoi. Réessayez." },
    error_empty:         { color: "#ea4335", text: "✗ Veuillez remplir tous les champs." },
    error_email:         { color: "#ea4335", text: "✗ Adresse email invalide." },
    error_message_short: { color: "#ea4335", text: "✗ Message trop court (10 caractères minimum)." },
  };

  return (
    <section
      id="contact"
      style={{ padding: `clamp(3.5rem, 8vw, 6rem) ${px}`, background: "#f8f9fa" }}
    >
      <div style={{ maxWidth: "560px", margin: "0 auto" }} ref={ref}>
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(32px)",
            transition: "all 0.7s ease",
          }}
        >
          <SectionLabel>Contact</SectionLabel>

          <h2
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: width < 600 ? "1.6rem" : "clamp(1.8rem, 3.5vw, 2.4rem)",
              color: "#1a1a1a",
              margin: "0 0 0.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Travaillons <span style={{ color: "#1a73e8" }}>ensemble</span>
          </h2>

          <div
            style={{
              background: "#fff",
              border: "1px solid #e8eaed",
              borderRadius: "24px",
              padding: isMobile ? "1.5rem" : "2rem",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: "0.85rem",
                }}
              >
                <input
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  style={inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
                <input
                  placeholder="Votre email"
                  value={form.email}
                  onChange={(e) => {
                    updateField("email", e.target.value);
                    if (status === "error_email") setStatus(null);
                  }}
                  style={status === "error_email" ? { ...inputStyle, ...errorFieldStyle } : inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>

              <textarea
                placeholder="Votre message…"
                rows={5}
                value={form.message}
                onChange={(e) => {
                  updateField("message", e.target.value);
                  if (status === "error_message_short") setStatus(null);
                }}
                style={
                  status === "error_message_short"
                    ? { ...inputStyle, resize: "vertical", ...errorFieldStyle }
                    : { ...inputStyle, resize: "vertical" }
                }
                onFocus={onFocus}
                onBlur={onBlur}
              />

              {status && statusMessages[status] && (
                <p style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "0.875rem",
                  color: statusMessages[status].color,
                  margin: 0,
                }}>
                  {statusMessages[status].text}
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  alignSelf: isMobile ? "stretch" : "flex-start",
                  background: "#1a73e8",
                  color: "#fff",
                  border: "none",
                  borderRadius: "24px",
                  padding: "0.8rem 2rem",
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: loading ? "wait" : "pointer",
                  opacity: loading ? 0.7 : 1,
                  transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
                  boxShadow: "0 2px 8px rgba(26,115,232,0.3)",
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.background = "#1557b0";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#1a73e8";
                  e.currentTarget.style.transform = "none";
                }}
              >
                {loading ? "Envoi…" : "Envoyer →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}