import logo from "./logo.svg";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import data from "./data.js";
import Detail from "./routes/detail.js";
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";

function App() {
  let [shoes, setshoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ComeOnMan</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to="/">홈 </Link>
        <Link to="detail">상세페이지</Link> */}

      <Routes>
        <Route
          path="/"
          element={<Pages shoes={shoes} setshoes={setshoes}></Pages>}
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}></Route>
        <Route
          path="*"
          element={<div>선생님 여기는 없는 페이지입니다만...404 어쩌구</div>}
        />
        <Route path="/about" element={<div></div>}>
          <Route path="member" element={<div></div>} />
          <Route path="location" element={<div></div>} />
        </Route>

        <Route path="/events" element={<Events />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>
    </div>
  );
}

function Events() {
  return (
    <div>
      <h3>오늘의 이벤트</h3>
      <Outlet></Outlet>
    </div>
  );
}

function Pages(props) {
  return (
    <>
      <div className="main-bg"></div>

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
        <button
          onClick={() => {
            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((결과) => {
                let copy = [...props.shoes, ...결과.data];
                props.setshoes(copy);
              })
              .catch(() => {
                console.log("실패함 ㅄ");
              });
          }}
        >
          버튼
        </button>
      </div>
    </>
  );
}

export default App;
