import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";

interface NavigationBarProps {
  toggleSidebar: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ toggleSidebar }) => {
  return (
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#121212" }}>
      <Container className="d-flex justify-content-between">
        {/* Sidebar Toggle Button on the Left with Padding */}
        <Button
          variant="outline-light"
          onClick={toggleSidebar}
          style={{
            position: "absolute", // Absolute positioning to keep the button on the left
            left: "10px", // Adds padding to the left side of the button
            backgroundColor: "transparent", // Transparent background for the button
            border: "none", // Removes the border around the button
            color: "white", // White text for the button
            fontSize: "24px"
          }}
        >
          ☰
        </Button>

        {/* Centered Title */}
        <Navbar.Brand className="mx-auto">CodeCraft AI</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
