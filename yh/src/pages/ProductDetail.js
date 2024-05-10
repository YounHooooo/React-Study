import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import Footer from "../components/Footer";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col className="product-img-wrap">
            <img className="product-img" src={product?.img} />
          </Col>
          <Col>
            <strong className="product-title">{product?.title}</strong>
            <div className="product-price">{product?.price} 원</div>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/size-S">S</Dropdown.Item>
                <Dropdown.Item href="#/size-M">M</Dropdown.Item>
                <Dropdown.Item href="#/size-L">L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductDetail;
