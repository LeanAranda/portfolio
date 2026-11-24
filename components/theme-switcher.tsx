"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Cambiar tema"
        className="rounded-md border border-foreground/20 px-3 py-2 text-sm"
        disabled
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-md border border-foreground/20 px-3 py-2 text-sm"
    >
      {isDark ? "☀" : "☾"}
    </button>
  );
}
