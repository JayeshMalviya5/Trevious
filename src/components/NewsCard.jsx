// NewsCard.js
import React from "react";
import { useNavigate } from "react-router";

const NewsCard = ({
  image,
  title,
  description,
  author,
  publishedOn,
  isListView,
  id,
  detailPage,
  content,
  url,
}) => {
  const navigate = useNavigate();
  const showDetails = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div
      className={`bg-white relative rounded-lg overflow-hidden shadow-md ${
        isListView
          ? "w-full md:w-4/5 h-auto"
          : "w-2/5 text-xl md:text-lg md:w-80"
      } duration-200  hover:scale-105 transition-transform`}
    >
      <img
        src={image}
        alt={title}
        className={`h-52 ${isListView ? "h-64" : ""}  w-full object-cover`}
      />
      <div className="p-4">
        <h2 className="text-xs font-semibold hover:cursor-pointer hover:underline text-gray-800 mb-2" onClick={()=>{window.open(url,"_blank")}}>{title}</h2>
        {detailPage ? (
          <p className="text-sm">
            {" "}
            <span className="font-semibold">Published On </span>{" "}
            {`${publishedOn}`}{" "}
          </p>
        ) : null}
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        {detailPage ? (
          <>
            <p className="text-gray-600 text-sm mb-4">{content}</p>
          </>
        ) : null}
        <div className="flex items-center text-sm text-gray-500 mb-5">
          <span className="mr-2">By {author}</span>
          <span>&bull;</span>
          <span>{publishedOn}</span>
        </div>

        <div
          onClick={() => showDetails(id)}
          className="flex text-xs md:text-lg justify-center absolute bottom-2 right-2 hover:cursor-pointer hover:font-semibold"
        >
        {
            !detailPage ? (
                <p className="text-sm" onClick={() => showDetails(id)}>
                More details ➡
              </p>
            ):(
                    null
            )
        }
          
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
