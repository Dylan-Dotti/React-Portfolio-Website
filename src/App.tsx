import * as React from "react";
import "./App.scss";
import "./Styles/panels.scss";
import "./Styles/modals.scss";
import "./Styles/layouts.scss";
import "./Styles/form-controls.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Education from "./Components/Education";
import Employment from "./Components/Employment";
import Layout from "./Components/Layout";
import Projects from "./Components/Projects";
import projectData from "./Data/ProjectData";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import ProjectOverview from "./Components/Projects/ProjectOverview";

library.add(fas);
library.add(fab);

export default function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<About />}></Route>
            <Route path="/education" element={<Education />}></Route>
            <Route path="/employment" element={<Employment />}></Route>
            <Route path="/projects" element={<Projects />}>
              <Route index element={<ProjectOverview />}></Route>
              {projectData.map((project) => (
                <Route
                  key={project.id}
                  path={project.detailSrc}
                  element={project.detailComponent?.() ?? <div>No project component found</div>}
                ></Route>
              ))}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
