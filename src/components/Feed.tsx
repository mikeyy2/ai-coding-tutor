import React from "react";
import { useNavigate } from "react-router-dom";

export default function Feed() {
  const navigate = useNavigate();

  const handleLevelClick = (levelId: number) => {
    navigate(`/level/${levelId}`);
  };

  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)", // 3 columns wide
      gap: "16px",
      padding: "16px",
    },
    box: {
      backgroundColor: "#FFFFFF",
      padding: "50px",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer", // Make it clickable
    },
  };

  const descriptions = ["Beginner", "Intermediate", "Advanced", "Expert"];

  return (
    <div style={styles.container}>
      {Array.from({ length: 10 }, (_, index) => (
        <div
          key={index}
          style={styles.box}
          onClick={() => handleLevelClick(index + 1)}
        >
          Level {index + 1}
          <br />
          {descriptions[index % 4]}
        </div>
      ))}
    </div>
  );
}
