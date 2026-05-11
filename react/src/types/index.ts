export type Ingredient = {
  id: string;
  name: string;
  allergen?: boolean;
};

export type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "entrada" | "prato-principal" | "sobremesa" | "bebida";
  image: string;
  ingredients: Ingredient[];
  available: boolean;
};

export type DailyMenu = {
  id: string;
  date: string;
  dayOfWeek: string;
  dishes: Dish[];
};

export type RestaurantInfo = {
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
};
