import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import InputTest from "./components/InputTest";
import ListComponent from "./components/ListComponent";
import AxiosTest from "./pages/AxiosTest";
import NewSearchPage from "./pages/NewSearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/test" element={<InputTest />}></Route>
        <Route path="/test2" element={<ListComponent />}></Route>
        <Route path="/axios" element={<AxiosTest />}></Route>
        <Route path="/news" element={<NewSearchPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
