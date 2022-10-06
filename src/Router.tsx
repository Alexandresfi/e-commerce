import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div />} />
      </Routes>
    </Router>
  );
}
