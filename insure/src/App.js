import logo from "./logo.svg";
import "./App.css";

const Welcome = ({ userName }) => {
  return <h2>안녕하세요 {userName}</h2>;
};

function App() {
  return (
    <>
      <h1>안녕하세요</h1>
      <h3>리액트 입니다</h3>
      <Welcome userName={"홍길동"}></Welcome>
      <Welcome userName={"고길동"}></Welcome>
    </>
  );
}

export default App;
