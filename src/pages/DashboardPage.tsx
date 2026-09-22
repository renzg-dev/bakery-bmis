import { useEffect, useState } from "react";
import SectionCards from "@/components/section-cards";
import { stats } from "@/data/dashboard-data";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { invoices } from "@/data/dashboard-data";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const DashboardPage = () => {
  type Post = { id: number; title: string; body: string };
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  const get10Posts = posts.slice(0, 10);

  return (
    <>
      <div className="flex flex-col gap-2">
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
      <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <div>
        <h2 className="mb-2 text-xl font-bold">Recent Posts</h2>
        <ul className="flex flex-col gap-4">
          {get10Posts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DashboardPage;
