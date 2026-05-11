import { metricas } from "../data/metrics";
import { Navigate, useLocation } from "react-router";
import { useProxy } from "../proxy/useProxy";

export default function PainelOperacional() {
  const location = useLocation();
  const decision = useProxy(location.pathname, location.search);

  if (!decision.allow) {
    const redirectTo = `${decision.redirectPathname}${decision.redirectSearch}`;
    return <Navigate to={redirectTo} replace />;
  }
  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Painel Operacional
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Resumo interno do cardapio
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {metricas.map((metrica) => (
            <div
              key={metrica.id}
              className={`rounded-lg border p-6 shadow-sm ${metrica.fundo}`}
            >
              <h2 className="text-sm uppercase tracking-wide text-gray-600 mb-2">
                {metrica.titulo}
              </h2>
              <p className={`text-3xl font-bold ${metrica.destaque}`}>
                {metrica.valor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
