import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">Labodc</div>
        <Link className="loginLink" to="/login">
          ĐĂNG NHẬP
        </Link>
      </header>

      <main className="content">
        <section className="card homeCard">
          <div className="hint">Nhấn “ĐĂNG NHẬP” để vào hệ thống.</div>
        </section>
      </main>
    </div>
  );
}
