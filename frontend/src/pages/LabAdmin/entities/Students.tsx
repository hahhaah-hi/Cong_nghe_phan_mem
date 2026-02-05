import { useState } from "react";
import "./Students.css";
import BackButton from "../BackButton";


interface Student {
  id: number;
  name: string;
  email: string;
  project: string;
  status: "Đang tham gia" | "Hoàn thành" | "Tạm khóa";
}

export default function Students() {
  const [search, setSearch] = useState("");

  const students: Student[] = [
    {
      id: 1,
      name: "Nguyễn Minh Hoàng",
      email: "hoang@gmail.com",
      project: "Hệ thống quản lý vận tải",
      status: "Đang tham gia",
    },
    {
      id: 2,
      name: "Trần Thị Lan",
      email: "lan@gmail.com",
      project: "Ứng dụng Logistics thông minh",
      status: "Hoàn thành",
    },
    {
      id: 3,
      name: "Lê Quốc Anh",
      email: "anh@gmail.com",
      project: "Website đặt vé tàu",
      status: "Tạm khóa",
    },
  ];

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-page">
      <BackButton />

      <h2>Quản lý Sinh viên</h2>

      <input
        type="text"
        placeholder="Tìm theo tên sinh viên..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <table className="admin-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Dự án</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((s, index) => (
            <tr key={s.id}>
              <td>{index + 1}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.project}</td>
              <td>
                <span className={`status ${s.status.replace(/\s/g, "")}`}>
                  {s.status}
                </span>
              </td>
              <td>
                <button className="btn btn-view">Xem</button>
                <button className="btn btn-lock">Khóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
