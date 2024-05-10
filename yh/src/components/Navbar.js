import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const Navbar = () => {
  const menuList = ["Best", "Men", "Women", "Acc"];

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToMyShop = () => {
    navigate("/shop");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div className="login-button" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
      <div className="my-shop-button" onClick={goToMyShop}>
        내상점
      </div>

      <div className="img-logo" onClick={goToHome}>
        <img
          width={200}
          src="https://cdn.vectorstock.com/i/preview-2x/01/25/yh-logo-monogram-with-shield-shape-designs-vector-38150125.webp"
        />
      </div>

      <Container>
        <div className="menu-area">
          <ul className="menu-list">
            {menuList.map((menu) => (
              <li key={menu}>{menu}</li>
            ))}
          </ul>

          <div className="search-area">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" onKeyPress={(event) => search(event)} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
