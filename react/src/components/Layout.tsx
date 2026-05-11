import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <nav className="bg-amber-700 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link
              to="/"
              className="text-2xl font-bold hover:text-amber-200 transition-colors"
            >
              Lorem & Ipsum
            </Link>
            <div className="flex gap-6">
              <Link
                to="/"
                className="hover:text-amber-200 transition-colors font-medium"
              >
                Início
              </Link>
              <Link
                to="/cardapio"
                className="hover:text-amber-200 transition-colors font-medium"
              >
                Cardápio
              </Link>
              <Link
                to="/sobre"
                className="hover:text-amber-200 transition-colors font-medium"
              >
                Sobre
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer className="bg-gray-800 text-white py-8 ">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>
            &copy; 2025 Restaurante Lorem & Ipsum. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 mt-2">
            Desenvolvido com React + Vite - Exemplo TCC
          </p>
        </div>
      </footer>
    </div>
  );
}
