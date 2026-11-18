import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useTodos } from "../context/TodoContext.jsx";
import TodoFormModal from "../components/TodoFormModal.jsx";
import ConfirmModal from "../components/ConfirmModal.jsx";
import { PriorityBadge, StatusBadge } from "../components/Badges.jsx";
import { CheckIcon, PencilIcon, PlusIcon, TrashIcon } from "../components/Icons.jsx";
import { formatDate } from "../utils/format.js";

export default function TodoListPage() {
  const { todos, updateTodo, deleteTodo } = useTodos();
  const { openAdd } = useOutletContext();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(null);
  const [toDelete, setToDelete] = useState(null);

  return (
    <>
      <header className="page-header">
        <div className="page-title">
          <span className="round-icon lg">
            <CheckIcon size={26} />
          </span>
          <div>
            <h1>To-Do List</h1>
            <p>Kelola tugasmu dengan mudah!</p>
          </div>
        </div>
        <button className="btn btn-primary btn-lg" onClick={openAdd}>
          <PlusIcon size={16} /> Tambah Tugas
        </button>
      </header>

      <div className="table-card">
        <table className="todo-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Tugas</th>
              <th>Tanggal</th>
              <th>Prioritas</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {todos.length === 0 ? (
              <tr>
                <td colSpan={6} className="empty">
                  Belum ada tugas. Klik "Tambah Tugas" untuk membuat tugas baru.
                </td>
              </tr>
            ) : (
              todos.map((todo, i) => (
                <tr key={todo.id}>
                  <td>{i + 1}</td>
                  <td>
                    <button
                      className="link-btn"
                      title="Lihat detail"
                      onClick={() => navigate(`/todo/${todo.id}`)}
                    >
                      {todo.title}
                    </button>
                  </td>
                  <td>{formatDate(todo.deadline)}</td>
                  <td>
                    <PriorityBadge priority={todo.priority} />
                  </td>
                  <td>
                    <StatusBadge status={todo.status} />
                  </td>
                  <td>
                    <div className="actions">
                      <button
                        className="icon-btn icon-blue"
                        aria-label={`Edit ${todo.title}`}
                        onClick={() => setEditing(todo)}
                      >
                        <PencilIcon size={15} />
                      </button>
                      <button
                        className="icon-btn icon-red"
                        aria-label={`Hapus ${todo.title}`}
                        onClick={() => setToDelete(todo)}
                      >
                        <TrashIcon size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {editing && (
        <TodoFormModal
          mode="edit"
          initial={editing}
          onClose={() => setEditing(null)}
          onSubmit={(data) => {
            updateTodo(editing.id, data);
            setEditing(null);
          }}
        />
      )}

      {toDelete && (
        <ConfirmModal
          todo={toDelete}
          onCancel={() => setToDelete(null)}
          onConfirm={() => {
            deleteTodo(toDelete.id);
            setToDelete(null);
          }}
        />
      )}
    </>
  );
}
