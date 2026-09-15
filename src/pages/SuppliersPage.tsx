import { SupplierForm } from "@/features/suppliers";
// import { supplierCategories, supplierCodes } from "./data/suppliers-data";

const Suppliers = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Suppliers</h1>
          <p className="text-muted-foreground">Manage your suppliers.</p>
        </div>

        {/* Supplier Form */}
        <SupplierForm />
      </div>
    </div>
  );
};
export default Suppliers;
