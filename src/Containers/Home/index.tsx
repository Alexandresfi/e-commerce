import Banner1 from "../../assets/banners/banner1.png";
import Banner2 from "../../assets/banners/banner2.png";
import Banner3 from "../../assets/banners/banner3.png";
import { Shelf } from "../../Components/Shelf";
import { Banner } from "./styles";

export function Home() {
  return (
    <>
      <div>
        <Banner src={Banner1} alt="banner 1" />
      </div>
      <Shelf require="products?limit=10" titles="Notebooks s Smartphones" />

      <div>
        <Banner src={Banner2} alt="banner 2" />
      </div>
      <Shelf
        require="products/category/home-decoration?limit=10"
        titles="Decoração"
      />

      <div>
        <Banner src={Banner3} alt="banner 3" />
      </div>
      <Shelf
        require="products/category/womens-shoes?limit=10"
        titles="Tênis e Calçados"
      />
    </>
  );
}
