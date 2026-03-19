
export function SectionLabel({ children }) {
  return (
    <p
      style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: "0.7rem",
        fontWeight: 700,
        letterSpacing: "0.1em",
        color: "#1a73e8",
        textTransform: "uppercase",
        marginBottom: "0.4rem",
      }}
    >
      {children}
    </p>
  );
}

export const sectionTitleStyle = {
  fontFamily: "DM Sans, sans-serif",
  fontWeight: 700,
  fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
  color: "#1a1a1a",
  margin: "0 0 2.25rem",
  letterSpacing: "-0.02em",
  lineHeight: 1.15,
};
