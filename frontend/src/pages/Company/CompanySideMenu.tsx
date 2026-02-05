import { Link, useLocation } from "react-router-dom";
import "./CompanyProfilePages.css";
import "./CompanyVerify.css";

const items = [
  {
    title: "Xem hồ sơ",
    desc: "Thông tin doanh nghiệp • Liên hệ • Thông tin chung",
    to: "/enterprise/company/view",
    icon: "🏢",
  },
  {
    title: "Cập nhật hồ sơ",
    desc: "Chỉnh sửa thông tin • Tải tài liệu • Lưu thay đổi",
    to: "/enterprise/company/edit",
    icon: "✏️",
  },
  {
    title: "Gửi xác thực Lab",
    desc: "Gửi yêu cầu • Tải tài liệu • Xác minh doanh nghiệp",
    to: "/enterprise/company/verify-submit",
    icon: "✅",
  },
  {
    title: "Trạng thái xác thực",
    desc: "Theo dõi xử lý • Kết quả • Gửi lại nếu cần",
    to: "/enterprise/company/verify-status",
    icon: "⏳",
  },
];

type Props = {
  /** "cpp" (default) cho View/Edit; "cv" cho Verify pages */
  prefix?: "cpp" | "cv";
};

export default function CompanySideMenu({ prefix = "cpp" }: Props) {
  const { pathname } = useLocation();

  const cls = (name: string) => `${prefix}__${name}`;

  return (
    <>
      {items.map((it) => {
        const active = pathname.startsWith(it.to);
        return (
          <Link
            key={it.to}
            to={it.to}
            className={`${cls("sideItem")} ${active ? cls("sideItem--active") : ""}`}
          >
            <div className={cls("sideIcon")} aria-hidden="true">
              {it.icon}
            </div>

            <div>
              <div className={cls("sideTitle")}>{it.title}</div>
              <div className={cls("sideDesc")}>{it.desc}</div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
