import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Detail(props) {
  let { id } = useParams();
  let numid = parseInt(id);
  let [showalert, setAlert] = useState(true);
  let [num, setNum] = useState("");
  let realid = props.shoes.find(function (shoeid) {
    return shoeid.id == id;
  });
  let [탭, 탭변경] = useState(0);

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("어어 그러지마라. 숫자만 쓰레이, 문자 지우고 다시써 씨발럼아!!!");
    }
  }, [num]);

  return (
    <div className="container">
      {showalert == true ? (
        <div className="alert alert-warning">
          2초이내 구매시 할인해줌 진짜임
        </div>
      ) : null}
      <div className="row">
        <input
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />

        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${numid + 1}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{realid.title}</h4>
          <p>{realid.content}</p>
          <p>{realid.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} />
    </div>
  );
}

// function TabContent({ 탭 }) {
//   if (탭 == 0) {
//     return <div>내용0</div>;
//   } else if (탭 == 1) {
//     return <div>내용1</div>;
//   } else if (탭 == 2) {
//     return <div>내용2</div>;
//   }
// }

function TabContent({ 탭 }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [탭]);

  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}

export default Detail;
