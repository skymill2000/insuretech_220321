import React from "react";

const NewsList = ({ newsList }) => {
  return (
    <div>
      {newsList.map((data, index) => {
        return <p key={index}>{data.title}</p>;
      })}
    </div>
  );
};

export default NewsList;
