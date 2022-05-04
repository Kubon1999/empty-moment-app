import questions from "./questions.json";
import Quiz from "./Quiz";
import { Stack } from "react-bootstrap";

const QuizzesList = () => {
  return (
    <>
      <h1>Quizzes list:</h1>
      <div className="d-flex flex-column border">
        {questions.titles.map((elem, key) => {
          return (
            <div key={key} className="d-flex justify-content-center border m-3">
              <Quiz title={elem.title} questions={elem.questions}></Quiz>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default QuizzesList;
