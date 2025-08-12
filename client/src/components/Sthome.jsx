// File: src/pages/Sthome.jsx
import React from "react";

const Sthome = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Student Home</h1>
      <p style={styles.text}>
        This is the homepage for students. Once deployed, this will be live on Vercel.
      </p>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#f8f9fa",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "#333",
  },
  text: {
    fontSize: "1.2rem",
    color: "#666",
  },
};

export default Sthome;
