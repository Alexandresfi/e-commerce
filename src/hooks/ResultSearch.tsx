import {
  ReactNode,
  useState,
  useContext,
  useEffect,
  createContext,
} from "react";

import { ProductsProps } from "../Components/Product";
import { api } from "../services/api";

interface ChildrenProps {
  children: ReactNode;
}

interface SearchData {
  GetSearch: (require: string) => void;
  products: ProductsProps[];
  emptySearch: boolean;
}

const ResultSearchContext = createContext<SearchData>({} as SearchData);

export function ResultSearchProvider({ children }: ChildrenProps) {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [emptySearch, setEmptySearch] = useState(false);
  const [verification, setVerification] = useState({
    search: false,
    category: false,
  });

  const searchProduct = async (require: string) => {
    const { data } = await api.get(`/products/search?q=${require}`);

    if (data.length === 0) {
      verification.category && setEmptySearch(true);

      if (!verification.category) {
        setVerification({ ...verification, search: true });
        searchCategory(require);
      }
    } else {
      setProducts(data.products);
    }
  };

  const searchCategory = async (require: string) => {
    const { data } = await api.get(`/category/${require}`);

    if (data.length === 0) {
      verification.search && setEmptySearch(true);

      if (!verification.search) {
        searchProduct(require);
        setVerification({ ...verification, category: true });
      }
    } else {
      setProducts(data.products);
    }
  };

  const GetSearch = (require: string) => {
    localStorage.setItem(
      "department:ecommerceDepartment",
      JSON.stringify(require)
    );

    searchProduct(require);
  };

  useEffect(() => {
    const require = JSON.parse(
      localStorage.getItem("department:ecommerceDepartment")!
    );
    GetSearch(require);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ResultSearchContext.Provider value={{ GetSearch, emptySearch, products }}>
      {children}
    </ResultSearchContext.Provider>
  );
}

export function UseResultSearch() {
  const context = useContext(ResultSearchContext);

  return context;
}
