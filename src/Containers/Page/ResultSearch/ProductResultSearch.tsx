import { useNavigate } from "react-router-dom";

import { formatPrices } from "../../../utils/formatPrice";
import { BuyButton } from "../../../Components/BuyButton";

import {
  ContentProducts,
  Img,
  Price,
  Title,
  ValueFrist,
} from "../../../Components/Product/styles";
import { UseResultSearch } from "../../../hooks/ResultSearch";

export interface ProductsProps {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  thumbnail: string;
  quantity: number;
}

export function ProductResultSearch() {
  const navigate = useNavigate();
  const { products } = UseResultSearch();

  const handleLink = (id: number) => {
    localStorage.setItem("product:IdPdp", JSON.stringify(id));
    navigate("/pdp");
  };

  return (
    <>
      {products?.map((product) => (
        <ContentProducts key={product.id} search>
          <Img
            src={product.thumbnail}
            onClick={() => handleLink(product.id)}
            alt={product.title}
          />
          <Title>{product.title}</Title>
          <ValueFrist>
            From <span>{formatPrices(product.price)}</span>
          </ValueFrist>
          <Price>
            For only {formatPrices(product.price - product.discountPercentage)}
          </Price>
          <BuyButton product={product!} />
        </ContentProducts>
      ))}
    </>
  );
}
