import questions from "./questions.json";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";

const QuizModule = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const { title, id } = useParams();
  let question = "not found";
  let count,
    answers = 0;
  questions.titles.forEach((titleElement) => {
    if (titleElement.title == title) {
      question = titleElement.questions[id].question;
      answers = titleElement.questions[id].answers;
      count = Object.keys(titleElement.questions).length;
    }
  });

  const answerSubmitted = () => {
    setShowAnswer(true);
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let new_id = 0;
  while (new_id == id) {
    new_id = getRandomInt(0, count - 1);
  }

  return (
    <>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-center">
          <p>
            {title}, question nr: {id}
          </p>
        </div>
        <div className="d-flex justify-content-center m-3">
          <h5>{question}</h5>
        </div>
        <div className="d-flex justify-content-center m-3">
          <textarea className="form-control" rows="5"></textarea>
        </div>

        <div className="d-flex justify-content-center m-3">
          {showAnswer ? (
            <Button variant="primary" href={`/quiz/${title}/${new_id}`}>
              Next question
            </Button>
          ) : (
            <Button variant="primary" onClick={answerSubmitted}>
              Submit
            </Button>
          )}
        </div>
        <div className="d-flex justify-content-center m-3">
          {showAnswer ? <p>Correct answer:</p> : null}
        </div>

        {showAnswer
          ? answers.map((elem, key) => {
              return (
                <div className="d-flex justify-content-left m-3">
                  <p> • {elem.answer}</p>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default QuizModule;
