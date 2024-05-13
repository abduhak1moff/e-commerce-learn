import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";
import { ProductContext } from "../../context/ProductContext";

const Header = () => {
  const { langType, lang, changeLang } = useContext(LanguageContext);
  const { cart } = useContext(ProductContext);

  return (
    <header className="fixed-top alert alert-info  text-white">
      <nav className="container d-flex align-items-center justify-content-between">
        <NavLink className="nav-link " to="/">
          <h1>E-Shop</h1>
        </NavLink>
        <ul className="nav align-items-center">
          <li className="nav-item">
            <NavLink className=" text-primary  nav-link" to="/">
              {lang.home}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className=" text-primary  nav-link" to="/counter">
              {lang.counter}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className=" text-primary  nav-link" to="/cart">
              {lang.cart}{" "}
              <span className="badge bg-primary">{cart.length}</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className=" text-primary  nav-link" to="/favourite">
              {lang.favourite}
            </NavLink>
          </li>
          <li className="nav-item">
            <select
              value={langType}
              className="form-select"
              onChange={changeLang}
            >
              <option value="en">EN</option>
              <option value="uz">UZ</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
