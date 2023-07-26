import React, { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint from where you want to fetch data
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4721299aa30b427ea30d568f91f75e08"
    )
      .then((response) => response.json())
      .then((data) => {
        data?.articles?.forEach((item) => {
          item.id = uuid();
        });
        setData(data.articles)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
