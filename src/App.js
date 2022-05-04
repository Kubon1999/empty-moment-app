import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "./logo.png";
import "./App.css";
import QuizzesList from "./QuizzesList";

function App() {
  return (
    <div className="App">
      <Navbar variant="light" sticky="top" expand="sm" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="logo" />
            Empty Time App
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <NavDropdown title="Quizes" id="basic-nav-dropdown">
                <NavDropdown.Item href="/react1">React #1</NavDropdown.Item>
                <NavDropdown.Item href="/react2">React #2</NavDropdown.Item>
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
          <QuizzesList></QuizzesList>
        </div>
      </div>
    </div>
  );
}

export default App;
