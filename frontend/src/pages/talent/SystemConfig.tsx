import { useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "/src/pages/talent/SystemConfig.css";

type ActionCard = {
  title: string;
  desc: string;
  onClick?: () => void;
};

export default function SystemConfig() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  const handleBackToLanding = () => {
    navigate("/landing");
  };

  const tabs = useMemo(
    () => [
      {
        key: "settings",
        label: "Cấu hình hệ thống",
        onClick: () => {
          navigate("/talent/settings");
          requestAnimationFrame(() => {
            sectionRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          });
        },
        active: true,
      },
      {
        key: "users",
        label: "Quản lí người dùng",
        onClick: () => navigate("/talent/users"),
        active: false,
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

  const settingsCards: ActionCard[] = useMemo(
    () => [
      {
        title: "Cấu hình ứng dụng",
        desc: "Cài đặt thông số và cấu hình ứng dụng",
        onClick: () => navigate("/talent/settings/app"),
      },
      {
        title: "Bảo mật JWT session",
        desc: "Thiết lập và bảo vệ JWT",
        onClick: () => navigate("/talent/settings/jwt"),
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
                  Kết nối doanh nghiệp với dự án thực tế — minh bạch tiến độ, mentor giám sát.
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
            <div className="details-title">Cấu hình hệ thống</div>
            <div className="details-desc">
              Thiết lập hệ thống → JWT/session → theo dõi &amp; bảo mật.
            </div>
          </div>

          <div className="details-grid details-grid--2">
            {settingsCards.map((c) => (
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

      {/* FOOTER */}
      <div className="footer">
        <div className="footer-actions">
          <div>
            <button
              className="btn btn-ghost"
              type="button"
              onClick={handleBackToLanding}
            >
              ← Về trang chủ 
            </button>
          </div>

          <div>
            <button className="btn btn-primary" type="button" onClick={handleLogout}>
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
