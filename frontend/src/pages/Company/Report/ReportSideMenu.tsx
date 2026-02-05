import { NavLink } from "react-router-dom";
import "./ReportSideMenu.css";

export default function ReportSideMenu() {
  return (
    <aside className="rsm">
      <div className="rsm__title">Báo cáo & đánh giá</div>

      <nav className="rsm__nav">
        <NavLink to="/enterprise/reports" end className={({ isActive }) => `rsm__item ${isActive ? "is-active" : ""}`}>
          🧾 Tổng quan
        </NavLink>

        <NavLink to="/enterprise/reports/progress" className={({ isActive }) => `rsm__item ${isActive ? "is-active" : ""}`}>
          📈 Xem báo cáo tiến độ
        </NavLink>

        <NavLink to="/enterprise/reports/acceptance" className={({ isActive }) => `rsm__item ${isActive ? "is-active" : ""}`}>
          ✅ Kết quả nghiệm thu
        </NavLink>

        <NavLink to="/enterprise/reports/evaluation" className={({ isActive }) => `rsm__item ${isActive ? "is-active" : ""}`}>
          ⭐ Đánh giá dự án
        </NavLink>
      </nav>
    </aside>
  );
}
