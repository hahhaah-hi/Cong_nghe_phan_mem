import { Link, useLocation } from "react-router-dom";
import "./ProjectFlow.css";

const items = [
  {
    title: "Tạo đề xuất dự án",
    desc: "Tên dự án • Mục tiêu • File mô tả",
    to: "/enterprise/projects/proposal",
    icon: "📝",
  },
  {
    title: "Nhập phạm vi / ngân sách / timeline",
    desc: "Scope • Budget • Thời gian",
    to: "/enterprise/projects/scope",
    icon: "📌",
  },
  {
    title: "Gửi duyệt",
    desc: "Kiểm tra dữ liệu • Xác nhận gửi",
    to: "/enterprise/projects/submit",
    icon: "📨",
  },
  {
    title: "Trạng thái dự án",
    desc: "Đang xử lý • Đã duyệt • Từ chối",
    to: "/enterprise/projects/status",
    icon: "📊",
  },
];

export default function ProjectSideMenu() {
  const { pathname } = useLocation();

  return (
    <>
      {items.map((it) => {
        const active = pathname.startsWith(it.to);
        return (
          <Link
            key={it.to}
            to={it.to}
            className={`pf__sideItem ${active ? "pf__sideItem--active" : ""}`}
          >
            <div className="pf__sideIcon" aria-hidden="true">
              {it.icon}
            </div>

            <div>
              <div className="pf__sideTitle">{it.title}</div>
              <div className="pf__sideDesc">{it.desc}</div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
