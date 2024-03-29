import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question';

const Quizz = () => {
    const navigate = useNavigate();
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);

    const questions = [
        {
            texteQuestion: "Quelle est la capitale de la France ?",
            reponses: ["Paris", "Lyon", "Marseille"],
            reponseCorrecte: "Paris",
        },
        {
            texteQuestion: "Quelle est la capitale de l'Angleterre ?",
            reponses: ["Paris", "Londres", "Madrid"],
            reponseCorrecte: "Londres",
        },
        {
            texteQuestion: "Quelle est la capitale de l'Espagne ?",
            reponses: ["Londres", "Lyon", "Madrid"],
            reponseCorrecte: "Madrid",
        }
    ];

    const questionActuelle = questions[questionIndex];

  const verifierReponse = (reponse) => {
    if (reponse === questionActuelle.reponseCorrecte) {
      // Bonne réponse, on passe à la question suivante ou au résultat
      console.log("Bonne réponse !");
      const nextIndex = questionIndex + 1;
      if (nextIndex < questions.length) {
        setQuestionIndex(nextIndex);
      } else {
        // Quizz terminé, redirection vers la page de résultat
        console.log(`Le quiz est terminé ! Ton score est de ${score}/${questions.length}.`)
        navigate('/resultat');
      }
    } else {
      // Mauvaise réponse, afficher une indication ou message si nécessaire
      console.log("Mauvaise réponse. Essaye encore !");
    }
  };

  return (
    <div>
      <Question
        texteQuestion={questionActuelle.texteQuestion}
        reponses={questionActuelle.reponses}
        verifierReponse={verifierReponse}
      />
      {/* Autres éléments UI si nécessaire */}
    </div>
  );
};

export default Quizz;
