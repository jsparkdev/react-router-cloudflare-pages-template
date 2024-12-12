import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export function meta() {
  return [
    { title: "Page Not Found" },
    {
      property: "og:title",
      content: "Page Not Found",
    },
    {
      name: "description",
      content: "Page Not Found",
    },
  ];
}

export default function NotFound() {
  return (
    <main className="flex flex-col justify-center h-screen gap-4">
      <h1 className="font-bold text-4xl text-center text-balance">
        Page Not Found
      </h1>
      <div className="flex justify-center gap-4 flex-wrap">
        <Button asChild className="w-[200px]">
          <Link to="/">Go to Home</Link>
        </Button>
      </div>
    </main>
  );
}
