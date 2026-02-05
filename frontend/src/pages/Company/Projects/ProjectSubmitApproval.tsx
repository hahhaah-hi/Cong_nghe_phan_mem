import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import "./ProjectFlow.css";
import ProjectSideMenu from "./ProjectSideMenu";

type TopItem = { title: string; to: string };

const topItems: TopItem[] = [
  { title: "Hồ sơ doanh nghiệp", to: "/enterprise/company" },
  { title: "Quản lý dự án", to: "/enterprise/projects" },
  { title: "Thanh toán", to: "/enterprise/payments" },
  { title: "Thay đổi hoặc huỷ dự án", to: "/enterprise/change/change-cancel-flow" },
  { title: "Báo cáo và đánh giá", to: "/enterprise/reports" },
];

export default function ProjectSubmitApproval() {
  const nav = useNavigate();
  const { pathname } = useLocation();

  const data = useMemo(() => {
    const a = localStorage.getItem("projectDraft");
    const b = localStorage.getItem("projectPlan");
    return {
      draft: a ? JSON.parse(a) : null,
      plan: b ? JSON.parse(b) : null,
    };
  }, []);

  const handleSubmit = () => {
    localStorage.setItem("projectStatus", "processing");
    nav("/enterprise/projects/status");
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
          <div className="pf__title">Gửi duyệt</div>
          <div className="pf__subtitle">Bước 3/4 theo sơ đồ — kiểm tra lại trước khi gửi.</div>

          <div className="pf__layout">
            <div className="pf__side">
              <ProjectSideMenu />
            </div>

            <div>
              <div className="pf__statusBox" style={{ marginTop: 0 }}>
                <div>
                  <div className="pf__statusLabel">Tóm tắt</div>
                  <div className="pf__statusValue" style={{ fontSize: 18 }}>
                    {data.draft?.name || "Chưa có tên dự án"}
                  </div>
                  <div style={{ marginTop: 6, color: "rgba(19,42,42,0.62)", fontWeight: 700 }}>
                    Budget: {data.plan?.budget || "-"} • Timeline: {data.plan?.timeline || "-"}
                  </div>
                </div>
                <div className="pf__badge">📨</div>
              </div>

              <div className="pf__steps">
                <div className="pf__step pf__step--done">1) Tạo đề xuất dự án</div>
                <div className="pf__step pf__step--done">2) Nhập phạm vi/ngân sách/timeline</div>
                <div className="pf__step pf__step--doing">3) Gửi duyệt</div>
                <div className="pf__step">4) Trạng thái dự án</div>
              </div>

              <div className="pf__btnRow pf__btnRow--between">
                <Link className="pf__btn pf__btn--ghost" to="/enterprise/projects/scope">
                  ← Quay lại
                </Link>

                <button className="pf__btn pf__btn--primary" type="button" onClick={handleSubmit}>
                  Xác nhận gửi duyệt
                </button>
              </div>
            </div>
          </div>
          {/* end layout */}
        </div>
      </div>
    </div>
  );
}
