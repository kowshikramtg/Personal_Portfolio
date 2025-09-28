import React, { useEffect, useRef, useState } from "react";
import "./ServiceSearch.css";

const SearchHighlight = () => {
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Remove previous highlights
    const prevHighlights = document.querySelectorAll(".highlight");
    prevHighlights.forEach((h) => {
      const parent = h.parentNode;
      parent.replaceChild(document.createTextNode(h.textContent), h);
      parent.normalize();
    });

    if (!searchTerm) return;

    const regex = new RegExp(`(${searchTerm})`, "gi"); // g- global, i- case-Insensetive
    let firstMatch = null;

    const highlightNode = (node) => {
      if (node.nodeType === 3) {
        const match = node.data.match(regex);
        if (match) {
          const span = document.createElement("span");
          span.className = "highlight";
          span.innerHTML = node.data.replace(regex, '<mark>$1</mark>');
          node.parentNode.replaceChild(span, node);
          if (!firstMatch) firstMatch = span.querySelector("mark");
        }
      } else if (
        node.nodeType === 1 &&
        node.nodeName !== "SCRIPT" &&
        node.nodeName !== "STYLE" &&
        !["INPUT", "BUTTON", "TEXTAREA"].includes(node.nodeName)
      ) {
        Array.from(node.childNodes).forEach(highlightNode);
      }
    };

    highlightNode(document.body);

    if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [searchTerm]);

  return (
    <div className="searchInput">
      <label htmlFor="searchIn">Services</label>
      <input
        id="searchIn"
        type="text"
        className="serviceSearch"
        placeholder="ex. Web-Design, Web-Dev..."
        ref={inputRef}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchHighlight;
