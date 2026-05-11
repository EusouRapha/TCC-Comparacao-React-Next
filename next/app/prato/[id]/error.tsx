"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function PratoDetalheError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-3xl font-bold text-red-700 mb-4">
            Ocorreu um erro
          </h1>
          <p className="text-gray-700 mb-6">
            Não foi possível concluir a etapa atual do fluxo.
          </p>
          <Link
            href="/cardapio"
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Voltar ao cardápio
          </Link>
        </div>
      </div>
    </div>
  );
}
