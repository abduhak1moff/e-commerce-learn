import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { ProductContext } from "../../context/ProductContext";
import ControlQuantityBtnGroup from "../shares/ControlQuantityBtnGroup";

const ProductCard = ({
  name,
  image,
  description,
  category,
  price,
  discount,
  id,
}) => {
  const { addToCart, cart } = useContext(ProductContext);

  let productInCart = cart.find((pr) => pr.id === id);

  return (
    <div className="card product-card">
      <LazyLoadImage
        src={image}
        height={200}
        effect="blur"
        className="card-img-top object-fit-cover"
        alt={name}
      />
      <div className="card-body">
        <Link to={`/products/${id}`} className="nav-link">
          <h5 className="card-title">
            {name} <span className="badge bg-success">{category}</span>
          </h5>
        </Link>
        <p>
          <span className="badge bg-danger">{discount} %</span> {price}$
        </p>
        <p className="card-text">{description}</p>
        {productInCart ? (
          <ControlQuantityBtnGroup id={id} quantity={productInCart.quantity} />
        ) : (
          <button className="btn btn-primary" onClick={() => addToCart(id)}>
            Add to cart {id}
          </button>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  discount: PropTypes.number,
  id: PropTypes.number,
};

export default ProductCard;
