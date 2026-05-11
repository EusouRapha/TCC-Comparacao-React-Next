import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Dish } from "@/types";
import { logExecutionPhase } from "@/lib/execution-cycle-log";

type PratoDetalhePageProps = {
  params: Promise<{ id: string }>;
};

export default async function PratoDetalhePage({
  params,
}: PratoDetalhePageProps) {
  const { id } = await params;

  logExecutionPhase("Detalhe inicializado", { rota: `/prato/${id}` });

  const response = await fetch(`http://localhost:3000/api/dishes/${id}`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    logExecutionPhase("notFound acionado", {
      rota: `/prato/${id}`,
    });
    notFound();
  }

  if (!response.ok) {
    logExecutionPhase("Falha ao carregar prato", {
      rota: `/prato/${id}`,
      status: response.status,
    });
    throw new Error("Falha ao carregar dados do prato");
  }

  const dish = (await response.json()) as Dish;

  logExecutionPhase("Detalhe renderizado", { rota: `/prato/${dish.id}` });

  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-72 w-full">
            <Image
              src={dish.image}
              alt={dish.name}
              fill
              className="object-cover"
              sizes="100vw"
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
                href="/cardapio"
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
