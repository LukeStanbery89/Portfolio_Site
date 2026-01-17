import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="container flex min-h-[calc(100vh-200px)] items-center justify-center">
            <div className="mx-auto max-w-md text-center">
                <h1 className="mb-4 text-6xl font-bold">404</h1>
                <h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
                <p className="mb-8 text-muted-foreground">
                    Sorry, we couldn't find the page you're looking for. It might have been moved or
                    deleted.
                </p>
                <Button asChild size="lg">
                    <Link href="/">
                        <Home className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
            </div>
        </div>
    );
}
