export function Toast({ message }: { message: string | null }) {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="animate-toast-in fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-xl border-[3px] border-ink bg-green px-5 py-3 font-bold text-black shadow-neo"
    >
      ✓ {message}
    </div>
  );
}
