import React, { useEffect, useRef, useState } from "react";
import "./ServiceSearch.css";

const SearchHighlight = () => {
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // Remove previous highlights
    const prevHighlights = document.querySelectorAll(".highlight");
    prevHighlights.forEach((h) => {
      const parent = h.parentNode;
      parent.replaceChild(document.createTextNode(h.textContent), h);
      parent.normalize();
    });

    if (!searchTerm) {
      setMatches([]);
      setCurrentMatchIndex(0);
      return;
    }

    // using regex texhnique, to find the element(searchTerm) typed in input 
    const regex = new RegExp(`(${searchTerm})`, "gi"); // g- global, i- case-Insensetive
    const allMatches = [];

    const highlightNode = (node) => {
      if (node.nodeType === 3) {
        const match = node.data.match(regex);
        if (match) {
          const span = document.createElement("span");
          span.className = "highlight";
          span.innerHTML = node.data.replace(regex, '<mark>$1</mark>');
          node.parentNode.replaceChild(span, node);
          const marks = span.querySelectorAll("mark");
          marks.forEach((m) => allMatches.push(m));
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

    // Find the mainContent div to search only within dashboard
    const mainContent = document.querySelector(".mainContent");
    if (mainContent) {
      highlightNode(mainContent);
    } else {
      highlightNode(document.body);
    }

    setMatches(allMatches);
    setCurrentMatchIndex(0);

    if (allMatches.length > 0) {
      scrollToMatch(allMatches[0]);
    }
  }, [searchTerm]);

  const scrollToMatch = (element) => {
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && matches.length > 0) {
      e.preventDefault();
      const nextIndex = (currentMatchIndex + 1) % matches.length;
      setCurrentMatchIndex(nextIndex);
      scrollToMatch(matches[nextIndex]);
    }
  };

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
        onKeyDown={handleKeyDown}
      />
      {matches.length > 0 && (
        <span className="match-counter">{currentMatchIndex + 1} / {matches.length}</span>
      )}
    </div>
  );
};

export default SearchHighlight;
