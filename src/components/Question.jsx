import React from 'react';

function Question({texteQuestion, reponses, verifierReponse}) {
    return (
        <div>
            <h2>{texteQuestion}</h2>
            {reponses.map((reponse, index) => (
                <button key={index} onClick={() => verifierReponse(reponse)} type="button" class="btn btn-primary">
                    {reponse}
                </button>
            ))}
        </div>
    )
}

export default Question;