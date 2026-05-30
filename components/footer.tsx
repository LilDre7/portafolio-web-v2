export default function Footer() {
  return (
    <footer className="pt-8 pb-2">
      <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-gray-700">
        <span className="h-px flex-1 bg-white/5" aria-hidden="true" />
        <span>End of page</span>
        <span className="h-px flex-1 bg-white/5" aria-hidden="true" />
      </div>

      <p className="mt-5 text-center text-sm leading-relaxed text-gray-500">
        Small details. Strong systems. Quietly shipped.
      </p>
    </footer>
  );
}
