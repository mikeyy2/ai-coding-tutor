import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { FaCog, FaUserCircle } from "react-icons/fa";
import styles from "./Sidebar.module.css"; // Import the CSS module

interface SidebarProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar, toggleSidebar }) => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link); // Set active link on click
  };

  return (
    <div
      className={styles.sidebar} // Apply sidebar styles from CSS module
      style={{
        left: showSidebar ? 0 : "-250px", // Sidebar slides in/out
      }}
    >
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={styles.sidebarButton} // Apply sidebar button styles from CSS module
      >
        ☰
      </button>

      {/* Top Right Icons (Settings and Profile) */}
      <div className={styles.topRightIcons}>
        <FaCog color="white" size={24} />
        <FaUserCircle color="white" size={24} />
      </div>

      {/* Sidebar Content */}
      <h4 style={{ color: "white", marginTop: "40px" }}>Languages</h4>
      <Nav className="flex-column">
        <Nav.Link
          href="#Python"
          className={`${styles.sidebarNavLink} ${
            activeLink === "Python" ? styles.sidebarNavLinkActive : ""
          }`}
          onClick={() => handleLinkClick("Python")}
        >
          Python
        </Nav.Link>
        <Nav.Link
          href="#Java"
          className={`${styles.sidebarNavLink} ${
            activeLink === "Java" ? styles.sidebarNavLinkActive : ""
          }`}
          onClick={() => handleLinkClick("Java")}
        >
          Java
        </Nav.Link>
        <Nav.Link
          href="#JavaScript"
          className={`${styles.sidebarNavLink} ${
            activeLink === "JavaScript" ? styles.sidebarNavLinkActive : ""
          }`}
          onClick={() => handleLinkClick("JavaScript")}
        >
          JavaScript
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
  