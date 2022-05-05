import questions from "./questions.json";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const QuizModule = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [textField, setTextField] = useState("");

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

  let new_id = id;
  new_id++;
  if (new_id >= count) {
    new_id = 0;
  }

  function nextQuestionHandler() {
    setShowAnswer(false);
    setTextField("");
  }

  return (
    <>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-center">
          <p>
            {title}, question No. {id}
          </p>
        </div>
        <div className="d-flex justify-content-center m-3">
          <h5>{question}</h5>
        </div>
        <div className="d-flex justify-content-center m-3">
          <textarea
            className="form-control"
            rows="5"
            value={textField}
            onChange={(e) => setTextField(e.target.value)}
          ></textarea>
        </div>

        <div className="d-flex justify-content-center m-3">
          {showAnswer ? (
            <Link
              to={{
                pathname: `/empty-moment-app/quiz/${title}/${new_id}`,
                state: { showAnswer: false },
              }}
              onClick={nextQuestionHandler}
            >
              <Button variant="primary">Next question</Button>
            </Link>
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
                <div className="d-flex justify-content-left m-3" key={key}>
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
