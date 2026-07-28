"use client";

import { useState } from "react";

type Ingredient = {
  name: string;
  nameFr: string;
  amount: string;
  amountFr: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
};

const INGREDIENTS: Ingredient[] = [
  { name: "Mango", nameFr: "Mangue", amount: "1 cup", amountFr: "1 tasse", calories: 99, protein: 1.4, carbs: 24.7, fat: 0.6, fiber: 2.6 },
  { name: "Greek Yogurt", nameFr: "Yaourt grec", amount: "1 cup", amountFr: "1 tasse", calories: 100, protein: 17.0, carbs: 6.0, fat: 0.7, fiber: 0.0 },
  { name: "Almonds", nameFr: "Amandes", amount: "1 oz", amountFr: "28 g", calories: 164, protein: 6.0, carbs: 6.1, fat: 14.2, fiber: 3.5 },
  { name: "Oats", nameFr: "Flocons d\u2019avoine", amount: "0.5 cup", amountFr: "0.5 tasse", calories: 150, protein: 5.0, carbs: 27.0, fat: 2.5, fiber: 4.0 },
  { name: "Banana", nameFr: "Banane", amount: "1 medium", amountFr: "1 moyenne", calories: 105, protein: 1.3, carbs: 27.0, fat: 0.4, fiber: 3.1 },
  { name: "Honey", nameFr: "Miel", amount: "1 tbsp", amountFr: "1 c. \u00e0 soupe", calories: 64, protein: 0.1, carbs: 17.3, fat: 0.0, fiber: 0.0 },
  { name: "Spinach", nameFr: "\u00c9pinards", amount: "1 cup", amountFr: "1 tasse", calories: 7, protein: 0.9, carbs: 1.1, fat: 0.1, fiber: 0.7 },
  { name: "Brown Rice", nameFr: "Riz brun", amount: "1 cup", amountFr: "1 tasse", calories: 216, protein: 5.0, carbs: 44.8, fat: 1.8, fiber: 3.5 },
];

const LOCALES = {
  en: {
    title: "Build a Sample Meal",
    subtitle: "Click an ingredient to add it, then calculate nutrition.",
    ingredients: "Ingredients",
    yourMeal: "Your Meal",
    addIngredients: "Add ingredients, then calculate.",
    selected: (n: number) => `${n} ingredient${n > 1 ? "s" : ""} selected`,
    calculate: "Calculate Example Nutrition",
    nutritionEstimate: "Nutrition Estimate",
    disclaimer: "Sample data for demonstration only. Not dietary advice.",
    macros: [
      { key: "calories", label: "Calories", unit: "kcal" },
      { key: "protein", label: "Protein", unit: "g" },
      { key: "carbs", label: "Carbohydrates", unit: "g" },
      { key: "fat", label: "Fat", unit: "g" },
      { key: "fiber", label: "Fiber", unit: "g" },
    ] as const,
  },
  fr: {
    title: "Construisez un repas exemple",
    subtitle: "Cliquez sur un ingr\u00e9dient pour l\u2019ajouter, puis calculez la nutrition.",
    ingredients: "Ingr\u00e9dients",
    yourMeal: "Votre repas",
    addIngredients: "Ajoutez des ingr\u00e9dients, puis calculez.",
    selected: (n: number) => `${n} ingr\u00e9dient${n > 1 ? "s" : ""} s\u00e9lectionn\u00e9${n > 1 ? "s" : ""}`,
    calculate: "Calculer la nutrition exemple",
    nutritionEstimate: "Estimation nutritionnelle",
    disclaimer: "Donn\u00e9es d\u2019exemple \u00e0 des fins de d\u00e9monstration uniquement. Ce n\u2019est pas un conseil di\u00e9t\u00e9tique.",
    macros: [
      { key: "calories", label: "Calories", unit: "kcal" },
      { key: "protein", label: "Prot\u00e9ines", unit: "g" },
      { key: "carbs", label: "Glucides", unit: "g" },
      { key: "fat", label: "Lipides", unit: "g" },
      { key: "fiber", label: "Fibres", unit: "g" },
    ] as const,
  },
} as const;

type MacroKey = "calories" | "protein" | "carbs" | "fat" | "fiber";

const MACRO_COLORS: Record<string, string> = {
  calories: "text-primary",
  protein: "text-accent",
  carbs: "text-amber-600",
  fat: "text-rose-500",
  fiber: "text-emerald-600",
};

type Props = { locale: string };

export function NutritionDemo({ locale }: Props) {
  const isFr = locale === "fr";
  const L = isFr ? LOCALES.fr : LOCALES.en;
  const [meal, setMeal] = useState<Ingredient[]>([]);
  const [calculated, setCalculated] = useState(false);

  const getName = (ing: Ingredient) => isFr ? ing.nameFr : ing.name;
  const getAmount = (ing: Ingredient) => isFr ? ing.amountFr : ing.amount;

  const addIngredient = (ingredient: Ingredient) => {
    setMeal((prev) => [...prev, ingredient]);
    setCalculated(false);
  };

  const removeIngredient = (index: number) => {
    setMeal((prev) => prev.filter((_, i) => i !== index));
    setCalculated(false);
  };

  const totals = meal.reduce(
    (acc, item) => ({
      calories: acc.calories + item.calories,
      protein: acc.protein + item.protein,
      carbs: acc.carbs + item.carbs,
      fat: acc.fat + item.fat,
      fiber: acc.fiber + item.fiber,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 }
  );

  return (
    <div className="rounded-2xl border border-border/80 bg-white shadow-lg shadow-primary/5 overflow-hidden">
      <div className="border-b border-border/60 bg-surface/80 px-6 py-4">
        <p className="text-sm font-bold text-primary">{L.title}</p>
        <p className="mt-1 text-xs text-muted">{L.subtitle}</p>
      </div>

      <div className="grid gap-0 sm:grid-cols-2 divide-x divide-border/40">
        <div className="p-5">
          <p className="mb-3 text-xs font-bold tracking-wider text-muted uppercase">{L.ingredients}</p>
          <div className="flex flex-wrap gap-2">
            {INGREDIENTS.map((ing) => (
              <button
                key={ing.name}
                onClick={() => addIngredient(ing)}
                className="rounded-lg border border-border/80 bg-surface/50 px-3 py-1.5 text-xs font-medium text-primary transition-all hover:border-accent/40 hover:bg-accent/5 hover:text-accent cursor-pointer"
              >
                + {getName(ing)}
              </button>
            ))}
          </div>

          {meal.length > 0 && (
            <div className="mt-5">
              <p className="mb-2 text-xs font-bold tracking-wider text-muted uppercase">{L.yourMeal}</p>
              <div className="space-y-1.5">
                {meal.map((item, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg bg-surface/80 px-3 py-2 text-sm">
                    <span className="text-primary font-medium">{getName(item)}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted">{getAmount(item)}</span>
                      <button
                        onClick={() => removeIngredient(i)}
                        className="text-muted/60 hover:text-rose-500 transition-colors cursor-pointer"
                      >
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-5">
          {!calculated || meal.length === 0 ? (
            <div className="flex h-full min-h-[200px] flex-col items-center justify-center text-center">
              {meal.length === 0 ? (
                <>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-surface">
                    <svg className="h-6 w-6 text-muted/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20V10" />
                      <path d="M18 20V4" />
                      <path d="M6 20v-4" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted">{L.addIngredients}</p>
                </>
              ) : (
                <>
                  <p className="mb-3 text-sm text-muted">{L.selected(meal.length)}</p>
                  <button
                    onClick={() => setCalculated(true)}
                    className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent/20 transition-all hover:bg-accent-dark hover:shadow-lg cursor-pointer"
                  >
                    {L.calculate}
                  </button>
                </>
              )}
            </div>
          ) : (
            <div>
              <p className="mb-4 text-xs font-bold tracking-wider text-muted uppercase">{L.nutritionEstimate}</p>
              <div className="space-y-3">
                {L.macros.map((macro) => (
                  <div key={macro.key} className="flex items-center justify-between">
                    <span className={`text-sm font-semibold ${MACRO_COLORS[macro.key]}`}>{macro.label}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-bold text-primary">{totals[macro.key].toFixed(macro.key === "calories" ? 0 : 1)}</span>
                      <span className="text-xs text-muted">{macro.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-border/40">
                <p className="text-xs text-muted italic">{L.disclaimer}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
