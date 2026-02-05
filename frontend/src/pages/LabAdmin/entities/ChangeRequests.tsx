import { useState } from "react";
import "./ChangeRequests.css";
import BackButton from "../BackButton";

interface ChangeRequest {
  id: number;
  project: string;
  company: string;
  reason: string;
  status: "Chờ xử lý" | "Đã duyệt" | "Từ chối";
}

export default function ChangeRequests() {
  const [search, setSearch] = useState("");

  const requests: ChangeRequest[] = [
    {
      id: 1,
      project: "Hệ thống quản lý vận tải",
      company: "Công ty ABC",
      reason: "Thay đổi phạm vi chức năng",
      status: "Chờ xử lý",
    },
    {
      id: 2,
      project: "Ứng dụng Logistics thông minh",
      company: "Công ty XYZ",
      reason: "Gia hạn thời gian thực hiện",
      status: "Đã duyệt",
    },
    {
      id: 3,
      project: "Website đặt vé tàu",
      company: "Tech Solutions",
      reason: "Thay đổi mentor phụ trách",
      status: "Từ chối",
    },
  ];

  const filtered = requests.filter((r) =>
    r.project.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="change-container">
      <BackButton />
      <h2>Yêu cầu thay đổi</h2>

      <input
        type="text"
        placeholder="Tìm theo tên dự án..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <table className="change-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Dự án</th>
            <th>Doanh nghiệp</th>
            <th>Lý do</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.project}</td>
              <td>{r.company}</td>
              <td>{r.reason}</td>
              <td>
                <span className={`status ${r.status.replace(/\s/g, "")}`}>
                  {r.status}
                </span>
              </td>
              <td>
                <button className="btn view">Xem</button>
                {r.status === "Chờ xử lý" && (
                  <>
                    <button className="btn approve">Duyệt</button>
                    <button className="btn reject">Từ chối</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
