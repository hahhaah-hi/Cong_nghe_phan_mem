import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProjectFlow.css";
import ProjectSideMenu from "./ProjectSideMenu";

type Draft = { name: string; goal: string; note: string };

type TopItem = { title: string; to: string };

const topItems: TopItem[] = [
  { title: "Hồ sơ doanh nghiệp", to: "/enterprise/company" },
  { title: "Quản lý dự án", to: "/enterprise/projects" },
  { title: "Thanh toán", to: "/enterprise/payments" },
  { title: "Thay đổi hoặc huỷ dự án", to: "/enterprise/change/change-cancel-flow" },
  { title: "Báo cáo và đánh giá", to: "/enterprise/reports" },
];

export default function ProjectScopeBudgetTimeline() {
  const nav = useNavigate();
  const { pathname } = useLocation();

  const [draft, setDraft] = useState<Draft | null>(null);

  const [scope, setScope] = useState("Module: đăng nhập, hồ sơ DN, dự án, thanh toán.");
  const [budget, setBudget] = useState("150000000"); // VNĐ demo
  const [timeline, setTimeline] = useState("6 tuần");

  useEffect(() => {
    const raw = localStorage.getItem("projectDraft");
    if (raw) setDraft(JSON.parse(raw));
  }, []);

  const handleNext = () => {
    localStorage.setItem("projectPlan", JSON.stringify({ scope, budget, timeline }));
    nav("/enterprise/projects/submit");
  };

  return (
    <div className="pf">
      <div className="pf__wrap">
        <div className="pf__brand">Labodc</div>

        {/* TOP NAV 5 mục */}
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
          <div className="pf__title">Nhập phạm vi / ngân sách / timeline</div>
          <div className="pf__subtitle">Bước 2/4 theo sơ đồ.</div>

          {/* ✅ layout 2 cột: menu trái + nội dung phải */}
          <div className="pf__layout">
            <div className="pf__side">
              <ProjectSideMenu />
            </div>

            <div>
              {draft && (
                <div className="pf__statusBox" style={{ marginTop: 0 }}>
                  <div>
                    <div className="pf__statusLabel">Đề xuất đang làm</div>
                    <div className="pf__statusValue" style={{ fontSize: 18 }}>
                      {draft.name}
                    </div>
                  </div>
                  <div className="pf__badge">🧾</div>
                </div>
              )}

              <div className="pf__form">
                <div className="pf__row">
                  <label className="pf__label">Phạm vi (Scope)</label>
                  <textarea
                    className="pf__textarea"
                    value={scope}
                    onChange={(e) => setScope(e.target.value)}
                  />
                </div>

                <div className="pf__row">
                  <label className="pf__label">Ngân sách (VNĐ)</label>
                  <input
                    className="pf__input"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </div>

                <div className="pf__row">
                  <label className="pf__label">Timeline</label>
                  <input
                    className="pf__input"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                  />
                </div>

                <div className="pf__btnRow pf__btnRow--between">
                  <Link className="pf__btn pf__btn--ghost" to="/enterprise/projects/proposal">
                    ← Quay lại
                  </Link>

                  <button
                    className="pf__btn pf__btn--primary"
                    type="button"
                    onClick={handleNext}
                  >
                    Tiếp theo →
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* end layout */}
        </div>
      </div>
    </div>
  );
}
