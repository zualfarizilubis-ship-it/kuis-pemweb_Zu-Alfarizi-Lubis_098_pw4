import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useTodos } from "../context/TodoContext.jsx";
import TodoFormModal from "./TodoFormModal.jsx";
import {
  CheckIcon,
  HomeIcon,
  InfoIcon,
  MoonIcon,
  PlusIcon,
  SunIcon,
  UserIcon,
} from "./Icons.jsx";

export default function Layout({ theme, toggleTheme }) {
  const { addTodo } = useTodos();
  const [showAdd, setShowAdd] = useState(false);

  const navClass = ({ isActive }) => `nav-item${isActive ? " active" : ""}`;

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-icon">
            <CheckIcon size={18} />
          </span>
          To-Do List
        </div>
        <nav className="nav">
          <NavLink to="/" end className={navClass}>
            <HomeIcon /> Dashboard
          </NavLink>
          <button className="nav-item" onClick={() => setShowAdd(true)}>
            <PlusIcon /> Tambah Tugas
          </button>
          <NavLink to="/tentang" className={navClass}>
            <InfoIcon /> Tentang
          </NavLink>
        </nav>
        <svg className="wave" viewBox="0 0 220 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 60 C40 70 60 20 110 30 C150 38 170 10 220 20 V90 H0 Z" fill="rgba(59,130,246,.35)" />
        </svg>
      </aside>

      <div className="main">
        <div className="topbar">
          <button className="top-icon" aria-label="Ganti tema" onClick={toggleTheme}>
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          </button>
          <span className="avatar">
            <UserIcon size={20} />
          </span>
        </div>
        <div className="content">
          <Outlet context={{ openAdd: () => setShowAdd(true) }} />
        </div>
      </div>

      {showAdd && (
        <TodoFormModal
          mode="add"
          onClose={() => setShowAdd(false)}
          onSubmit={(data) => {
            addTodo(data);
            setShowAdd(false);
          }}
        />
      )}
    </div>
  );
}
