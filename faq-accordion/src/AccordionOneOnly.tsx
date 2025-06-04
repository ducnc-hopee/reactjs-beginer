import React, { useState } from "react";
import "./Accordion.css";
import { AccordionItem } from "./types/accordionItem";

type AccordionHeaderProps = {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({ title, isOpen, onToggle, children }) => {
  return (
    <section>
      <h3 onClick={onToggle}>{title}</h3>
      {isOpen && <p>{children}</p>}
    </section>
  );
};

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleOnToggle = (index: number) => {
    if (index === expandedIndex) {
      // If the user clicked the already open header,
      // close it
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };
  return (
    <div>
      {items.map((item, index) => (
        <AccordionHeader
          key={item.title}
          title={item.title}
          isOpen={index === expandedIndex}
          onToggle={() => handleOnToggle(index)}
        >
          {item.content}
        </AccordionHeader>
      ))}
    </div>
  );
};

export default Accordion; 