import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputTest from "./components/InputTest";
import ListComponent from "./components/ListComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<InputTest />}></Route>
        <Route path="/test2" element={<ListComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
