import { useState } from "react";
import Modal from "./Modal.jsx";
import { PencilIcon, PlusIcon } from "./Icons.jsx";
import { PRIORITY_OPTIONS, STATUS_OPTIONS } from "../data/dummyTodos.js";
import { PRIORITY_LABEL, STATUS_LABEL } from "../utils/format.js";

const emptyForm = {
  title: "",
  description: "",
  status: "to-do",
  priority: "low",
  deadline: "",
};

export default function TodoFormModal({ mode = "add", initial, onSubmit, onClose }) {
  const [form, setForm] = useState(
    initial
      ? {
          title: initial.title,
          description: initial.description,
          status: initial.status,
          priority: initial.priority,
          deadline: initial.deadline,
        }
      : emptyForm
  );
  const [errors, setErrors] = useState({});

  const isEdit = mode === "edit";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.title.trim()) next.title = "Nama tugas wajib diisi";
    if (!form.deadline) next.deadline = "Tanggal wajib diisi";
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    onSubmit({ ...form, title: form.title.trim(), description: form.description.trim() });
  };

  return (
    <Modal
      title={isEdit ? "Edit Tugas" : "Tambah Tugas"}
      icon={isEdit ? <PencilIcon size={16} /> : <PlusIcon size={16} />}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit} noValidate>
        <label className="field">
          <span>Nama Tugas</span>
          <input
            name="title"
            placeholder="Masukkan nama tugas..."
            value={form.title}
            onChange={handleChange}
          />
          {errors.title && <small className="error">{errors.title}</small>}
        </label>

        <label className="field">
          <span>Deskripsi</span>
          <textarea
            name="description"
            rows={3}
            placeholder="Tulis deskripsi tugas..."
            value={form.description}
            onChange={handleChange}
          />
        </label>

        <label className="field">
          <span>Tanggal</span>
          <input type="date" name="deadline" value={form.deadline} onChange={handleChange} />
          {errors.deadline && <small className="error">{errors.deadline}</small>}
        </label>

        <div className="row">
          <label className="field">
            <span>Status</span>
            <select name="status" value={form.status} onChange={handleChange}>
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {STATUS_LABEL[s]}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Prioritas</span>
            <select name="priority" value={form.priority} onChange={handleChange}>
              {PRIORITY_OPTIONS.map((p) => (
                <option key={p} value={p}>
                  {PRIORITY_LABEL[p]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="btn-row">
          <button type="button" className="btn btn-soft" onClick={onClose}>
            Batal
          </button>
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </div>
      </form>
    </Modal>
  );
}
