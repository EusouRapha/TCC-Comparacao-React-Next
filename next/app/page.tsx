import Link from "next/link";
import { restaurantInfo } from "@/data/restaurant-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 to-white">
      <div
        className="relative h-125 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop)",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {restaurantInfo.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {restaurantInfo.description}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/cardapio"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Ver Cardápio
              </Link>
              <Link
                href="/sobre"
                className="bg-white hover:bg-gray-100 text-amber-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Sobre Nós
              </Link>
              <Link
                href="/horarios"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Horários
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold mb-2">Localização</h3>
            <p className="text-gray-600">{restaurantInfo.address}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold mb-2">Contato</h3>
            <p className="text-gray-600">{restaurantInfo.phone}</p>
            <p className="text-gray-600">{restaurantInfo.email}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-bold mb-2">Horário</h3>
            <p className="text-gray-600">Segunda a Sexta</p>
            <p className="text-gray-600">11:00 - 15:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
