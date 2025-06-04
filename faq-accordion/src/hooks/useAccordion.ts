import { useState } from 'react';
import { AccordionItem } from '../types/accordionItem';
import { AccordionProps } from '../types/accordionProps';

function useAccordion({ items, allowMultiple = false }: AccordionProps) {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        if (allowMultiple) {
            setOpenItems(prev =>
                prev.includes(index)
                    ? prev.filter(item => item !== index)
                    : [...prev, index]
            );
        } else {
            setOpenItems(prev =>
                prev.includes(index) ? [] : [index]
            );
        }
    };

    return {
        openItems,
        toggleItem,
    }
}

export default useAccordion;