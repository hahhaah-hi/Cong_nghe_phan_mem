import { Link, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import "./ProjectFlow.css";
import ProjectSideMenu from "./ProjectSideMenu";

type ProjectStatusKey = "processing" | "approved" | "rejected";

type TopItem = { title: string; to: string };

const topItems: TopItem[] = [
  { title: "Hồ sơ doanh nghiệp", to: "/enterprise/company" },
  { title: "Quản lý dự án", to: "/enterprise/projects" },
  { title: "Thanh toán", to: "/enterprise/payments" },
  { title: "Thay đổi hoặc huỷ dự án", to: "/enterprise/change/change-cancel-flow" },
  { title: "Báo cáo và đánh giá", to: "/enterprise/reports" },
];

function statusLabel(key: ProjectStatusKey): string {
  if (key === "approved") return "Đã duyệt";
  if (key === "rejected") return "Từ chối";
  return "Đang xử lý";
}

function statusBadge(key: ProjectStatusKey): string {
  if (key === "approved") return "✅";
  if (key === "rejected") return "⛔";
  return "⏳";
}

export default function ProjectStatus() {
  const { pathname } = useLocation();

  const initial = (localStorage.getItem("projectStatus") as ProjectStatusKey) || "processing";
  const [statusKey, setStatusKey] = useState<ProjectStatusKey>(initial);

  const name = useMemo(() => {
    const raw = localStorage.getItem("projectDraft");
    return raw ? JSON.parse(raw)?.name : "Dự án (chưa có)";
  }, []);

  const setAndSave = (k: ProjectStatusKey) => {
    setStatusKey(k);
    localStorage.setItem("projectStatus", k);
  };

  return (
    <div className="pf">
      <div className="pf__wrap">
        <div className="pf__brand">Labodc</div>

        {/* TOP NAV */}
        <div className="pf__topNav">
          {topItems.map((it) => {
            const active = pathname.startsWith(it.to);
            return (
              <Link
                key={it.to}
                to={it.to}
                className={`pf__topItem ${active ? "pf__topItem--active" : ""}`}
              >
                <div className="pf__topHead">
                  <span className="pf__topDot" />
                  <span className="pf__topDot" />
                  <div className="pf__topTitle">{it.title}</div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="pf__card">
          <div className="pf__title">Trạng thái dự án</div>
          <div className="pf__subtitle">Bước 4/4 theo sơ đồ.</div>

          <div className="pf__layout">
            <div className="pf__side">
              <ProjectSideMenu />
            </div>

            <div>
              <div className="pf__statusBox" style={{ marginTop: 0 }}>
                <div className="pf__statusLeft">
                  <div className="pf__statusLabel">Dự án</div>
                  <div className="pf__statusValue" style={{ fontSize: 18 }}>
                    {name}
                  </div>
                  <div style={{ marginTop: 6, color: "rgba(19,42,42,0.62)", fontWeight: 700 }}>
                    Trạng thái: {statusLabel(statusKey)}
                  </div>
                </div>
                <div className="pf__badge">{statusBadge(statusKey)}</div>
              </div>

              {/* demo đổi trạng thái */}
              <div className="pf__btnRow pf__btnRow--left" style={{ marginTop: 12 }}>
                <button className="pf__btn pf__btn--ghost" type="button" onClick={() => setAndSave("processing")}>
                  Set: Đang xử lý
                </button>
                <button className="pf__btn pf__btn--ghost" type="button" onClick={() => setAndSave("approved")}>
                  Set: Đã duyệt
                </button>
                <button className="pf__btn pf__btn--ghost" type="button" onClick={() => setAndSave("rejected")}>
                  Set: Từ chối
                </button>
              </div>

              <div className="pf__btnRow pf__btnRow--between">
                <Link className="pf__btn pf__btn--ghost" to="/enterprise/projects">
                  ← Quay lại Quản lý dự án
                </Link>

                <Link className="pf__btn pf__btn--ghost" to="/enterprise">
                  ← Bảng điều khiển
                </Link>
              </div>
            </div>
          </div>
          {/* end layout */}
        </div>
      </div>
    </div>
  );
}
