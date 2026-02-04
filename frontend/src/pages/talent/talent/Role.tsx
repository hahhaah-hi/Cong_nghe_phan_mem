import { Link } from "react-router-dom";
import "./Role.css";

export default function Role() {
  return (
    <div className="dashboard-bg">
      <div className="dashboard-browser">
        <div className="browser-left">
        </div>
        <div className="browser-addr" />
        <div className="browser-right">
          <span className="dot gray" />
          <span className="dot gray" />
          <span className="dot gray" />
        </div>
      </div>

      <header className="dashboard-header">
        <div className="role-head">
          <div className="dashboard-brand">Labodc</div>
        </div>
      </header>

      <main className="role-wrap">
        <h2 className="role-page-title">Vai trò</h2>

        <section className="role-card">
          <div className="role-hero">
            <div className="role-hero-icon">👥</div>
          </div>

          <div className="role-tabs">
            <button className="role-tab active" type="button">
              <span className="role-tab-ico">💻</span>
              Quản trị viên
            </button>

            <button className="role-tab" type="button">
              <span className="role-tab-ico">🏢</span>
              Doanh nghiệp
            </button>

            <button className="role-tab" type="button">
              <span className="role-tab-ico">🎓</span>
              Sinh viên
            </button>
          </div>
        </section>
      </main>

      <Link className="btn home-btn" to="/talent/users">
        ← Quay lại
      </Link>
    </div>
  );
}
