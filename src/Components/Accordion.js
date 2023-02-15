import React from 'react';
import AccordionItem from "./AccordionItem";
import { faqs } from './data'

const Accordion = () => {
    return (
        <div>
            <ul className="accordion">
                {faqs.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        faq={faq}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Accordion;
