// Struktur data mengikuti atribut pada ketentuan kuis, sehingga
// nanti mudah diganti dengan response dari REST API (/api/todos).
export const STATUS_OPTIONS = ["to-do", "in progress", "done"];
export const PRIORITY_OPTIONS = ["low", "medium", "high"];

export const dummyTodos = [
  {
    id: 1,
    title: "Belajar React",
    description: "Mempelajari komponen, props, state, dan React Hooks.",
    priority: "high",
    deadline: "2026-11-18",
    status: "to-do",
  },
  {
    id: 2,
    title: "Tugas Basis Data",
    description: "Menyelesaikan DDL, DML, dan aljabar relasional di PostgreSQL.",
    priority: "medium",
    deadline: "2026-11-17",
    status: "done",
  },
  {
    id: 3,
    title: "Bikin Laporan ANFIS",
    description: "Menyusun laporan praktikum ANFIS beserta analisis hasilnya.",
    priority: "medium",
    deadline: "2026-11-16",
    status: "in progress",
  },
  {
    id: 4,
    title: "Main Game",
    description: "Istirahat sejenak setelah semua tugas selesai.",
    priority: "low",
    deadline: "2026-11-15",
    status: "done",
  },
];
