import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import InputTest from "./components/InputTest";
import ListComponent from "./components/ListComponent";

function App() {
  return (
    <>
      <Header title={"헤더입니다"}></Header>
      <InputTest></InputTest>
      <ListComponent></ListComponent>
    </>
  );
}

export default App;
