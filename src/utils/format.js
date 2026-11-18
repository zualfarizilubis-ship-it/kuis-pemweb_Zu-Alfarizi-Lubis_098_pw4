export const STATUS_LABEL = {
  "to-do": "Pending",
  "in progress": "Diproses",
  done: "Selesai",
};

export const PRIORITY_LABEL = {
  low: "Rendah",
  medium: "Sedang",
  high: "Tinggi",
};

// Data disimpan sebagai YYYY-MM-DD (cocok untuk REST API), ditampilkan DD-MM-YYYY.
export function formatDate(iso) {
  if (!iso) return "-";
  const [y, m, d] = iso.split("-");
  return `${d}-${m}-${y}`;
}
