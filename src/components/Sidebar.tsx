import React from "react";
import { Nav } from "react-bootstrap";

interface SidebarProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar, toggleSidebar }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: showSidebar ? 0 : "-250px", // Sidebar slides in/out
        width: "250px",
        height: "100vh",
        backgroundColor: "#121212", // Dark background
        transition: "left 0.3s ease", // Smooth transition for sliding in/out
        zIndex: 1000,
        padding: "10px",
      }}
    >
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        style={{
          position: "absolute",
          top: "10px", // Positioned at the top-left corner of the sidebar
          left: "10px", // Padding on the left of the button
          background: "transparent",
          border: "none",
          color: "white", // Consistent text color
          fontSize: "24px",
        }}
      >
        ☰
      </button>

      <h4 style={{ color: "white", marginTop: "40px" }}>Languages</h4>
      <Nav className="flex-column">
        <Nav.Link 
          href="#Python" 
          style={{ 
            color: "white", 
            backgroundColor: "#BB86FC", 
            padding: "10px", 
            borderRadius: "5px",
            marginBottom: "5px",
            textAlign: "center"
          }}
        >
          Python
        </Nav.Link>
        <Nav.Link 
          href="#Java" 
          style={{ 
            color: "white", 
            backgroundColor: "#BB86FC", 
            padding: "10px", 
            borderRadius: "5px",
            marginBottom: "5px",
            textAlign: "center"
          }}
        >
          Java
        </Nav.Link>
        <Nav.Link 
          href="#JavaScript" 
          style={{ 
            color: "white", 
            backgroundColor: "#BB86FC", 
            padding: "10px", 
            borderRadius: "5px",
            textAlign: "center"
          }}
        >
          JavaScript
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
