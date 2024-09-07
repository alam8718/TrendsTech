import {createContext, useContext, useState} from "react";
import {products} from "../data/Products";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
  const [productInput, setProductInput] = useState("");

  const temp = products;

  const filterResult = temp.filter((item) =>
    item.productName.toLowerCase().includes(productInput.toLowerCase().trim())
  );

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
