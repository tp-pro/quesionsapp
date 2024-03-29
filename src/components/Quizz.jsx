import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question';

const Quizz = () => {
    const navigate = useNavigate();
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]); // Initialisé comme un tableau vide
    const [questionIndex, setQuestionIndex] = useState(0); // Ajouté pour suivre l'index de la question actuelle
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=5&category=tv_cinema&difficulty=facile')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur réseau');
                }  
                return response.json();
            })
            .then(data => {
                setQuestions(data.quizzes); // Supposons que 'data' est un tableau de questions
                setLoading(false);    
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
                console.error("Erreur lors du chargement des questions :", error);
            });
    }, []); // Le tableau vide assure que la requête est effectuée une seule fois

    if (loading) return <p>Chargement des questions...</p>;
    if (error) return <p>Erreur : {error}</p>;

    const questionActuelle = questions[questionIndex]; // Récupère la question actuelle en utilisant questionIndex

  const verifierReponse = (reponse) => {
    if (reponse === questionActuelle.answer) {
      // Bonne réponse, on passe à la question suivante ou au résultat
      console.log("Bonne réponse !");
      const nextIndex = questionIndex + 1;
      if (nextIndex < questions.length) {
        setQuestionIndex(nextIndex);
        setScore(score + 1); // Incrémente le score pour une bonne réponse
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
         {questions.length > 0 && (
            <Question
                key={questionActuelle._id}
                texteQuestion={questionActuelle.question}
                reponses={[questionActuelle.answer, ...questionActuelle.badAnswers]}
                verifierReponse={verifierReponse}
            />
        )}
    </div>
  );
};

export default Quizz;
