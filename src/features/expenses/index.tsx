import { useState, type FormEvent } from "react";
import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  expenseCategories,
  initialExpenses,
  type Expense,
} from "@/features/expenses/data/expenses-data";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const emptyFormState = {
  description: "",
  category: "",
  amount: "",
  date: new Date().toISOString().slice(0, 10),
  notes: "",
};

// Expenses feature component for managing bakery expenses.
const Expenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(emptyFormState);
  const [error, setError] = useState<string | null>(null);

  const resetForm = () => {
    setForm(emptyFormState);
    setError(null);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      resetForm();
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const amount = parseFloat(form.amount);

    if (!form.description.trim()) {
      setError("Please enter a description.");
      return;
    }
    if (!form.category) {
      setError("Please select a category.");
      return;
    }
    if (!form.date) {
      setError("Please select a date.");
      return;
    }
    if (Number.isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount greater than 0.");
      return;
    }

    const newExpense: Expense = {
      id: `EXP${String(expenses.length + 1).padStart(3, "0")}`,
      description: form.description.trim(),
      category: form.category,
      amount,
      date: form.date,
      notes: form.notes.trim() || undefined,
    };

    setExpenses((prev) => [newExpense, ...prev]);
    handleOpenChange(false);
  };

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Expenses</h1>
          <p className="text-muted-foreground">Manage your expenses.</p>
        </div>

        <Dialog open={open} onOpenChange={handleOpenChange}>
          <DialogTrigger asChild>
            <Button>
              <PlusIcon />
              Add Expense
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle>Add Expense</DialogTitle>
                <DialogDescription>
                  Record a new expense for your bakery.
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-col gap-4 py-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    placeholder="e.g. Flour and sugar restock"
                    value={form.description}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        description: event.target.value,
                      }))
                    }
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={form.category}
                    onValueChange={(value) =>
                      setForm((prev) => ({ ...prev, category: value }))
                    }
                  >
                    <SelectTrigger id="category" className="w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {expenseCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      value={form.amount}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          amount: event.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={form.date}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          date: event.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="notes">Notes (optional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Additional details about this expense"
                    value={form.notes}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        notes: event.target.value,
                      }))
                    }
                  />
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit">Save Expense</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {expenses.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center text-muted-foreground"
                  >
                    No expenses recorded yet.
                  </TableCell>
                </TableRow>
              )}
              {expenses.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell>{expense.description}</TableCell>
                  <TableCell>{expense.category}</TableCell>
                  <TableCell>{expense.date}</TableCell>
                  <TableCell className="text-right">
                    {currencyFormatter.format(expense.amount)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {expenses.length > 0 && (
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3} className="font-medium">
                    Total
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {currencyFormatter.format(totalExpenses)}
                  </TableCell>
                </TableRow>
              </TableFooter>
            )}
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Expenses;
