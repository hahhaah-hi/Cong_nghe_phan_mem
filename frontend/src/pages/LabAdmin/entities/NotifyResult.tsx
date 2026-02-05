import { useState } from "react";
import "./NotifyResult.css";
import BackButton from "../BackButton";


interface Notification {
  id: number;
  project: string;
  company: string;
  result: "Đã duyệt" | "Từ chối";
  sent: boolean;
}

export default function NotifyResult() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      project: "Hệ thống quản lý vận tải",
      company: "Công ty ABC",
      result: "Đã duyệt",
      sent: false,
    },
    {
      id: 2,
      project: "Website đặt vé tàu",
      company: "Tech Solutions",
      result: "Từ chối",
      sent: true,
    },
  ]);

  const handleSend = (id: number) => {
    setNotifications(prev =>
      prev.map(n =>
        n.id === id ? { ...n, sent: true } : n
      )
    );
  };

  return (
    <div className="notify-container">
      <BackButton />

      <h2>Thông báo kết quả</h2>

      <table className="notify-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Dự án</th>
            <th>Doanh nghiệp</th>
            <th>Kết quả</th>
            <th>Trạng thái gửi</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((n, index) => (
            <tr key={n.id}>
              <td>{index + 1}</td>
              <td>{n.project}</td>
              <td>{n.company}</td>
              <td>
                <span className={`status ${n.result.replace(/\s/g, "")}`}>
                  {n.result}
                </span>
              </td>
              <td>
                <span className={n.sent ? "sent" : "pending"}>
                  {n.sent ? "Đã gửi" : "Chưa gửi"}
                </span>
              </td>
              <td>
                {!n.sent && (
                  <button
                    className="btn-send"
                    onClick={() => handleSend(n.id)}
                  >
                    Gửi thông báo
                  </button>
                )}
                {n.sent && <span className="done-text">✓ Hoàn tất</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
