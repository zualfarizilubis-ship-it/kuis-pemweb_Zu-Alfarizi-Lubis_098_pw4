import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTodos } from "../context/TodoContext.jsx";
import TodoFormModal from "../components/TodoFormModal.jsx";
import ConfirmModal from "../components/ConfirmModal.jsx";
import { PriorityBadge, StatusBadge } from "../components/Badges.jsx";
import { ArrowLeftIcon, ClipboardIcon, PencilIcon, TrashIcon } from "../components/Icons.jsx";
import { formatDate } from "../utils/format.js";

export default function TodoDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTodo, updateTodo, deleteTodo } = useTodos();
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const todo = getTodo(id);

  return (
    <main className="detail-page">
      <button className="btn btn-back" onClick={() => navigate("/")}>
        <ArrowLeftIcon size={18} /> Kembali
      </button>

      {!todo ? (
        <p className="detail-empty">Tugas tidak ditemukan.</p>
      ) : (
        <>
          <h1 className="detail-title">
            <span className="round-icon md">
              <ClipboardIcon size={20} />
            </span>
            Detail Tugas
          </h1>

          <div className="detail-card">
            <dl>
              <div><dt>Nama Tugas</dt><dd>:</dd><dd>{todo.title}</dd></div>
              <div><dt>Deskripsi</dt><dd>:</dd><dd>{todo.description || "-"}</dd></div>
              <div><dt>Tanggal</dt><dd>:</dd><dd>{formatDate(todo.deadline)}</dd></div>
              <div><dt>Prioritas</dt><dd>:</dd><dd><PriorityBadge priority={todo.priority} /></dd></div>
              <div><dt>Status</dt><dd>:</dd><dd><StatusBadge status={todo.status} /></dd></div>
            </dl>
          </div>

          <div className="detail-actions">
            <button className="btn btn-primary btn-lg" onClick={() => setShowEdit(true)}>
              <PencilIcon size={16} /> Edit
            </button>
            <button className="btn btn-red btn-lg" onClick={() => setShowDelete(true)}>
              <TrashIcon size={16} /> Hapus
            </button>
          </div>

          {showEdit && (
            <TodoFormModal
              mode="edit"
              initial={todo}
              onClose={() => setShowEdit(false)}
              onSubmit={(data) => {
                updateTodo(todo.id, data);
                setShowEdit(false);
              }}
            />
          )}

          {showDelete && (
            <ConfirmModal
              todo={todo}
              onCancel={() => setShowDelete(false)}
              onConfirm={() => {
                deleteTodo(todo.id);
                navigate("/");
              }}
            />
          )}
        </>
      )}
    </main>
  );
}
