import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "./logo.png";
import "./App.css";
import QuizzesList from "./QuizzesList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizModule from "./QuizModule";
import Quiz from "./Quiz";

function App() {
  return (
    <div className="App">
      <Navbar variant="light" expand="sm" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} className="logo" />
            Empty Time App
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <NavDropdown title="Quizes" id="basic-nav-dropdown">
                <NavDropdown.Item href="/quiz/react1/0">
                  React #1
                </NavDropdown.Item>
                <NavDropdown.Item href="/quiz/react2/0">
                  React #2
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/adv_javascript">
                  Advanced JavaScript
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="content">
        <div className="border rounded m-3 p-3">
          <Router>
            <Routes>
              <Route path="/" element={<QuizzesList />}></Route>
              <Route path="/quiz/:title/:id" element={<QuizModule />}></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
