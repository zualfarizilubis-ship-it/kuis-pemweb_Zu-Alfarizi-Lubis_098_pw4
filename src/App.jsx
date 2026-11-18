import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import TodoListPage from "./pages/TodoListPage.jsx";
import TodoDetailPage from "./pages/TodoDetailPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Toast from "./components/Toast.jsx";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <>
      <Routes>
        <Route element={<Layout theme={theme} toggleTheme={toggleTheme} />}>
          <Route path="/" element={<TodoListPage />} />
          <Route path="/tentang" element={<AboutPage />} />
        </Route>
        <Route path="/todo/:id" element={<TodoDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toast />
    </>
  );
}
