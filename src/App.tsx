import * as React from "react";
import "./App.scss";
import "./Styles/panels.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Education from "./Components/Education";
import Employment from "./Components/Employment";
import Layout from "./Components/Layout";
import Projects from "./Components/Projects";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas);
library.add(fab);

export const AppConstantsContext = React.createContext({
  fadeInDurationMS: 0,
});

export default function App() {
  return (
    <div id="App">
      <AppConstantsContext.Provider value={{ fadeInDurationMS: 1200 }}>
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
      </AppConstantsContext.Provider>
    </div>
  );
}
