import { useState, useEffect } from "react";
import { ProductsProps } from "../../../Components/Product";
import { api } from "../../../services/api";
import { ContainerImgPDP } from "./columns/left";
import { ContainerInfoPDP } from "./columns/right";

import { Container } from "./styles";

export interface ProductPdpdProps extends ProductsProps {
  images: string[];
}

export function PageProduct() {
  const [product, setProduct] = useState<ProductPdpdProps>();

  const IdProduct = localStorage.getItem("product:IdPdp");

  const GetProducts = async (id: number) => {
    const { data } = await api.get(`products/${id}`);
    setProduct(data);
  };

  useEffect(() => {
    GetIdProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [IdProduct]);

  const GetIdProduct = () => {
    if (IdProduct) {
      GetProducts(JSON.parse(IdProduct));
    }
  };

  return (
    <Container>
      <ContainerImgPDP
        productImg={product?.images || []}
        thumbnail={product?.thumbnail || " "}
      />
      <ContainerInfoPDP product={product!} />
    </Container>
  );
}
