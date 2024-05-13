import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main className="min-vh-100">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
