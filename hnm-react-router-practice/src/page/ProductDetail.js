import React, { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-detail-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.choice == true ? "Conscious choice" : ""}</div>
          <select className="select-box" title="asd">
            <option value="none">사이즈 선택</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
          <div>
            <button>추가</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
