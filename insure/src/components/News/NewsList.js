import React from "react";

const NewsList = ({ newsList }) => {
  return (
    <div>
      {newsList.map((data) => {
        return <p>{data.title}</p>;
      })}
    </div>
  );
};

export default NewsList;
