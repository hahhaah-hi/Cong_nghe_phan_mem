import { Link, useLocation } from "react-router-dom";
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

export default function ProjectProposalCreate() {
  const { pathname } = useLocation();

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
          <div className="pf__title">Tạo đề xuất dự án</div>
          <div className="pf__subtitle">Bước 1/4 theo sơ đồ.</div>

          {/* ✅ layout 2 cột: menu trái + form phải */}
          <div className="pf__layout">
            <div className="pf__side">
              <ProjectSideMenu />
            </div>

            <div>
              <div className="pf__form">
                <div className="pf__row">
                  <label className="pf__label">Tên dự án</label>
                  <input className="pf__input" defaultValue="Dự án xây dựng hệ thống A" />
                </div>

                <div className="pf__row">
                  <label className="pf__label">Mục tiêu</label>
                  <textarea
                    className="pf__textarea"
                    defaultValue="Mục tiêu: số hoá quy trình, quản lý dữ liệu tập trung."
                  />
                </div>

                <div className="pf__row">
                  <label className="pf__label">Ghi chú</label>
                  <textarea className="pf__textarea" defaultValue="Ghi chú: ưu tiên MVP trong 6 tuần." />
                </div>

                <div className="pf__row">
                  <label className="pf__label">File mô tả (tuỳ chọn)</label>
                  <input className="pf__file" type="file" />
                  <div className="pf__hint">Gợi ý: PDF/Doc/ảnh mô tả yêu cầu.</div>
                </div>

                <div className="pf__btnRow pf__btnRow--between">
                  <Link className="pf__btn pf__btn--ghost" to="/enterprise/projects">
                    ← Quay lại
                  </Link>

                  <Link className="pf__btn pf__btn--primary" to="/enterprise/projects/scope">
                    Tiếp theo →
                  </Link>
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
