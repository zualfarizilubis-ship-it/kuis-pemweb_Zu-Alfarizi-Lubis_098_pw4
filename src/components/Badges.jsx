import { PRIORITY_LABEL, STATUS_LABEL } from "../utils/format.js";

export function StatusBadge({ status }) {
  return (
    <span className={`badge s-${status.replace(" ", "-")}`}>
      {STATUS_LABEL[status] ?? status}
    </span>
  );
}

export function PriorityBadge({ priority }) {
  return (
    <span className={`badge p-${priority}`}>
      {PRIORITY_LABEL[priority] ?? priority}
    </span>
  );
}
