import { useContext } from "react";

import { AppContext } from "@context";
import { useHttp } from "@hooks/useHttp";

export const useAppContext = () => {
  const [state, setState] = useContext(AppContext);

  const { isLoading, request } = useHttp();

  const fetchData = async (libraryKeys = "ISBN:0451526538,9780141439495") => {
    try {
      const res = await request(
        `https://openlibrary.org/api/books?bibkeys=${libraryKeys}&format=json`
      );
      setState({
        ...state,
        list: res,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    ...state,
    fetchData,
    isLoading,
  };
};
