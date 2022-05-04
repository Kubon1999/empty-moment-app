import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Quiz = (props) => {
  return (
    <Link to={`/empty-moment-app/quiz/${props.title}/0`}>
      <Button variant="primary">{props.title}</Button>
    </Link>
  );
};

export default Quiz;
