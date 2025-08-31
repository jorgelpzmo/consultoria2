import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import EjemplosConsultas from "./EjemplosConsultas"; // crea este componente
import Blog from "./Blog";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ejemplos-consultas" element={<EjemplosConsultas />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;