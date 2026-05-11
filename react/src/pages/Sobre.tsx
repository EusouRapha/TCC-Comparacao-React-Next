import { restaurantInfo } from "../data/restaurant-data";

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Sobre Nós
        </h1>

        <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg mb-12">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&auto=format&fit=crop"
            alt="Restaurante"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-amber-700 mb-6">
            {restaurantInfo.name}
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {restaurantInfo.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Nossa História
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Fundado em 1985, nosso restaurante nasceu do sonho de trazer a
                autêntica culinária caseira para a mesa dos nossos clientes. Com
                receitas passadas de geração em geração, mantemos viva a
                tradição da boa comida brasileira.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Nossa Missão
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Proporcionar uma experiência gastronômica única, combinando
                sabor, qualidade e tradição. Cada prato é preparado com
                ingredientes frescos e muito carinho, para que você se sinta em
                casa.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Entre em Contato
          </h2>

          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl mr-4">📍</span>
              <div>
                <h3 className="font-semibold text-gray-800">Endereço</h3>
                <p className="text-gray-700">{restaurantInfo.address}</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-2xl mr-4">📞</span>
              <div>
                <h3 className="font-semibold text-gray-800">Telefone</h3>
                <p className="text-gray-700">{restaurantInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-2xl mr-4">✉️</span>
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-700">{restaurantInfo.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
