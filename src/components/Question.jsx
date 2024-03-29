import React from 'react';

function Question({texteQuestion, reponses, verifierReponse}) {
    return (
        <div>
            <h2>{texteQuestion}</h2>
            {reponses.map((reponse, index) => (
                <button key={index} onClick={() => verifierReponse(reponse)}>
                    {reponse}
                </button>
            ))}
        </div>
    )
}

export default Question;