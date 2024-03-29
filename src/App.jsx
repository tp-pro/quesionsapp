import React from 'react';
import Question from './components/Question';

function App() {
  const questionExemple = {
      texteQuestion: "Quelle est la capitale de la France ?",
      reponses: ["Paris", "Lyon", "Marseille"]
  };

  return (
    <div>
        <Question texteQuestion={questionExemple.texteQuestion} reponses={questionExemple.reponses} />
    </div>
  )
}

export default App
