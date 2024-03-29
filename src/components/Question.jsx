import React from 'react';

function Question(props) {
    return (
        <div>
            <h2>{props.texteQuestion}</h2>
            {props.reponses.map((reponse, index) => (
                <button key={index}>{reponse}</button>
            ))}
        </div>
    )
}

export default Question;