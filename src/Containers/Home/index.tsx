import { Shelf } from "../../Components/Shelf";
import { ContainerBanner } from "./styles";

export function Home() {
  return (
    <>
      <ContainerBanner>
        <p className="img1">Imagem 1</p>
        <p className="img2">Imagem 2</p>
        <p className="img3">Imagem 3</p>
      </ContainerBanner>
      <Shelf require="products?limit=10" titles="Notebooks s Smartphones" />

      <ContainerBanner>
        <p className="img1">Imagem 1</p>
        <p className="img2">Imagem 2</p>
        <p className="img3">Imagem 3</p>
      </ContainerBanner>
      <Shelf
        require="products/category/home-decoration?limit=10"
        titles="Decoração"
      />

      <ContainerBanner>
        <p className="img1">Imagem 1</p>
        <p className="img2">Imagem 2</p>
        <p className="img3">Imagem 3</p>
      </ContainerBanner>
      <Shelf
        require="products/category/womens-shoes?limit=10"
        titles="Tênis e Calçados"
      />
    </>
  );
}
