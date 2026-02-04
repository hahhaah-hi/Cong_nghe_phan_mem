import { useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "/src/pages/talent/ExcelTemplate.css";

type ActionCard = {
  title: string;
  desc: string;
  onClick?: () => void;
};

export default function ExcelTemplate() {
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
        onClick: () => navigate("/talent/users"),
        active: false,
      },
      {
        key: "templates",
        label: "Template Excel / Docs",
        onClick: () => {
          navigate("/talent/templates");
          requestAnimationFrame(() => {
            sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          });
        },
        active: true,
      },
    ],
    [navigate]
  );

  const templateCards: ActionCard[] = useMemo(
    () => [
      {
        title: "Tải lên",
        desc: "Tải lên template Excel / Docs",
        onClick: () => navigate("/talent/templates/upload"),
      },
      {
        title: "Cập nhật",
        desc: "Chỉnh sửa / cập nhật template đang có",
        onClick: () => navigate("/talent/templates/update"),
      },
      {
        title: "Xóa ",
        desc: "Xóa template không còn sử dụng",
        onClick: () => navigate("/talent/templates/delete"),
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

      {/* TABS */}
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

      {/* DETAILS */}
      <section className="details-wrap" ref={sectionRef}>
        <div className="details-box">
          <div className="details-head">
            <div className="details-title">Template Excel / Docs</div>
            <div className="details-desc">
              Quản lý template → tải lên → cập nhật → xóa form.
            </div>
          </div>

          <div className="details-grid details-grid--3">
            {templateCards.map((c) => (
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
