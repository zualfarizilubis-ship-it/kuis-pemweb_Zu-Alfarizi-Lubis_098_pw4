import { InfoIcon } from "../components/Icons.jsx";

export default function AboutPage() {
  return (
    <>
      <header className="page-header">
        <div className="page-title">
          <span className="round-icon lg">
            <InfoIcon size={26} />
          </span>
          <div>
            <h1>Tentang</h1>
            <p>Informasi singkat aplikasi</p>
          </div>
        </div>
      </header>
      <div className="table-card about">
        <p>
          Aplikasi To-Do List ini dibuat dengan React.js untuk Kuis Praktikum
          Pengembangan Frontend. Data masih berupa data dummy yang dikelola dengan
          React State, dan struktur datanya sudah disiapkan untuk integrasi REST API.
        </p>
      </div>
    </>
  );
}
