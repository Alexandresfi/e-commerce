import {
  ReactNode,
  useState,
  useContext,
  useEffect,
  createContext,
  useCallback,
} from "react";

import { ProductsProps } from "../Components/Product";

interface ChildrenProps {
  children: ReactNode;
}

interface MinicartData {
  addProductMinicart: (item: ProductsProps) => void;
  deleteProduct: (id: number) => void;
  products: ProductsProps[];
}

const MinicartContext = createContext<MinicartData>({} as MinicartData);

export function MinicatProvider({ children }: ChildrenProps) {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  const addProductMinicart = (item: ProductsProps) => {
    setProducts([...products, item]);
  };

  const localCopy = useCallback(() => {
    const savedLocal = async () => {
      await localStorage.setItem(
        "ecommerceMinicart:minicartData",
        JSON.stringify(products)
      );
    };

    savedLocal();
  }, [products]);

  const getProductLocal = async () => {
    const existProductMiniCart = await localStorage.getItem(
      "ecommerceMinicart:minicartData"
    );
    if (existProductMiniCart) {
      existProductMiniCart !== "[]" &&
        setProducts(JSON.parse(existProductMiniCart));
    }
  };

  const deleteProduct = async (id: number) => {
    const productsFiltered = products.filter((item) => item.id !== id);
    setProducts(productsFiltered);
  };

  useEffect(() => {
    getProductLocal();
  }, []);

  useEffect(() => {
    localCopy();
  }, [products.length, localCopy]);

  return (
    <MinicartContext.Provider
      value={{ addProductMinicart, deleteProduct, products }}
    >
      {children}
    </MinicartContext.Provider>
  );
}

export function UseMinicart() {
  const context = useContext(MinicartContext);

  return context;
}
