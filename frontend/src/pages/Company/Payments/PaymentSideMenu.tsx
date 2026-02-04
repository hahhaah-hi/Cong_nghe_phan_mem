import { Link, useLocation } from "react-router-dom";
import "./Payment.css";

const items = [
  {
    title: "Thông tin thanh toán",
    desc: "Chọn gói • Số tiền • Email/SDT",
    to: "/enterprise/payments/info",
    icon: "🧾",
  },
  {
    title: "Thanh toán qua PayOS",
    desc: "Tạo link • Quét QR • Thanh toán",
    to: "/enterprise/payments/payos",
    icon: "💳",
  },
  {
    title: "Kết quả thanh toán",
    desc: "Thành công • Thất bại • Mã giao dịch",
    to: "/enterprise/payments/result",
    icon: "✅",
  },
  {
    title: "Lịch sử thanh toán",
    desc: "Danh sách giao dịch • Trạng thái • Thời gian",
    to: "/enterprise/payments/history",
    icon: "📊",
  },
];

export default function PaymentSideMenu() {
  const { pathname } = useLocation();

  return (
    <>
      {items.map((it) => {
        const active = pathname.startsWith(it.to);
        return (
          <Link
            key={it.to}
            to={it.to}
            className={`pay__sideItem ${active ? "pay__sideItem--active" : ""}`}
          >
            <div className="pay__sideIcon" aria-hidden="true">
              {it.icon}
            </div>
            <div>
              <div className="pay__sideTitle">{it.title}</div>
              <div className="pay__sideDesc">{it.desc}</div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
