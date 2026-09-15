export type Expense = {
  id: string;
  description: string;
  category: string;
  amount: number;
  date: string;
  notes?: string;
};

export const expenseCategories = [
  "Ingredients",
  "Utilities",
  "Rent",
  "Equipment",
  "Salaries",
  "Marketing",
  "Other",
] as const;

export const initialExpenses: Expense[] = [
  {
    id: "EXP001",
    description: "Flour and sugar restock",
    category: "Ingredients",
    amount: 320.5,
    date: "2025-01-05",
  },
  {
    id: "EXP002",
    description: "Electricity bill",
    category: "Utilities",
    amount: 145.2,
    date: "2025-01-10",
  },
  {
    id: "EXP003",
    description: "Store rent",
    category: "Rent",
    amount: 1500,
    date: "2025-01-01",
  },
];
