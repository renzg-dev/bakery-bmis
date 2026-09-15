import SectionCards from "@/components/section-cards";

const stats = [
  {
    title: "Total Revenue",
    value: "$4,300",
    trend: "+8%",
  },
  {
    title: "Total Sales",
    value: "$12,500",
    trend: "+5%",
  },
  {
    title: "Total Expenses",
    value: "$8,200",
    trend: "-3%",
  },
  {
    title: "Total Customers",
    value: "1,200",
    trend: "+10%",
  },
];

const dashboard = () => {
  return (
    <>
      <div className="mb-4 flex flex-col gap-2 px-4 @xl/main:px-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your bakery management system.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        {stats.map((stat) => (
          <SectionCards
            key={stat.title}
            title={stat.title}
            value={stat.value}
            trend={stat.trend}
          />
        ))}
      </div>
    </>
  );
};

export default dashboard;
