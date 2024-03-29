import React, { useState } from 'react';
import Question from './components/Question';

function App() {
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);

    const questions = [
        {
            texteQuestion: "Quelle est la capitale de la France ?",
            reponses: ["Paris", "Lyon", "Marseille"],
            reponseCorrecte: "Paris",
        },
        {
            texteQuestion: "Quelle est la capitale de l'Angleterre' ?",
            reponses: ["Paris", "Londres", "Madrid"],
            reponseCorrecte: "Londres",
        },
        {
            texteQuestion: "Quelle est la capitale de l'Espagne' ?",
            reponses: ["Londres", "Lyon", "Madrid"],
            reponseCorrecte: "Madrid",
        }
    ];

    const questionActuelle = questions[questionIndex];

    const verifierReponse = (reponse) => {
        if (reponse === questionActuelle.reponseCorrecte) {
            setScore(score + 1);
            console.log("Bonne réponse !");
        } else {
            console.log("Mauvaise réponse. Essaye encore !");
        }

        if (questionIndex < questions.length - 1) {
            setQuestionIndex(questionIndex + 1);
        } else {
            console.log(`Le quiz est terminé ! Ton score est de ${score}/${questions.length}.`)
        }
    }

    return (
        <div>
            <Question texteQuestion={questionActuelle.texteQuestion}
                reponses={questionActuelle.reponses}
                verifierReponse={verifierReponse} />
        </div>
    )
}

export default App
