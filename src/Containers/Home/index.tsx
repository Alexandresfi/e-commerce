import { Shelf } from "../../Components/Shelf";
import { ContainerBanner } from "./styles";

export function Home() {
  return (
    <>
      <ContainerBanner>
        <p className="img1">Image 1</p>
        <p className="img2">Image 2</p>
        <p className="img3">Image 3</p>
      </ContainerBanner>
      <Shelf require="products?limit=10" titles="Laptops and Smartphones" />

      <ContainerBanner>
        <p className="img1">Image 1</p>
        <p className="img2">Image 2</p>
        <p className="img3">Image 3</p>
      </ContainerBanner>
      <Shelf
        require="products/category/home-decoration?limit=10"
        titles="Decoration"
      />

      <ContainerBanner>
        <p className="img1">Image 1</p>
        <p className="img2">Image 2</p>
        <p className="img3">Image 3</p>
      </ContainerBanner>
      <Shelf
        require="products/category/womens-shoes?limit=10"
        titles="Sneakers and Shoes"
      />
    </>
  );
}
