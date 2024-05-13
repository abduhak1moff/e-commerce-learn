import { Fragment, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import CartCard from "../components/card/CartCard";

const CartPage = () => {
  const { cart, totalPriceOfCart } = useContext(ProductContext);
  return (
    <Fragment>
      <section>
        <div className="container">
          <h1 className="text-center">CartPage</h1>
          {cart.map((pr) => (
            <CartCard key={pr.id} {...pr} />
          ))}
          <div className="alert alert-primary ">
            <h3 className="text-center">Checkout {totalPriceOfCart} $</h3>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CartPage;
