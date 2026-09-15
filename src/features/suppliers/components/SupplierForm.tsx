import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusIcon } from "lucide-react";
import {
  supplierCategories,
  supplierCodes,
} from "@/features/suppliers/data/suppliers-data";
import React from "react";

const SupplierForm = () => {
  return (
    <>
      {/* Supplier Form */}
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <PlusIcon />
            Add Supplier
          </Button>
        </DialogTrigger>
        <DialogContent>
          <form>
            <DialogHeader>
              <DialogTitle>Add Supplier</DialogTitle>
              <DialogDescription>
                Add a new supplier by filling out the form below.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4">
              <div className="flex flex-col gap-2">
                {/* Supplier Name Field */}
                <Label htmlFor="supplier-name">Supplier Name</Label>
                <Input id="supplier-name" name="supplier-name" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  {/* Category Field */}
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category" className="w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {supplierCategories.map((category) => (
                        <SelectItem
                          key={category}
                          value={category.toLowerCase()}
                        >
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  {/* Supplier Code Field */}
                  <Label htmlFor="code">Supplier Code</Label>
                  <Select>
                    <SelectTrigger id="code" className="w-full">
                      <SelectValue placeholder="Select a code" />
                    </SelectTrigger>
                    <SelectContent>
                      {supplierCodes.map((code) => (
                        <SelectItem key={code} value={code.toLowerCase()}>
                          {code}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {/* Supplier Contact Field */}
                <Label htmlFor="supplier-contact">Supplier Contact</Label>
                <Input id="supplier-contact" name="supplier-contact" />
              </div>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SupplierForm;
