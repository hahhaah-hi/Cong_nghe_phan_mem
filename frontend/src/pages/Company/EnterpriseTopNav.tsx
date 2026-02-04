import { Link, useLocation } from "react-router-dom";

type TopItem = { title: string; to: string };

const topItems: TopItem[] = [
  { title: "Hồ sơ doanh nghiệp", to: "/enterprise/company" },
  { title: "Quản lý dự án", to: "/enterprise/projects" },
  { title: "Thanh toán", to: "/enterprise/payments" },
  { title: "Thay đổi hoặc huỷ dự án", to: "/enterprise/change/change-cancel-flow" },
  { title: "Báo cáo và đánh giá", to: "/enterprise/reports" },
];

export default function EnterpriseTopNav() {
  const { pathname } = useLocation();

  return (
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
  );
}
