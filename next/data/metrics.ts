import { allDishes } from "./restaurant-data";

 const totalPratos = allDishes.length;
  const pratosDisponiveis = allDishes.filter((dish) => dish.available).length;
  const pratosIndisponiveis = totalPratos - pratosDisponiveis;
  const precoMedio =
    allDishes.reduce((acc, dish) => acc + dish.price, 0) / totalPratos;

  export const metricas = [
    {
      id: "total",
      titulo: "Total de pratos",
      valor: totalPratos.toString(),
      destaque: "text-amber-700",
      fundo: "bg-amber-50 border-amber-200",
    },
    {
      id: "disponiveis",
      titulo: "Pratos disponiveis",
      valor: pratosDisponiveis.toString(),
      destaque: "text-green-700",
      fundo: "bg-green-50 border-green-200",
    },
    {
      id: "indisponiveis",
      titulo: "Pratos indisponiveis",
      valor: pratosIndisponiveis.toString(),
      destaque: "text-red-700",
      fundo: "bg-red-50 border-red-200",
    },
    {
      id: "preco-medio",
      titulo: "Preco medio",
      valor: `R$ ${precoMedio.toFixed(2)}`,
      destaque: "text-blue-700",
      fundo: "bg-blue-50 border-blue-200",
    },
  ];