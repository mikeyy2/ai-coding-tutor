import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div>
      {" "}
      {/* Navbar with Sidebar Toggle */}
      <NavigationBar toggleSidebar={() => setShowSidebar(!showSidebar)} />
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <Sidebar
          showSidebar={showSidebar}
          toggleSidebar={() => setShowSidebar(!showSidebar)}
        />

        {/* Main Content */}
        <div
          style={{
            marginLeft: showSidebar ? "250px" : "0", // Adjust content width based on sidebar visibility
            transition: "margin-left 0.3s ease",
            padding: "20px",
            flexGrow: 1,
          }}
        >
          <Container style={{}}>{<Feed />}</Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
