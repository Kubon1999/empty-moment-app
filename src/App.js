import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "./logo.png";
import "./App.css";
import QuizzesList from "./QuizzesList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizModule from "./QuizModule";
import Quiz from "./Quiz";
import questions from "./questions.json";

function App() {
  //get the titles from quizes and apply them to the navbar categories
  const titles = [];
  questions.titles.forEach((titleElement) => {
    titles.push(titleElement.title);
  });

  return (
    <div className="App">
      <Navbar variant="light" expand="sm" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/empty-moment-app/">
            <img src={logo} className="logo" />
            Empty Time App
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <NavDropdown title="Quizzes" id="basic-nav-dropdown">
                {titles.map((elem, key) => {
                  return (
                    <NavDropdown.Item
                      href={`/empty-moment-app/quiz/${elem}/0`}
                      key={key}
                    >
                      {elem}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="content">
        <div className="border rounded m-3 p-3">
          <Router>
            <Routes>
              <Route
                path="/empty-moment-app/"
                element={<QuizzesList />}
              ></Route>
              <Route
                path="/empty-moment-app/quiz/:title/:id"
                element={<QuizModule />}
              ></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
