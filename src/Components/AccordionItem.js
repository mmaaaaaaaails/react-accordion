import React, {useRef, useState} from 'react';

const AccordionItem = ({ faq }) => {

    const [clicked, setClicked] = useState('');
    const contentEl = useRef();

    const { question, answer } = faq;

    const handleToggle = () => {
        setClicked(!clicked);
    }

    return (
        <li className={`accordion_item ${clicked ? "active" : ""}`}>
            <button className="button" onClick={handleToggle}>
                {question}
                <span className="control">{clicked ? "-": "+"} </span>
            </button>
            <div
                ref={contentEl}
                className="answer_wrapper"
                style={
                    clicked
                        ? { height: contentEl.current.scrollHeight }
                        : { height: "0px" }
                }
            >
                <div className="answer">
                    {answer}
                </div>
            </div>
        </li>
    );
};

export default AccordionItem;
