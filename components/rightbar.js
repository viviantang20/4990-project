import React, { useState } from "react";

const Rightbar = ({ label, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const containerStyle = {
    width: isCollapsed ? "250px" : "40%", // Adjust the collapsed width as needed
    transition: "width 0.5s ease-out",
    position: "relative", // Keep for the button's absolute positioning
    overflow: "hidden", // Hide overflow when collapsed
    display: "flex",
    flexDirection: "column",
    flexShrink: 0, // Prevent flexbox from shrinking it automatically
  };

  const contentStyle = {
    transform: isCollapsed ? "scaleX(0)" : "scaleX(1)",
    transformOrigin: "right center",
    transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
    opacity: isCollapsed ? 0 : 1,
    overflow: "hidden",
    whiteSpace: isCollapsed ? "nowrap" : "normal",
    pointerEvents: isCollapsed ? "none" : "auto", // Disable pointer events when collapsed
  };

  const buttonStyle = {
    position: "absolute", // Position it relative to its nearest positioned ancestor (container)
    right: 20, // Align to the right
    top: 30,
    // Middle of the container
    transform: "translateY(-50%)", // Center it vertically
    zIndex: 10, // Ensure it's above the content
  };

  return (
    <div
      style={containerStyle}
      className="flex flex-col overflow-hidden pt-16 p-7 pr-20"
    >
      <div style={contentStyle}>
        <div>{children}</div>
      </div>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={buttonStyle}
        className="px-4 py-2 bg-green-700 bg-opacity-25 text-slate-300 rounded focus:outline-none"
      >
        {isCollapsed ? "Show " : "Hide "} {"Quiz & Discussion"}
      </button>
    </div>
  );
};

export default Rightbar;
