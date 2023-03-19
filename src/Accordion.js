import React, { useState } from 'react'

const Accordion = ({question, answer}) => {
    const [text, setText] = useState(false);

    const showText = () => {
        setText(!text);
    }
  return (
    <div className="accordion-card">
        <div className="question">
            <h3>{question}</h3>
            <button onClick={showText}>{text ? <p>-</p> : <p>+</p> }</button>
        </div>
        <div className="answer">
            {text && <p>{answer}</p>}
        </div>
    </div>
  )
}

export default Accordion
