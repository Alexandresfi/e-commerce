import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./Containers/Footer";
import { Header } from "./Containers/Header";
import { Home } from "./Containers/Home";
import { PageProduct } from "./Containers/Page/Pdp";

export function Rotas() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdp" element={<PageProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}
