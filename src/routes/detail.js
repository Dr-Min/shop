import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let numid = parseInt(id);
  let [showalert, setAlert] = useState(true);
  let [num, setNum] = useState("");
  let realid = props.shoes.find(function (shoeid) {
    return shoeid.id == id;
  });

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("어어 그러지마라. 숫자만 쓰레이");
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
    </div>
  );
}

export default Detail;
