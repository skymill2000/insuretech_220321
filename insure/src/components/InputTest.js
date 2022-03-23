import React, { useState } from "react";
//rafce 입력
const InputTest = () => {
  //   let text = "test";
  const [text, setText] = useState("test");

  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
  };
  return (
    <div>
      <p>{text}</p>
      <input onChange={handleChange}></input>
    </div>
  );
};

export default InputTest;
