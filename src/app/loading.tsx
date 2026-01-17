export default function Loading() {
    return (
        <div className="container flex min-h-[calc(100vh-200px)] items-center justify-center py-12 md:py-24">
            <div className="flex flex-col items-center gap-4">
                <div className="size-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                <p className="text-sm text-muted-foreground">Loading...</p>
            </div>
        </div>
    );
}
