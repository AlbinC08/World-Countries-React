import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        {/* patch="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
