import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Expense } from "@/features/expenses/data/expenses-data";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

type ExpenseDetailsDialogProps = {
  expense: Expense | null;
  onOpenChange: (open: boolean) => void;
};

// Dialog that shows the full details of an expense, opened by clicking a table row.
export const ExpenseDetailsDialog = ({
  expense,
  onOpenChange,
}: ExpenseDetailsDialogProps) => {
  return (
    <Dialog open={expense !== null} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Expense Details</DialogTitle>
          <DialogDescription>
            {expense?.id ? `Reference: ${expense.id}` : ""}
          </DialogDescription>
        </DialogHeader>

        {expense && (
          <div className="flex flex-col gap-4 py-2 text-sm">
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground">Description</span>
              <span className="font-medium">{expense.description}</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground">Category</span>
                <span className="font-medium">{expense.category}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground">Date</span>
                <span className="font-medium">{expense.date}</span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground">Amount</span>
              <span className="font-medium">
                {currencyFormatter.format(expense.amount)}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground">Notes</span>
              <span className="font-medium">
                {expense.notes || "No additional notes."}
              </span>
            </div>
          </div>
        )}

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
