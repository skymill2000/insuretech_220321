import React from "react";
//rafce 입력
const InputTest = () => {
  const handleChange = (event) => {
    const { value } = event.target;
    console.log(value);
  };
  return (
    <div>
      <input onChange={handleChange}></input>
    </div>
  );
};

export default InputTest;
