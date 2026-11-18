import { CloseIcon } from "./Icons.jsx";

export default function Modal({ title, icon, onClose, children }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <span className="round-icon sm">{icon}</span>
          <h2>{title}</h2>
          <button className="close-btn" aria-label="Tutup" onClick={onClose}>
            <CloseIcon size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
