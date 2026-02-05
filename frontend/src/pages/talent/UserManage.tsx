import { useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "/src/pages/talent/UserManage.css";

type ActionCard = {
  title: string;
  desc: string;
  onClick?: () => void;
};

export default function UserManage() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  const tabs = useMemo(
    () => [
      {
        key: "settings",
        label: "Cấu hình hệ thống",
        onClick: () => navigate("/talent/settings"),
        active: false,
      },
      {
        key: "users",
        label: "Quản lí người dùng",
        onClick: () => {
          navigate("/talent/users");
          requestAnimationFrame(() => {
            sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          });
        },
        active: true,
      },
      {
        key: "templates",
        label: "Template Excel / Docs",
        onClick: () => navigate("/talent/templates"),
        active: false,
      },
    ],
    [navigate]
  );

  const userCards: ActionCard[] = useMemo(
    () => [
      {
        title: "Role",
        desc: "Quản lý vai trò người dùng",
        onClick: () => navigate("/talent/users/role"),
      },
      {
        title: "Phân quyền",
        desc: "Thiết lập quyền truy cập hệ thống",
        onClick: () => navigate("/talent/users/permission"),
      },
      {
        title: "Khóa / mở tài khoản",
        desc: "Quản lý trạng thái tài khoản người dùng",
        onClick: () => navigate("/talent/users/unlock"),
      },
    ],
    [navigate]
  );

  return (
    <div className="dashboard-page">
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
                  Kết nối doanh nghiệp với dự án thực tế — minh bạch tiến độ, mentor
                  giám sát.
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
        <div className="tabs-shell">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              className={`tab-item ${t.active ? "is-active" : ""}`}
              onClick={t.onClick}
            >
              {t.label}
            </button>
          ))}
        </div>
      </section>

      <section className="details-wrap" ref={sectionRef}>
        <div className="details-box">
          <div className="details-head">
            <div className="details-title">Quản lí người dùng</div>
            <div className="details-desc">
              Quản trị vai trò → phân quyền → khóa/mở tài khoản.
            </div>
          </div>

          <div className="details-grid details-grid--3">
            {userCards.map((c) => (
              <button
                key={c.title}
                type="button"
                className="details-card"
                onClick={c.onClick}
              >
                <div className="details-card-title">{c.title}</div>
                <div className="details-card-desc">{c.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="footer">
        <button className="logout" type="button" onClick={handleLogout}>
          Đăng xuất
        </button>
      </div>
    </div>
  );
}
