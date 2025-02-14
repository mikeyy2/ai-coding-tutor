import { Code } from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";
import CodeEditor from "../components/CodeEditor";

const LevelPage: React.FC = () => {
  const { levelId } = useParams();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Level {levelId}</h1>
      <p>
        Welcome to Level {levelId}! This is where the content for this level
        will be displayed.
      </p>
      <div>
        <CodeEditor />
      </div>
    </div>
  );
};

export default LevelPage;
