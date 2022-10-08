import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { ContentProducts, Img, Price, Title, ValueFrist } from "./styles";

interface ProductsProps {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  images: string[];
}

export function Product() {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  const GetProducts = async () => {
    const { data } = await api.get("/products?limit=18");
    setProducts(data.products);
  };

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <>
      {products?.map((product) => (
        <ContentProducts key={product.id}>
          <Img src={product.images[0]} alt="" />
          <Title>{product.title}</Title>
          <ValueFrist>de R$ {product.price}</ValueFrist>
          <Price>Por apenas {product.price - product.discountPercentage}</Price>
          <button>Comprar</button>
        </ContentProducts>
      ))}
    </>
  );
}
