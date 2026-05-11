import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurante Lorem & Ipsum",
  description:
    "Culinária caseira com ingredientes frescos e receitas tradicionais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <nav className="bg-amber-700 text-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link
                href="/"
                className="text-2xl font-bold hover:text-amber-200 transition-colors"
              >
                Lorem & Ipsum
              </Link>
              <div className="flex gap-6">
                <Link
                  href="/"
                  className="hover:text-amber-200 transition-colors font-medium"
                >
                  Início
                </Link>
                <Link
                  href="/cardapio"
                  className="hover:text-amber-200 transition-colors font-medium"
                >
                  Cardápio
                </Link>
                <Link
                  href="/sobre"
                  className="hover:text-amber-200 transition-colors font-medium"
                >
                  Sobre
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {children}

        <footer className="bg-gray-800 text-white py-8 ">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>
              &copy; 2025 Restaurante Lorem & Ipsum. Todos os direitos
              reservados.
            </p>
            <p className="text-gray-400 mt-2">
              Desenvolvido com Next.js 15 - Exemplo TCC
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
