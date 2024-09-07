import {createContext, useContext, useMemo, useState} from "react";
import {products} from "../data/Products";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
  const [productInput, setProductInput] = useState("");

  const filterResult = useMemo(() => {
    return products.filter((item) =>
      item.productName.toLowerCase().includes(productInput.toLowerCase().trim())
    );
  }, [productInput]);

  return (
    <GlobalContext.Provider
      value={{productInput, setProductInput, filterResult}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
