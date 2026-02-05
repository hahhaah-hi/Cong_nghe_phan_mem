import { Link, useLocation } from "react-router-dom";
import "./ProjectFlow.css";

type TopItem = { title: string; to: string };

const topItems: TopItem[] = [
  { title: "Hồ sơ doanh nghiệp", to: "/enterprise/company" },
  { title: "Quản lý dự án", to: "/enterprise/projects" },
  { title: "Thanh toán", to: "/enterprise/payments" },
  { title: "Thay đổi hoặc huỷ dự án", to: "/enterprise/change/change-cancel-flow" },
  { title: "Báo cáo và đánh giá", to: "/enterprise/reports" },
];

export default function ProjectMenu() {
  const { pathname } = useLocation();

  return (
    <div className="pf">
      <div className="pf__wrap">
        <div className="pf__brand">Labodc</div>

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
          <div className="pf__title">Quản lý dự án</div>
          <div className="pf__subtitle">
            Theo đúng sơ đồ: Tạo đề xuất → Nhập phạm vi/ngân sách/timeline → Gửi duyệt → Trạng thái dự án.
          </div>

          <div className="pf__grid">
            <Link className="pf__tile" to="/enterprise/projects/proposal">
              <div className="pf__icon">📝</div>
              <div className="pf__tileTitle">Tạo đề xuất dự án</div>
              <div className="pf__tileDesc">Tên dự án • Mục tiêu • File mô tả</div>
            </Link>

            <Link className="pf__tile" to="/enterprise/projects/scope">
              <div className="pf__icon">📌</div>
              <div className="pf__tileTitle">Nhập phạm vi / ngân sách / timeline</div>
              <div className="pf__tileDesc">Scope • Budget • Thời gian</div>
            </Link>

            <Link className="pf__tile" to="/enterprise/projects/submit">
              <div className="pf__icon">📨</div>
              <div className="pf__tileTitle">Gửi duyệt</div>
              <div className="pf__tileDesc">Kiểm tra dữ liệu • Xác nhận gửi</div>
            </Link>

            <Link className="pf__tile" to="/enterprise/projects/status">
              <div className="pf__icon">📊</div>
              <div className="pf__tileTitle">Trạng thái dự án</div>
              <div className="pf__tileDesc">Đang xử lý • Đã duyệt • Từ chối</div>
            </Link>
          </div>

          <div className="pf__btnRow pf__btnRow--left">
            <Link className="pf__btn pf__btn--ghost" to="/enterprise">
              ← Quay lại Bảng điều khiển
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
