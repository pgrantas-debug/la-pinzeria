// ============================================================
// MENIU DUOMENYS — pridėti/keisti produktus čia
// ============================================================
export interface MenuItem {
  cat: "Pizzas" | "Pastas" | "Ensaladas" | "Extras";
  name: string;
  es: string;
  en: string;
  price: number;
  veg?: boolean;
  spicy?: boolean;
  featured?: boolean;
  img?: string;
}

export const MENU: MenuItem[] = [
  { cat: "Pizzas", name: "Pan de Ajo", es: "Mozzarella, mantequilla, ajo y romero", en: "Mozzarella, butter, garlic and rosemary", price: 9.5, veg: true },
  { cat: "Pizzas", name: "Margherita", es: "Tomate y mozzarella", en: "Tomato and mozzarella", price: 9.5, veg: true, featured: true },
  { cat: "Pizzas", name: "Prosciutto", es: "Tomate, mozzarella y jamón cocido", en: "Tomato, mozzarella and cooked ham", price: 10.5, featured: true },
  { cat: "Pizzas", name: "Funghi", es: "Tomate, mozzarella y champiñones", en: "Tomato, mozzarella and mushrooms", price: 10.5, veg: true },
  { cat: "Pizzas", name: "Diavola", es: "Tomate, mozzarella y salami picante", en: "Tomato, mozzarella and pepperoni", price: 10.0, spicy: true },
  { cat: "Pizzas", name: "Bianca", es: "Nata, mozzarella, beicon y cebolla", en: "Cream, mozzarella, bacon and onion", price: 12.0 },
  { cat: "Pizzas", name: "Haway", es: "Tomate, mozzarella, jamón cocido y piña", en: "Tomato, mozzarella, cooked ham and pineapple", price: 12.0 },
  { cat: "Pizzas", name: "Pollo", es: "Tomate, mozzarella, pollo y piña", en: "Tomato, mozzarella, chicken and pineapple", price: 12.0 },
  { cat: "Pizzas", name: "Tono Cipolla", es: "Tomate, mozzarella, atún y cebolla", en: "Tomato, mozzarella, tuna and onions", price: 12.0 },
  { cat: "Pizzas", name: "Siciliana", es: "Tomate, mozzarella, anchoas, alcaparras y aceitunas negras", en: "Tomato, mozzarella, anchovies, capers and black olives", price: 12.5 },
  { cat: "Pizzas", name: "Montana", es: "Tomate, mozzarella, jamón serrano ahumado, champiñones, gorgonzola y queso ahumado", en: "Tomato, mozzarella, smoked serrano ham, mushrooms, gorgonzola and smoked cheese", price: 14.5 },
  { cat: "Pizzas", name: "Gamberi", es: "Tomate, mozzarella, gambas y gorgonzola", en: "Tomato, mozzarella, shrimp and gorgonzola", price: 13.0 },
  { cat: "Pizzas", name: "Vegetariana", es: "Tomate, mozzarella y mixto de verduras", en: "Tomato, mozzarella and mixed vegetables", price: 13.0, veg: true },
  { cat: "Pizzas", name: "4 Formaggi", es: "Crema de 4 quesos, mozzarella, gorgonzola, parmesano y aceitunas negras", en: "Cream of 4 cheeses, mozzarella, gorgonzola, parmesan and black olives", price: 14.0, veg: true, featured: true },
  { cat: "Pizzas", name: "La Capricciosa", es: "Tomate, mozzarella, jamón cocido, champiñones, alcachofas y aceitunas negras", en: "Tomato, mozzarella, cooked ham, mushrooms, artichokes and black olives", price: 13.0 },
  { cat: "Pizzas", name: "Mexicana", es: "Tomate, mozzarella, carne picada, cebolla y jalapeños", en: "Tomato, mozzarella, ground beef, onions and jalapeños", price: 14.5, spicy: true },
  { cat: "Pizzas", name: "Regina", es: "Tomate, mozzarella, speck, parmesano, tomate cherry y rúcula", en: "Tomato, mozzarella, speck, parmesan, cherry tomato and rucola", price: 13.5 },
  { cat: "Pizzas", name: "Marinera", es: "Tomate, mozzarella, gambas, mejillones y atún", en: "Tomato, mozzarella, shrimp, mussels and tuna", price: 14.5 },
  { cat: "Pizzas", name: "Barbacoa", es: "Tomate, mozzarella, pollo, beicon, boloñesa y salsa barbacoa", en: "Tomato, mozzarella, chicken, bacon, bolognese and barbecue sauce", price: 14.5, featured: true },
  { cat: "Pizzas", name: "Guanciale", es: "Tomate, mozzarella, champiñones, alcachofas, guanciale y rúcula", en: "Tomato, mozzarella, mushrooms, artichokes, pork cheek and rucola", price: 14.5 },
  { cat: "Pizzas", name: "Capreta", es: "Queso de cabra, mozzarella, tomate cherry, cebollas confitadas, parmesano y rúcula", en: "Goat cheese, mozzarella, cherry tomato, caramelized onions, parmesan and rucola", price: 13.0, featured: true },
  { cat: "Pizzas", name: "Pinza Tartufata", es: "Crema de trufa, mozzarella, champiñones portobello y salsa de trufa", en: "Truffle cream, mozzarella, portobello mushrooms and truffle sauce", price: 13.0, veg: true, featured: true },
  { cat: "Pizzas", name: "Cesar", es: "Tomate, mozzarella, pollo, lechuga romana, parmesano y salsa César", en: "Tomato, mozzarella, chicken, romaine lettuce, parmesan and Caesar sauce", price: 11.0 },
  { cat: "Pizzas", name: "Salmon", es: "Salsa de queso, mozzarella, salmón ahumado y rúcula", en: "Cheese sauce, mozzarella, smoked salmon and rucola", price: 13.0 },

  { cat: "Pastas", name: "Tagliatelle al Salmon", es: "Salmón ahumado, salsa cremosa de limón y rúcula", en: "Smoked salmon, creamy lemon sauce and rucola", price: 13.5 },
  { cat: "Pastas", name: "Spaghetti Bolognese", es: "Salsa boloñesa y parmesano", en: "Bolognese sauce and parmesan", price: 11.5 },
  { cat: "Pastas", name: "Pasta del dia", es: "Pasta del día", en: "Pasta of the day", price: 11.5 },

  { cat: "Ensaladas", name: "Ensalada César", es: "Lechuga romana, tiras de pechuga de pollo, parmesano, tomate cherry y salsa César", en: "Romaine lettuce, chicken breast strips, parmesan, cherry tomato and Caesar sauce", price: 11.0 },
  { cat: "Ensaladas", name: "Ensalada al Salmon", es: "Lechuga romana, tomate cherry, salmón ahumado, rúcula y salsa César", en: "Romaine lettuce, cherry tomato, smoked salmon, rucola and Caesar sauce", price: 13.0 },

  { cat: "Extras", name: "Ingredientes extra", es: "Ingredientes extra", en: "Extra ingredients", price: 2.5 },
  { cat: "Extras", name: "Extra gambas", es: "Extra gambas", en: "Extra shrimp", price: 3.0 },
];
