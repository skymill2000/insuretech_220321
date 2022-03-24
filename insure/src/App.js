import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import InputTest from "./components/InputTest";
import ListComponent from "./components/ListComponent";
import AxiosTest from "./pages/AxiosTest";
import HospitalDetail from "./pages/HospitalDetailPage";
import HospitalPage from "./pages/HospitalPage";
import NewSearchPage from "./pages/NewSearchPage";
import PhamacyPage from "./pages/PhamacyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/test" element={<InputTest />}></Route>
        <Route path="/test2" element={<ListComponent />}></Route>
        <Route path="/axios" element={<AxiosTest />}></Route>
        <Route path="/news" element={<NewSearchPage />}></Route>
        <Route path="/phamacy" element={<PhamacyPage />}></Route>
        <Route path="/hospital" element={<HospitalPage />}></Route>
        <Route path="/hospitalDetail" element={<HospitalDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
