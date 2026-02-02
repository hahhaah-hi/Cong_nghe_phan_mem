import { useNavigate } from "react-router-dom";
import "./Tasks.css";

type Task = {
  id: string;
  title: string;
  project: string;
  due: string;
  status: "TODO" | "DOING" | "DONE";
};

const TASKS: Task[] = [
  { id: "T1", title: "Thiết kế UI trang đăng nhập", project: "UTH-001", due: "2026-02-05", status: "DONE" },
  { id: "T2", title: "Làm trang Danh sách dự án", project: "UTH-001", due: "2026-02-10", status: "DOING" },
  { id: "T3", title: "Tạo form gửi yêu cầu tham gia", project: "UTH-002", due: "2026-02-12", status: "TODO" },
];

export default function Tasks() {
  const navigate = useNavigate();

  return (
    <div className="portalPage">
      

      <div className="profileHeader">
        <div className="profileBrand">Labodc</div>
        <div className="profileSub">NHIỆM VỤ ĐƯỢC GIAO</div>
      </div>

      <div className="tasksWrap">
        {TASKS.map((t) => (
          <div className="taskCard" key={t.id}>
            <div className="taskTitle">{t.title}</div>
            <div className="taskMeta">Dự án: {t.project}</div>
            <div className="taskMeta">Hạn: {t.due}</div>
            <div className={`taskPill ${t.status}`}>{t.status}</div>
          </div>
        ))}

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
