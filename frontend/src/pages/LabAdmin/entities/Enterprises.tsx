import { useState } from "react";
import "./Enterprises.css";
import BackButton from "../BackButton";

type Enterprise = {
  id: number;
  name: string;
  email: string;
  status: "Chờ duyệt" | "Đã duyệt" | "Từ chối";
};

export default function Enterprises() {
  const [search, setSearch] = useState("");

  const [data] = useState<Enterprise[]>([
    { id: 1, name: "Công ty ABC", email: "abc@gmail.com", status: "Đã duyệt" },
    { id: 2, name: "Công ty XYZ", email: "xyz@gmail.com", status: "Chờ duyệt" },
    { id: 3, name: "Tech Solutions", email: "tech@gmail.com", status: "Từ chối" },
  ]);

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="enterprise-container">
        <BackButton />
      <h2>Quản lý Doanh nghiệp</h2>

      <div className="enterprise-search">
        <input
          type="text"
          placeholder="Tìm theo tên doanh nghiệp..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="enterprise-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên doanh nghiệp</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <span className={`badge ${item.status}`}>
                  {item.status}
                </span>
              </td>
              <td>
                <button className="btn-view">Xem</button>
                <button className="btn-lock">Khóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
