import { useEffect } from "react";

const useCardApi = (setApiData) => {
  const getApi = async () => {
    const data = await fetch(
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    );
    const json = await data.json();
    setApiData(json);
  };
  useEffect(() => {
    getApi();
  }, []);
};

export default useCardApi;
