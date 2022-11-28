import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Containers/Home";
import { PageProduct } from "./Containers/Page/Pdp";

export function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdp" element={<PageProduct />} />
      </Routes>
    </Router>
  );
}
