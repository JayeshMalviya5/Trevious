import React, { useContext, useState } from "react";
import Navbar from "../components/navbar";
import { DataContext } from "../context/DataContext";
import NewsCard from "../components/NewsCard";
import { v4 as uuid } from 'uuid';

const Landing = () => {
  const { data } = useContext(DataContext);
  const [isListView, setIsListView] = useState(false); // State to track the view mode (grid or list)

  // Function to toggle between grid view and list view
  const toggleView = () => {
    setIsListView(prevState => !prevState);
  };

  return (
    <div>
      <div className="py-10 px-3 bg-slate-900">
        <div className="flex justify-center mb-10">
          <button
            onClick={toggleView}
            className="px-4 py-2 sticky top-2 rounded-md bg-indigo-500 text-white"
          >
            {isListView ? 'Grid View' : 'List View'}
          </button>
        </div>
        {isListView ? (
          <div className="flex flex-col gap-10 items-center overflow-auto py-5">
            {data.map((item) => (
              <NewsCard
                key={item.id}
                isListView={isListView}
                author={item.author}
                description={item.description}
                title={item.title}
                image={item.urlToImage}
                publishedOn={item.publishedOn}
                id={item.id}
                url={item.url}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap w-full gap-5 md:gap-20 justify-center">
            {data.map((item) => (
              <NewsCard
              key={item.id}
              isListView={isListView}
              author={item.author}
              description={item.description}
              title={item.title}
              image={item.urlToImage}
              publishedOn={item.publishedOn}
              id={item.id}
              url={item.url}
              />
              
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;
