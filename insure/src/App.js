import logo from "./logo.svg";
import "./App.css";

const Welcome = () => {
  return <h2>저는 새로 추가된 컴포넌트 입니다.</h2>;
};

function App() {
  return (
    <>
      <h1>안녕하세요</h1>
      <h3>리액트 입니다</h3>
      <Welcome></Welcome>
    </>
  );
}

export default App;
