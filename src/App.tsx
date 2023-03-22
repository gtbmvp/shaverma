import { Routes, Route } from "react-router-dom";

import "./app.scss";

import { Header } from "./components/";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/Order/Order";
import Success from "./pages/Success/Success";
import NotFound from "./pages/NotFound/NotFound";

export const App: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};
