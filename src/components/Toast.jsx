import { useEffect } from "react";
import { useTodos } from "../context/TodoContext.jsx";

export default function Toast() {
  const { toast, clearToast } = useTodos();

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(clearToast, 2500);
    return () => clearTimeout(timer);
  }, [toast, clearToast]);

  if (!toast) return null;
  return (
    <div className={`toast toast-${toast.type}`} role="status">
      {toast.message}
    </div>
  );
}
