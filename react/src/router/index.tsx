import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Cardapio from "../pages/Cardapio";
import Sobre from "../pages/Sobre";
import Horarios from "../pages/Horarios";
import PratoDetalhe from "../pages/PratoDetalhe";
import Erro from "../pages/Erro";
import NaoEncontrado from "../pages/NaoEncontrado";
import PainelOperacional from "../pages/PainelOperacional";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cardapio" element={<Cardapio />} />
          <Route path="prato/:id" element={<PratoDetalhe />} />
          <Route path="erro" element={<Erro />} />
          <Route path="nao-encontrado" element={<NaoEncontrado />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="painel-operacional" element={<PainelOperacional />} />
          <Route path="horarios" element={<Horarios />} />
          <Route path="*" element={<NaoEncontrado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
