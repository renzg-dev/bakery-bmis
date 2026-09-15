import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-6xl font-bold">404</p>

      <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>

      <p className="mt-2 max-w-md text-muted-foreground">
        Sorry, we couldn't find the page you're looking for.
      </p>

      <Button asChild className="mt-6">
        <Link to="/">Back to Dashboard</Link>
      </Button>
    </div>
  );
};

export default NotFound;
