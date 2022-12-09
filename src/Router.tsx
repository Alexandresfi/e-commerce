import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./Containers/Footer";
import { Header } from "./Containers/Header";
import { Home } from "./Containers/Home";
import { SearchResult } from "./Containers/Page/Category/SearchResult";
import { PageProduct } from "./Containers/Page/Pdp";

export function Rotas() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdp" element={<PageProduct />} />
        <Route path="/search-result" element={<SearchResult />} />
      </Routes>
      <Footer />
    </Router>
  );
}
