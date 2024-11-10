import React, { useState } from "react";
import "../css/allMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCashRegister, faHeart, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Boot ==> bootstrap
function BootCard() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const togglePriceInfo = () => {
    setShowPrice(!showPrice);
  };

  return (
    <div className="card-n">
      <div className="heart-icon" onClick={toggleFavorite}>
        <FontAwesomeIcon icon={faHeart} style={{ color: isFavorite ? '#ff4d4d' : '#fff' }} />
      </div>
      <img src="/assets/images/bannar2.jpg" alt="Pizza" />
      <div className="info-icon" onClick={togglePriceInfo}>
        <FontAwesomeIcon icon={faInfoCircle} style={{ color: '#007bff' }} />
      </div>
      {showPrice && (
        <div className="price-info">
          <span>$12.99</span>
        </div>
      )}
      <div className="card-n-title">Pizza Margherita</div>
      <div className="card-n-text">Spicy Vegetable Pizza</div>
      <div className="card-n-btns">
        <div className="add-to-cart-text btn btn-outline-success w-100">
          Add to
          <FontAwesomeIcon icon={faCartPlus} style={{ marginLeft: "5px" }} />
        </div>
        <div className="orderNow btn btn-primary w-100">
          <FontAwesomeIcon icon={faCashRegister} style={{ marginLeft: "5px" }} />
          <div className="orderNow-text">Order Now</div>
        </div>
      </div>
    </div>
  );
}

function AllMenu() {
  return (
    <div>
      <div className="content">
        <BootCard />
      </div>
    </div>
  );
}

export default AllMenu;