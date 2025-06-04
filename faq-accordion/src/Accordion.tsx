import React, { useState } from "react";
import "./Accordion.css";
import { AccordionItem } from "./types/accordionItem";
import { AccordionProps } from "./types/accordionProps";
import  useAccordion  from "./hooks/useAccordion";

const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {

  const { openItems, toggleItem } = useAccordion({ items, allowMultiple });

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openItems.includes(index);
        return (
          <div key={index} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleItem(index)}
            >
              <h3 className="accordion-title">{item.title}</h3>
              <svg
                className={`accordion-icon ${isOpen ? "open" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            <div className={`accordion-content ${isOpen ? "open" : ""}`}>
              <p className="accordion-text">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion; 