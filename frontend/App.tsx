// App.tsx
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">Labodc</div>

        <a className="login" href="#login" aria-label="Đăng nhập">
          ĐĂNG NHẬP
        </a>
      </header>

      <main className="content">
        <section className="card" aria-label="Nội dung chính">
          {/* Nội dung của bạn đặt ở đây */}
        </section>
      </main>
    </div>
  );
}
