export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="w-full mx-auto px-8 max-w-screen-2xl">
        <div className="flex justify-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Prag Dev Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
