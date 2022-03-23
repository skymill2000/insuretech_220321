import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import InputTest from "./components/InputTest";

function App() {
  return (
    <>
      <h1>안녕하세요</h1>
      <h3>리액트 입니다</h3>
      <Header title={"테스트 페이지"}></Header>
      <Header title={"테스트 페이지"}></Header>
      <Header title={"테스트 페이지"}></Header>
      <InputTest></InputTest>
    </>
  );
}

export default App;
