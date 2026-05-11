import { useCallback, useEffect, useState } from "react";
import type { Dish } from "../types";
import { logExecutionPhase } from "../lib/execution-cycle-log";
import { Link, useNavigate, useParams } from "react-router";

export default function PratoDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [dish, setDish] = useState<Dish | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadDish = useCallback(async () => {
    logExecutionPhase("Detalhe inicializado", {
      rota: `/prato/${id ?? "sem-id"}`,
    });

    setIsLoading(true);
    setDish(null);

    try {
      const response = await fetch("/dishes.json");

      if (!response.ok) {
        throw new Error(`Falha ao carregar JSON de pratos: ${response.status}`);
      }

      const dishes = (await response.json()) as Dish[];
      const selectedDish = dishes.find((item) => item.id === id);

      if (!selectedDish) {
        logExecutionPhase("Redirecionamento manual para nao-encontrado", {
          rota: `/prato/${id ?? "sem-id"}`,
        });
        navigate("/nao-encontrado", { replace: true });
        return;
      }

      setDish(selectedDish);

      logExecutionPhase("Detalhe renderizado", {
        rota: `/prato/${selectedDish.id}`,
      });
    } catch {
      logExecutionPhase("Falha ao carregar prato", {
        rota: `/prato/${id ?? "sem-id"}`,
      });
      navigate("/erro", { replace: true });
    } finally {
      setIsLoading(false);
    }
  }, [id, navigate]);

  useEffect(() => {
    loadDish();
  }, [id, loadDish, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-linear-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Carregando prato...
            </h1>
          </div>
        </div>
      </div>
    );
  }

  if (!dish) {
    return null;
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-72 w-full">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              {dish.name}
            </h1>
            <p className="text-gray-600 mb-6">{dish.description}</p>

            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Ingredientes
            </h2>
            <ul className="list-disc ml-6 text-gray-700 mb-6">
              {dish.ingredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.name}</li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/cardapio"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Voltar ao cardápio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
