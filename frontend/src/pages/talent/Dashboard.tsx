import { useNavigate } from "react-router-dom";
import "/src/pages/talent/Dashboard.css";

type NavItem = {
  label: string;
  path: string;
};

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };
const handleBackToLanding = () => {
    navigate("/landing");
  };
  const navItems: NavItem[] = [
    { label: "Cấu hình hệ thống", path: "/talent/settings" },
    { label: "Quản lí người dùng", path: "/talent/users" },
    { label: "Template Excel / Docs", path: "/talent/templates" },
  ];

  return (
    <div className="dashboard-bg">
      <header className="dashboard-header">
        <div className="hero-shell">
          <div className="hero-left">
            <div className="brand-row">
              <div className="logo-box">L</div>

              <div className="brand-col">
                <div className="brand-title-row">
                  <div className="brand-title">Labodc</div>
                  <span className="badge">Admin</span>
                </div>

                <p className="brand-sub">
                  Kết nối doanh nghiệp với dự án thực tế — minh bạch tiến độ,
                  mentor giám sát.
                </p>

                <div className="chip-row">
                  <span className="chip">ODC Management</span>
                  <span className="chip">Payos</span>
                  <span className="chip">Reports</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-illus" aria-hidden="true">
            <div className="illus-card">
              <div className="illus-line w70" />
              <div className="illus-line w50" />
              <div className="illus-bars">
                <span className="bar h40" />
                <span className="bar h65" />
                <span className="bar h50" />
                <span className="bar h80" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="dashboard-tabs">
        <div className="tabs-shell tabs-shell--3">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className="tab-item"
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      {/* FOOTER ACTIONS */}
      <div className="footer-actions footer-actions--right">
        {/* ✅ về landing */}
        <button className="btn" type="button" onClick={handleBackToLanding}>
          ← Về Landing
        </button>
        <button className="btn logout-btn" type="button" onClick={handleLogout}>
          Đăng xuất
        </button>
      </div>
    </div>
  );
}
