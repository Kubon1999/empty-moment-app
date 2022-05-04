import { Button } from "react-bootstrap";

const Quiz = (props) => {
  return (
    <Button variant="primary" className="w-25 p-2">
      {props.title}
    </Button>
  );
};

export default Quiz;
