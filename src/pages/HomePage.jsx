import { Fragment, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import products from "../data/products";
import ProductCard from "../components/card/ProductCard";

const HomePage = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <Fragment>
      <section>
        <div className="container">
          <h1 className="text-center my-3">{lang.allProducts}</h1>
          <div className="row">
            {products.map((product) => (
              <div
                key={product.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;
