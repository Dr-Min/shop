import logo from "./logo.svg";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import data from "./data.js";
import "./App.css";
import { useState } from "react";

function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ComeOnMan</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Pages shoes={shoes}></Pages>
    </div>
  );
}

function Pages(props) {
  return (
    <div className="container">
      <div className="row">
        {props.shoes.map(function (shoe, i) {
          return (
            <div className="col-md-4" key={i}>
              <img
                src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
                width="80%"
                alt={shoe.title}
              />
              <h4>{shoe.title}</h4>
              <p>{shoe.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
