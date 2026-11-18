import Modal from "./Modal.jsx";
import { TrashIcon } from "./Icons.jsx";

export default function ConfirmModal({ todo, onConfirm, onCancel }) {
  return (
    <Modal title="Hapus Tugas" icon={<TrashIcon size={16} />} onClose={onCancel}>
      <p className="confirm-text">
        Apakah Anda yakin ingin menghapus tugas <strong>"{todo.title}"</strong>?
        Tindakan ini tidak dapat dibatalkan.
      </p>
      <div className="btn-row">
        <button className="btn btn-soft" onClick={onCancel}>
          Batal
        </button>
        <button className="btn btn-red" onClick={onConfirm}>
          Hapus
        </button>
      </div>
    </Modal>
  );
}
