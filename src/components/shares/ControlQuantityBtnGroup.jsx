import { useContext } from "react";
import PropTypes from "prop-types";

import { ProductContext } from "../../context/ProductContext";

const ControlQuantityBtnGroup = ({ id, quantity }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(ProductContext);

  return (
    <div className="btn-group">
      <button className="btn btn-danger" onClick={() => decreaseQuantity(id)}>
        -
      </button>
      <span className="btn btn-primary">{quantity}</span>
      <button className="btn btn-success" onClick={() => increaseQuantity(id)}>
        +
      </button>
    </div>
  );
};

ControlQuantityBtnGroup.propTypes = {
  id: PropTypes.number,
  quantity: PropTypes.number,
};

export default ControlQuantityBtnGroup;
