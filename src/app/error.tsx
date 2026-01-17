"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="container flex min-h-[calc(100vh-200px)] items-center justify-center">
            <div className="mx-auto max-w-md text-center">
                <h1 className="mb-4 text-6xl font-bold">Oops!</h1>
                <h2 className="mb-4 text-2xl font-semibold">Something went wrong</h2>
                <p className="mb-8 text-muted-foreground">
                    An error occurred while loading this page. Please try again.
                </p>
                <Button size="lg" onClick={reset}>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Try Again
                </Button>
            </div>
        </div>
    );
}
