import { useState } from "react";
import "./ProjectReview.css";
import BackButton from "../BackButton";


interface ReviewProject {
  id: number;
  name: string;
  company: string;
  mentor: string;
  budget: number;
  status: "Chờ duyệt" | "Đã duyệt" | "Từ chối";
}

export default function ProjectReview() {
  const [projects, setProjects] = useState<ReviewProject[]>([
    {
      id: 1,
      name: "Ứng dụng AI Logistics",
      company: "Công ty ABC",
      mentor: "Nguyễn Văn A",
      budget: 100000000,
      status: "Chờ duyệt",
    },
    {
      id: 2,
      name: "Hệ thống quản lý vận tải",
      company: "Công ty XYZ",
      mentor: "Trần Thị B",
      budget: 80000000,
      status: "Chờ duyệt",
    },
  ]);

  const handleApprove = (id: number) => {
    setProjects(prev =>
      prev.map(p =>
        p.id === id ? { ...p, status: "Đã duyệt" } : p
      )
    );
  };

  const handleReject = (id: number) => {
    setProjects(prev =>
      prev.map(p =>
        p.id === id ? { ...p, status: "Từ chối" } : p
      )
    );
  };

  return (
    <div className="review-container">
      <BackButton />

      <h2>Thẩm định đề xuất dự án</h2>

      <table className="review-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên dự án</th>
            <th>Doanh nghiệp</th>
            <th>Mentor</th>
            <th>Kinh phí</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project.id}>
              <td>{index + 1}</td>
              <td>{project.name}</td>
              <td>{project.company}</td>
              <td>{project.mentor}</td>
              <td>{project.budget.toLocaleString()} đ</td>
              <td>
                <span className={`status ${project.status}`}>
                  {project.status}
                </span>
              </td>
              <td>
                {project.status === "Chờ duyệt" && (
                  <>
                    <button
                      className="btn btn-view"
                      onClick={() => handleApprove(project.id)}
                    >
                      Duyệt
                    </button>
                    <button
                      className="btn btn-lock"
                      onClick={() => handleReject(project.id)}
                    >
                      Từ chối
                    </button>
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
