import type { DailyMenu } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function CardapioPage() {
  const response = await fetch("http://localhost:3000/api/daily-menus", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Falha ao carregar dados do cardapio");
  }

  const dailyMenus = (await response.json()) as DailyMenu[];

  const getCategoryBadge = (category: string) => {
    const badges = {
      entrada: "bg-green-100 text-green-800",
      "prato-principal": "bg-blue-100 text-blue-800",
      sobremesa: "bg-pink-100 text-pink-800",
      bebida: "bg-purple-100 text-purple-800",
    };
    return (
      badges[category as keyof typeof badges] || "bg-gray-100 text-gray-800"
    );
  };

  const getCategoryName = (category: string) => {
    const names = {
      entrada: "Entrada",
      "prato-principal": "Prato Principal",
      sobremesa: "Sobremesa",
      bebida: "Bebida",
    };
    return names[category as keyof typeof names] || category;
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Cardápio Semanal
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Confira nosso cardápio de cada dia da semana
        </p>

        <div className="space-y-12">
          {dailyMenus.map((menu) => (
            <div key={menu.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="border-b border-gray-200 pb-4 mb-6">
                <h2 className="text-2xl font-bold text-amber-700">
                  {menu.dayOfWeek}
                </h2>
                <p className="text-gray-500">
                  {new Date(menu.date).toLocaleDateString("pt-BR")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {menu.dishes.map((dish) => (
                  <div
                    key={dish.id}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {dish.name}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryBadge(
                            dish.category,
                          )}`}
                        >
                          {getCategoryName(dish.category)}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{dish.description}</p>
                      <div className="mb-3">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                          Ingredientes:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {dish.ingredients.map((ingredient) => (
                            <span
                              key={ingredient.id}
                              className={`text-xs px-2 py-1 rounded ${
                                ingredient.allergen
                                  ? "bg-red-100 text-red-700 font-semibold"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {ingredient.name}
                              {ingredient.allergen && " ⚠️"}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-amber-600">
                          R$ {dish.price.toFixed(2)}
                        </span>
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-sm font-semibold ${
                              dish.available ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {dish.available ? "✓ Disponível" : "✗ Indisponível"}
                          </span>
                          <Link
                            href={`/prato/${dish.id}`}
                            className="text-sm font-semibold text-amber-700 hover:text-amber-900"
                          >
                            Ver detalhes
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
