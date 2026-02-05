import { useState } from "react";
import "./Mentors.css";
import BackButton from "../BackButton";

interface Mentor {
  id: number;
  name: string;
  email: string;
  expertise: string;
  status: "Đang hoạt động" | "Tạm khóa";
}

export default function Mentors() {
  const [search, setSearch] = useState("");

  const mentors: Mentor[] = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "a@gmail.com",
      expertise: "Hệ thống thông tin",
      status: "Đang hoạt động",
    },
    {
      id: 2,
      name: "Trần Thị B",
      email: "b@gmail.com",
      expertise: "Logistics",
      status: "Đang hoạt động",
    },
    {
      id: 3,
      name: "Lê Văn C",
      email: "c@gmail.com",
      expertise: "Phát triển Web",
      status: "Tạm khóa",
    },
  ];

  const filtered = mentors.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mentor-page">
      <BackButton />
      <h2>Quản lý Mentor</h2>

      <input
        type="text"
        placeholder="Tìm theo tên mentor..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mentor-search"
      />

      <table className="mentor-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên Mentor</th>
            <th>Email</th>
            <th>Chuyên môn</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((mentor) => (
            <tr key={mentor.id}>
              <td>{mentor.id}</td>
              <td>{mentor.name}</td>
              <td>{mentor.email}</td>
              <td>{mentor.expertise}</td>
              <td>
                <span
                  className={
                    mentor.status === "Đang hoạt động"
                      ? "status-active"
                      : "status-locked"
                  }
                >
                  {mentor.status}
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