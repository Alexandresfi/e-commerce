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

export interface QuantityProps {
  id: number;
  quantity: number;
}

interface MinicartData {
  addProductMinicart: (item: ProductsProps) => void;
  deleteProduct: (id: number) => void;
  updateQuantity: (infoQuantity: QuantityProps) => void;
  products: ProductsProps[];
}

const MinicartContext = createContext<MinicartData>({} as MinicartData);

export function MinicatProvider({ children }: ChildrenProps) {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  const addProductMinicart = (item: ProductsProps) => {
    setProducts([...products, item]);
  };

  const deleteProduct = async (id: number) => {
    const productsFiltered = products.filter((item) => item.id !== id);
    setProducts(productsFiltered);
  };

  const updateQuantity = (infoQuantity: QuantityProps) => {
    if (infoQuantity.quantity > 1) {
      const updateQuantity = products.map((product) =>
        product.id === infoQuantity.id
          ? { ...product, quantity: infoQuantity.quantity }
          : product
      );
      setProducts(updateQuantity);
    } else {
      deleteProduct(infoQuantity.id);
    }
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

  useEffect(() => {
    getProductLocal();
  }, []);

  useEffect(() => {
    localCopy();
  }, [products.length, localCopy]);

  return (
    <MinicartContext.Provider
      value={{ addProductMinicart, deleteProduct, updateQuantity, products }}
    >
      {children}
    </MinicartContext.Provider>
  );
}

export function UseMinicart() {
  const context = useContext(MinicartContext);

  return context;
}
