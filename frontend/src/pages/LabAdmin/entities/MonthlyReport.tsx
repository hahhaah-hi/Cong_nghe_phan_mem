import "./MonthlyReport.css";
import BackButton from "../BackButton";

export default function MonthlyReport() {
  return (
    <div className="report-container">
      <BackButton />

      <h2>Tổng hợp tháng</h2>

      <div className="report-cards">
        <div className="report-card">
          <h3>12</h3>
          <p>Dự án mới</p>
        </div>

        <div className="report-card">
          <h3>8</h3>
          <p>Dự án hoàn thành</p>
        </div>

        <div className="report-card">
          <h3>5</h3>
          <p>Yêu cầu thay đổi</p>
        </div>

        <div className="report-card">
          <h3>24</h3>
          <p>Sinh viên tham gia</p>
        </div>
      </div>
    </div>
  );
}
