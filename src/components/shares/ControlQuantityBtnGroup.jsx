import { useContext } from "react";
import PropTypes from "prop-types";

import { ProductContext } from "../../context/ProductContext";

const ControlQuantityBtnGroup = ({ id, quantity }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(ProductContext);

  return (
    <div className="btn-group bg-secondary  border">
      <button
        className="btn text-white fs-black  "
        onClick={() => decreaseQuantity(id)}
      >
        -
      </button>
      <span className="btn  text-white">{quantity}</span>
      <button className="btn text-white" onClick={() => increaseQuantity(id)}>
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
