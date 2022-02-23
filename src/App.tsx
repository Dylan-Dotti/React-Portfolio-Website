import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Education from "./Components/Education";
import Employment from "./Components/Employment";
import Layout from "./Components/Layout";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<About />}></Route>
            <Route path="/education" element={<Education />}></Route>
            <Route path="/employment" element={<Employment />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
