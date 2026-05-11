import BotaoImprimirHorarios from "@/components/BotaoImprimirHorarios";
import { restaurantInfo } from "@/data/restaurant-data";

export default function HorariosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Horários de Funcionamento
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Confira nossos horários de atendimento
        </p>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-amber-700 text-white p-6">
            <h2 className="text-2xl font-bold text-center">
              Aberto todos os dias!
            </h2>
          </div>

          <div className="p-8">
            <div className="space-y-4">
              {Object.entries(restaurantInfo.openingHours).map(
                ([day, hours]) => (
                  <div
                    key={day}
                    className={`flex justify-between items-center p-4 rounded-lg ${
                      hours.closed
                        ? "bg-red-50 border border-red-200"
                        : "bg-green-50 border border-green-200"
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">
                        {hours.closed ? "🔴" : "🟢"}
                      </span>
                      <span className="text-xl font-semibold text-gray-800">
                        {day}
                      </span>
                    </div>

                    <div className="text-right">
                      {hours.closed ? (
                        <span className="text-red-600 font-semibold">
                          Fechado
                        </span>
                      ) : (
                        <div className="text-gray-700">
                          <span className="font-semibold">{hours.open}</span>
                          <span className="mx-2">às</span>
                          <span className="font-semibold">{hours.close}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ),
              )}
            </div>

            <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="text-lg font-bold text-amber-800 mb-2">
                ⚠️ Informações Importantes
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Última entrada: 30 minutos antes do fechamento</li>
                <li>• Aceitamos reservas pelo telefone</li>
                <li>• Feriados: consultar horário especial</li>
              </ul>
            </div>

            <BotaoImprimirHorarios />
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              📞 Faça sua Reserva
            </h3>
            <p className="text-gray-700 mb-2">Entre em contato conosco:</p>
            <p className="text-lg font-semibold text-amber-600">
              {restaurantInfo.phone}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              📍 Localização
            </h3>
            <p className="text-gray-700">{restaurantInfo.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
