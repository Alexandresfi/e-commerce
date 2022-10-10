import Banner1 from "../../assets/banners/banner1.png";
import { Shelf } from "../../Components/Shelf";
import { Banner } from "./styles";

export function Home() {
  const shelf1 = "products?limit=10";
  return (
    <>
      <div>
        <Banner src={Banner1} alt="banner 1" />
      </div>
      <Shelf require={shelf1} />
    </>
  );
}
