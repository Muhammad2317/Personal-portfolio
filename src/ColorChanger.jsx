import React, { useState } from "react";
import "./ColorChanger.scss";

function ColorChanger({ changeColor }) {
  const [color, setColor] = useState("green");

  const colors = [
    { name: "--red-color", color: "#e74c3c" }, // Red
    { name: "--yellow-color", color: "#f1c40f" }, // Yellow
    { name: "--blue-color", color: "#3498db" }, // Blue
    { name: "--green-color", color: "#2ecc71" }, // Green
  ];

  return (
    <div className="color-changer">
      {colors.map(({ name, color }) => (
        <button
          key={name}
          className="color-button"
          style={{ backgroundColor: color }}
          onClick={() => setColor(changeColor)}
        />
      ))}
    </div>
  );
}

export default ColorChanger;
