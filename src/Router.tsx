import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Containers/Home";

export function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
