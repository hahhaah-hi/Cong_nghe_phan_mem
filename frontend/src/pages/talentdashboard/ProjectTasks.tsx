import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectTasks.css";

type TaskStatus = "TODO" | "DOING" | "DONE";

type Task = {
  id: string;
  projectId: string;
  title: string;
  desc: string;
  due: string;
  status: TaskStatus;
};

const ALL_TASKS: Task[] = [
  {
    id: "T-001",
    projectId: "UTH-001",
    title: "Thiết kế UI trang đăng nhập",
    desc: "Hoàn thiện layout + style theo mẫu.",
    due: "2026-02-05",
    status: "DONE",
  },
  {
    id: "T-002",
    projectId: "UTH-001",
    title: "Trang danh sách dự án",
    desc: "Tạo list dự án + filter + nút tham gia.",
    due: "2026-02-10",
    status: "DOING",
  },
  {
    id: "T-003",
    projectId: "UTH-001",
    title: "Form gửi yêu cầu tham gia",
    desc: "Tạo form join request + validate.",
    due: "2026-02-12",
    status: "TODO",
  },
  {
    id: "T-004",
    projectId: "UTH-002",
    title: "API đăng ký tham gia (mock)",
    desc: "Lưu trạng thái đăng ký localStorage.",
    due: "2026-02-15",
    status: "TODO",
  },
];

export default function ProjectTasks() {
  const navigate = useNavigate();

  // Demo: dự án đã tham gia lưu ở localStorage
  // Khi submit join xong mình sẽ set key này.
  const joinedProjectId = localStorage.getItem("joinedProjectId") || "UTH-001";

  const [filterStatus, setFilterStatus] = useState<string>("ALL");

  const tasks = useMemo(() => {
    const byProject = ALL_TASKS.filter((t) => t.projectId === joinedProjectId);
    if (filterStatus === "ALL") return byProject;
    return byProject.filter((t) => t.status === filterStatus);
  }, [joinedProjectId, filterStatus]);

  const pillClass = (s: TaskStatus) => {
    if (s === "TODO") return "taskPill TODO";
    if (s === "DOING") return "taskPill DOING";
    return "taskPill DONE";
  };

  return (
    <div className="portalPage">

      <div className="profileHeader">
        <div className="profileBrand">Labodc</div>
        <div className="profileSub">NHIỆM VỤ ĐƯỢC GIAO</div>
      </div>

      <div className="tasksPageWrap">
        <div className="tasksTopBar">
          <div className="tasksInfo">
            <div className="tasksInfoTitle">Dự án đang tham gia</div>
            <div className="tasksInfoValue">{joinedProjectId}</div>
          </div>

          <div className="tasksFilter">
            <span className="tasksFilterLabel">Lọc trạng thái:</span>
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option value="ALL">Tất cả</option>
              <option value="TODO">TODO</option>
              <option value="DOING">DOING</option>
              <option value="DONE">DONE</option>
            </select>
          </div>
        </div>

        <div className="tasksList">
          {tasks.map((t) => (
            <div key={t.id} className="taskCard2">
              <div className="taskTitle2">{t.title}</div>
              <div className="taskDesc2">{t.desc}</div>
              <div className="taskMeta2">Hạn: {t.due}</div>
              <div className={pillClass(t.status)}>{t.status}</div>
            </div>
          ))}

          {tasks.length === 0 && (
            <div className="tasksEmpty2">Chưa có nhiệm vụ nào theo bộ lọc này.</div>
          )}
        </div>

        {/* quay lại Hub dự án */}
        <button
  className="backPortalBtn"
  onClick={() => navigate(-1)}
>
  ← Quay lại
</button>

      </div>

      <button className="homeBtn" onClick={() => navigate("/")}>
        ← Về trang chủ
      </button>
      <button className="logoutBtn" onClick={() => navigate("/login")}>
        Đăng xuất
      </button>
    </div>
  );
}
