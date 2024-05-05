import { BrowserRouter, Route, Routes } from "react-router-dom";
import CounterPage from "./pages/CounterPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import FavouritePage from "./pages/FavouritePage";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="favourite" element={<FavouritePage />} />
          <Route path="counter" element={<CounterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
