import questions from './questions.json'
import Quiz from './Quiz';

const QuizzesList  = () => {

    return (
        <>
        <h1>here are the quizes</h1>
        {questions.titles.map((elem, key) => {
          return (
            <Quiz key={key} title={elem.title} questions={elem.questions}>
            </Quiz>
          );
        })}
        </>
    )
}

export default QuizzesList