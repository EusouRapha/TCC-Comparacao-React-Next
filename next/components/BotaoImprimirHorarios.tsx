"use client";

export default function BotaoImprimirHorarios() {
  return (
    <div className="mt-6 flex justify-center">
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center justify-center
         rounded-md bg-amber-700 px-5 py-3 text-base font-semibold
         text-white shadow-sm transition-colors hover:bg-amber-800"
      >
        Imprimir horarios
      </button>
    </div>
  );
}
