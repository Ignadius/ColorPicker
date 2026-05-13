import { useState } from "react";
import "./index.css";

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState({ hex: null, name: null });
  const [focusedIndex, setFocusedIndex] = useState(null);
  //The selectedColor state is an object with a hex and name prop, each set to null.
  // The focusedIndex will be an integer representing the index of the colors currently selected.

  const colors = [
    { name: "Red", hex: "#FF0000" },
    { name: "Green", hex: "#00FF00" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "Magenta", hex: "#FF00FF" },
  ];

  function handleClick(color) {
    // Save the clicked color into state
    setSelectedColor(color);
  }

  function handleMouseEnter(hex) {
    // Temporarily show the hovered color
    setSelectedColor({
      hex: hex,
      name: null,
    });
  }

  function handleMouseLeave() {
    // Clear the selected color when mouse leaves
    setSelectedColor({
      hex: null,
      name: null,
    });
  }

  function handleFocus(index) {
    // Track which color item is focused
    setFocusedIndex(index);
  }

  function handleBlur() {
    // Remove focus state
    setFocusedIndex(null);
  }

  function handleKeyDown(e, index) {
    // If Enter or Space is pressed
    if (e.key === "Enter" || e.key === " ") {
      // Select the focused color
      setSelectedColor(colors[index]);
    }
  }
  return (
    <div className="color-picker">
      <h1>Color Picker</h1>
      <div className="color-list">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-item ${focusedIndex === index ? "focused" : ""}`}
            style={{ backgroundColor: color.hex }}
            onClick={() => handleClick(color)}
            onMouseEnter={() => handleMouseEnter(color.hex)}
            onMouseLeave={handleMouseLeave}
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={0}
          >
            {selectedColor.hex === color.hex && (
              <span className="color-code">
                {selectedColor.name || color.hex}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
