export interface Ingredient {
  id: string;
  name: string;
  allergen?: boolean;
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "entrada" | "prato-principal" | "sobremesa" | "bebida";
  image: string;
  ingredients: Ingredient[];
  available: boolean;
}

export interface DailyMenu {
  id: string;
  date: string;
  dayOfWeek: string;
  dishes: Dish[];
}

export interface RestaurantInfo {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  openingHours: {
    [key: string]: {
      open: string;
      close: string;
      closed?: boolean;
    };
  };
}
