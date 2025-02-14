import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { css } from "@codemirror/lang-css";
import { java } from "@codemirror/lang-java";
import { html } from "@codemirror/lang-html";
// import dracula from "@uiw/codemirror-themes/dracula";
import { Copy } from "lucide-react";
import { LanguageSupport } from "@codemirror/language";

// Define available language extensions with explicit typing
const languageExtensions: Record<string, () => LanguageSupport> = {
  javascript,
  python,
  css,
  java,
  html,
};

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>("// Write your code here...");
  const [language, setLanguage] =
    useState<keyof typeof languageExtensions>("javascript");
  const [output, setOutput] = useState<string>("");

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const handleRunCode = () => {
    if (language === "javascript") {
      try {
        let logs: string[] = [];
        const originalConsoleLog = console.log;

        // Override console.log to capture logs in our array
        console.log = (...args: any[]) => {
          logs.push(args.join(" "));
          originalConsoleLog(...args);
        };

        // Execute the code
        const result = eval(code);

        // Restore the original console.log
        console.log = originalConsoleLog;

        // Prepare the output string from logs and result
        let outputStr = logs.join("\n");
        if (result !== undefined) {
          outputStr += (outputStr ? "\n" : "") + result;
        }
        if (!outputStr) {
          outputStr = "Execution finished with no output.";
        }
        setOutput(outputStr);
      } catch (error: any) {
        setOutput(error.message);
      }
    } else {
      setOutput(`Execution not supported for language: ${language}`);
    }
  };

  return (
    <div className="p-4 rounded-xl shadow-lg bg-gray-900 text-white w-full max-w-2xl mx-auto">
      {/* Language Selector and Buttons */}
      <div className="flex justify-between items-center mb-2">
        <select
          value={language}
          onChange={(e) =>
            setLanguage(e.target.value as keyof typeof languageExtensions)
          }
          className="p-2 bg-gray-800 text-white rounded"
        >
          {Object.keys(languageExtensions).map((lang) => (
            <option key={lang} value={lang}>
              {lang.toUpperCase()}
            </option>
          ))}
        </select>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center p-2 border rounded bg-gray-700 hover:bg-gray-600"
          >
            <Copy size={18} className="mr-1" /> Copy
          </button>
          <button
            onClick={handleRunCode}
            className="flex items-center p-2 border rounded bg-green-700 hover:bg-green-600"
          >
            Run Code
          </button>
        </div>
      </div>

      {/* CodeMirror Editor wrapped in a container for left alignment */}
      <div className="text-left">
        <CodeMirror
          value={code}
          height="300px"
          extensions={[languageExtensions[language]()]}
          onChange={(value: string) => setCode(value)}
          theme={"dark"}
        />
      </div>

      {/* Inline style to force left alignment for CodeMirror's content */}
      <style>
        {`
          .cm-scroller {
            text-align: left !important;
          }
        `}
      </style>

      {/* Output Terminal */}
      <div className="mt-4">
        <h3 className="mb-2 text-lg font-semibold">Output:</h3>
        <div className="bg-gray-800 p-2 rounded text-green-400 font-mono h-40 overflow-auto">
          {output || "No output"}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
