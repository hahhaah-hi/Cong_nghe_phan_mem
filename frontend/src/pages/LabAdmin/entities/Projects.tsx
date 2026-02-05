import { useState } from "react";
import "./Projects.css";
import BackButton from "../BackButton";


interface Project {
  id: number;
  name: string;
  enterprise: string;
  mentor: string;
  status: "Đang triển khai" | "Hoàn thành" | "Chờ duyệt";
}

export default function Projects() {
  const [search, setSearch] = useState("");

  const projects: Project[] = [
    {
      id: 1,
      name: "Hệ thống quản lý vận tải",
      enterprise: "Công ty ABC",
      mentor: "Nguyễn Văn A",
      status: "Đang triển khai",
    },
    {
      id: 2,
      name: "Ứng dụng Logistics thông minh",
      enterprise: "Công ty XYZ",
      mentor: "Trần Thị B",
      status: "Chờ duyệt",
    },
    {
      id: 3,
      name: "Website đặt vé tàu",
      enterprise: "Tech Solutions",
      mentor: "Lê Văn C",
      status: "Hoàn thành",
    },
  ];

  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="projects-container">
      <BackButton />

      <h2>Quản lý Dự án</h2>

      <input
        type="text"
        placeholder="Tìm theo tên dự án..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <table className="projects-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên dự án</th>
            <th>Doanh nghiệp</th>
            <th>Mentor</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project, index) => (
            <tr key={project.id}>
              <td>{index + 1}</td>
              <td>{project.name}</td>
              <td>{project.enterprise}</td>
              <td>{project.mentor}</td>
              <td>
                <span className={`status ${project.status}`}>
                  {project.status}
                </span>
              </td>
              <td>
                <button className="btn view">Xem</button>
                {project.status === "Chờ duyệt" && (
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