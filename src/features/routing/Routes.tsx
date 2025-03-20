import { Routes, Route } from "react-router";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ROUTES_PATHS from "./RoutesPath";
function MainRoute() {
  return (
    <Routes>
      <Route path={ROUTES_PATHS.HOME} element={<Home />} />
      <Route path={ROUTES_PATHS.ABOUT} element={<About />} />
      <Route path={ROUTES_PATHS.CONTACT} element={<Contact />} />
      <Route path={ROUTES_PATHS.PROJECTS} element={<Projects />} />
    </Routes>
  );
}

export default MainRoute;
