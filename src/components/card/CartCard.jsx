import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ControlQuantityBtnGroup from "../shares/ControlQuantityBtnGroup";

const CartCard = ({
  name,
  image,
  description,
  category,
  price,
  discount,
  quantity,
  id,
}) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <LazyLoadImage
            src={image}
            height={200}
            effect="blur"
            className="w-100 object-fit-cover"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Link to={`/products/${id}`} className="nav-link">
              <h5 className="card-title">
                {name} <span className="badge bg-success">{category}</span>
              </h5>
            </Link>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <span className="badge bg-danger">{discount} %</span> {price}$
            </p>
            <ControlQuantityBtnGroup id={id} quantity={quantity} />
          </div>
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  discount: PropTypes.number,
  id: PropTypes.number,
  quantity: PropTypes.number,
};

export default CartCard;
