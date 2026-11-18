# Todo List – Kuis Praktikum Frontend React.js

Aplikasi To-Do List berbasis **React.js (Vite)** untuk mengelola daftar tugas harian.
Hanya bagian frontend dengan **data dummy** dan **React State**; belum memanggil REST API.

## Tampilan
Desain mengikuti mockup: sidebar biru tua (Dashboard, Tambah Tugas, Tentang), tabel tugas dengan badge status, modal tambah/edit, halaman detail dengan tombol Edit dan Hapus, serta tombol ganti tema terang/gelap.

## Fitur
- Menampilkan daftar tugas (judul, status, prioritas, deadline)
- Melihat detail tugas (`/todo/:id`) dengan klik nama tugas
- Menambah tugas lewat form modal (dengan validasi)
- Memperbarui tugas lewat form modal
- Menghapus tugas dengan dialog konfirmasi
- Umpan balik berupa notifikasi (toast) setiap operasi berhasil
- Perubahan langsung tampil tanpa reload halaman

## Struktur Data Tugas
```js
{
  id: 1,
  title: "Mengerjakan Proyek Computer Vision",
  description: "...",
  priority: "high",        // low | medium | high
  deadline: "2026-10-11",  // YYYY-MM-DD
  status: "in progress"    // to-do | in progress | done
}
```
Struktur ini sudah sesuai dengan endpoint referensi:

| Endpoint | Method | Keterangan |
|---|---|---|
| `/api/todos` | GET | Mengambil semua tugas |
| `/api/todos/:id` | GET | Mengambil tugas berdasarkan ID |
| `/api/todos` | POST | Menambah tugas |
| `/api/todos/:id` | PUT | Memperbarui tugas |
| `/api/todos/:id` | DELETE | Menghapus tugas |

Seluruh operasi data terpusat di `src/context/TodoContext.jsx` (`addTodo`, `updateTodo`, `deleteTodo`, `getTodo`), jadi saat integrasi API cukup mengganti isi fungsi-fungsi tersebut.

## Menjalankan Aplikasi
```bash
npm install
npm run dev
```
Buka `http://localhost:5173`.

## Struktur Folder
```
src/
├── components/   Layout (sidebar + topbar), Modal, ConfirmModal, TodoFormModal, Badges, Icons, Toast
├── context/      TodoContext (state global)
├── data/         dummyTodos
├── pages/        TodoListPage, TodoDetailPage, AboutPage
├── utils/        format (label status/prioritas, format tanggal)
├── App.jsx
├── main.jsx
└── index.css
```

## Screenshot
> Ganti gambar di bawah dengan screenshot dari aplikasi yang sudah dijalankan (simpan di folder `screenshots/`).

### Daftar Tugas
![Daftar](screenshots/list.png)

### Tambah Tugas
![Tambah](screenshots/add.png)

### Detail Tugas
![Detail](screenshots/detail.png)

<img width="960" height="600" alt="image" src="https://github.com/user-attachments/assets/3f635b2a-3ac2-4f04-9e85-39ca20e36d90" />



### Edit Tugas
![Update](screenshots/update.png)

### Konfirmasi Hapus
![Hapus](screenshots/delete.png)
