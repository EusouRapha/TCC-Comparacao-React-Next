import { RestaurantInfo, DailyMenu, Dish } from "@/types";

export const restaurantInfo: RestaurantInfo = {
  name: "Restaurante Lorem & Ipsum",
  description:
    "Culinária caseira com ingredientes frescos e receitas tradicionais desde 1985.",
  address: "Rua Lorem Ipsum, 1234 — Bloco A, Apt. 56, Bairro Dolor Sit, Ipsumópolis — SP",
  phone: "(00) 0000-0000",
  email: "lorem.ipsum@example.com",
  openingHours: {
    Segunda: { open: "11:00", close: "15:00" },
    Terça: { open: "11:00", close: "15:00" },
    Quarta: { open: "11:00", close: "15:00" },
    Quinta: { open: "11:00", close: "15:00" },
    Sexta: { open: "11:00", close: "15:00" },
    Sábado: { open: "11:00", close: "16:00" },
    Domingo: { open: "11:00", close: "15:00", closed: false },
  },
};

const dishesData: Dish[] = [
  {
    id: "1",
    name: "Feijoada Completa",
    description:
      "Feijoada tradicional servida com arroz, couve, farofa e laranja",
    price: 45.9,
    category: "prato-principal",
    image:
      "https://cdn.pixabay.com/photo/2020/05/17/14/15/bean-stew-5181831_1280.jpg",
    ingredients: [
      { id: "i1", name: "Feijão preto" },
      { id: "i2", name: "Carne de porco" },
      { id: "i3", name: "Linguiça" },
      { id: "i4", name: "Bacon" },
      { id: "i5", name: "Couve" },
      { id: "i6", name: "Alho" },
      { id: "i7", name: "Cebola" },
    ],
    available: true,
  },
  {
    id: "2",
    name: "Moqueca de Peixe",
    description:
      "Peixe fresco em molho de leite de coco, dendê e temperos especiais",
    price: 52.9,
    category: "prato-principal",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&auto=format&fit=crop",
    ingredients: [
      { id: "i8", name: "Peixe", allergen: true },
      { id: "i9", name: "Leite de coco" },
      { id: "i10", name: "Azeite de dendê" },
      { id: "i11", name: "Tomate" },
      { id: "i12", name: "Pimentão" },
      { id: "i13", name: "Coentro" },
    ],
    available: true,
  },
  {
    id: "3",
    name: "Bife à Parmegiana",
    description: "Bife empanado coberto com molho de tomate e queijo gratinado",
    price: 38.9,
    category: "prato-principal",
    image:
      "https://images.pexels.com/photos/29042349/pexels-photo-29042349.jpeg?auto=compress&cs=tinysrgb&w=800",
    ingredients: [
      { id: "i14", name: "Carne bovina" },
      { id: "i15", name: "Queijo mussarela", allergen: true },
      { id: "i16", name: "Molho de tomate" },
      { id: "i17", name: "Farinha de rosca", allergen: true },
      { id: "i18", name: "Ovo", allergen: true },
    ],
    available: true,
  },
  {
    id: "4",
    name: "Salada Caesar",
    description: "Alface romana, croutons, parmesão e molho caesar",
    price: 28.9,
    category: "entrada",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&auto=format&fit=crop",
    ingredients: [
      { id: "i19", name: "Alface romana" },
      { id: "i20", name: "Queijo parmesão", allergen: true },
      { id: "i21", name: "Croutons", allergen: true },
      { id: "i22", name: "Molho caesar" },
      { id: "i23", name: "Peito de frango" },
    ],
    available: true,
  },
  {
    id: "5",
    name: "Pudim de Leite",
    description: "Pudim caseiro cremoso com calda de caramelo",
    price: 15.9,
    category: "sobremesa",
    image:
      "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&auto=format&fit=crop",
    ingredients: [
      { id: "i24", name: "Leite condensado", allergen: true },
      { id: "i25", name: "Leite", allergen: true },
      { id: "i26", name: "Ovos", allergen: true },
      { id: "i27", name: "Açúcar" },
    ],
    available: true,
  },
  {
    id: "6",
    name: "Brigadeiro Gourmet",
    description: "Brigadeiro artesanal com cobertura de chocolate belga",
    price: 12.9,
    category: "sobremesa",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop",
    ingredients: [
      { id: "i28", name: "Leite condensado", allergen: true },
      { id: "i29", name: "Chocolate em pó" },
      { id: "i30", name: "Manteiga", allergen: true },
      { id: "i31", name: "Chocolate granulado" },
    ],
    available: true,
  },
  {
    id: "7",
    name: "Suco Natural de Laranja",
    description: "Suco de laranja fresco espremido na hora",
    price: 8.9,
    category: "bebida",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&auto=format&fit=crop",
    ingredients: [
      { id: "i32", name: "Laranja" },
      { id: "i33", name: "Água" },
      { id: "i34", name: "Açúcar (opcional)" },
    ],
    available: true,
  },
  {
    id: "8",
    name: "Limonada Suíça",
    description: "Limonada cremosa com leite condensado",
    price: 10.9,
    category: "bebida",
    image:
      "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800",
    ingredients: [
      { id: "i35", name: "Limão" },
      { id: "i36", name: "Leite condensado", allergen: true },
      { id: "i37", name: "Água" },
      { id: "i38", name: "Gelo" },
    ],
    available: true,
  },
];

export const dailyMenus: DailyMenu[] = [
  {
    id: "menu-1",
    date: "2025-11-04",
    dayOfWeek: "Segunda-feira",
    dishes: [dishesData[0], dishesData[3], dishesData[4], dishesData[6]],
  },
  {
    id: "menu-2",
    date: "2025-11-05",
    dayOfWeek: "Terça-feira",
    dishes: [dishesData[2], dishesData[3], dishesData[5], dishesData[7]],
  },
  {
    id: "menu-3",
    date: "2025-11-06",
    dayOfWeek: "Quarta-feira",
    dishes: [dishesData[1], dishesData[3], dishesData[4], dishesData[6]],
  },
  {
    id: "menu-4",
    date: "2025-11-07",
    dayOfWeek: "Quinta-feira",
    dishes: [dishesData[0], dishesData[3], dishesData[5], dishesData[7]],
  },
  {
    id: "menu-5",
    date: "2025-11-08",
    dayOfWeek: "Sexta-feira",
    dishes: [dishesData[2], dishesData[3], dishesData[4], dishesData[6]],
  },
  {
    id: "menu-6",
    date: "2025-11-09",
    dayOfWeek: "Sábado",
    dishes: [dishesData[1], dishesData[0], dishesData[5], dishesData[7]],
  },
  {
    id: "menu-7",
    date: "2025-11-10",
    dayOfWeek: "Domingo",
    dishes: [dishesData[0], dishesData[2], dishesData[4], dishesData[6]],
  },
];

export const allDishes = dishesData;
