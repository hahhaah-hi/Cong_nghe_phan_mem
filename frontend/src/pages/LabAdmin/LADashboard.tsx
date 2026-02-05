import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LADashboard.css";
import { useLocation } from "react-router-dom";

export default function LADashboard() {
 const navigate = useNavigate();
 const location = useLocation();
 const [activeSection, setActiveSection] = useState<string | null>(
  location.state?.activeTab || null
);

 const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };
const handleBackToLanding = () => {
    navigate("/landing");
  };

  const renderContent = () => {
    switch (activeSection) {
      case "entity":
        return (
          <div className="admin-content-grid">
            <div
  className="admin-card"
  onClick={() => navigate("/admin/enterprises")}
  style={{ cursor: "pointer" }}
>
  <h3>Doanh nghiệp</h3>
  <p>Quản lý hồ sơ doanh nghiệp</p>
</div>
            <div
  className="admin-card"
  onClick={() => navigate("/admin/projects")}
>
  <h3>Dự án</h3>
  <p>Quản lý dự án ODC</p>
</div>
            <div
  className="admin-card"
  onClick={() => navigate("/admin/mentors")}
>
  <h3>Mentor</h3>
  <p>Quản lý mentor hướng dẫn</p>
</div>
            <div
  className="admin-card"
  onClick={() => navigate("/admin/students")}
>
  <h3>Sinh viên</h3>
  <p>Quản lý sinh viên tham gia</p>
</div>
          </div>
        );

      case "review":
        return (
          <div className="admin-content-grid">
            <div
  className="admin-card"
  onClick={() => navigate("/admin/project-review")}
>
  <h3>Duyệt đề xuất dự án</h3>
  <p>Thẩm định và phê duyệt</p>
</div>
            <div
  className="admin-card"
  onClick={() => navigate("/admin/fund-distribution")}
>
              <h3>Phân bổ quỹ 70 - 20 - 10</h3>
              <p>Thiết lập cơ chế chia quỹ</p>
            </div>
          </div>
        );

      case "change":
        return (
          <div className="admin-content-grid">
            <div
  className="admin-card"
  onClick={() => navigate("/admin/change-requests")}
>
  <h3>Quản lý yêu cầu thay đổi</h3>
  <p>Thẩm định và xử lý yêu cầu chỉnh sửa dự án</p>
</div>

            <div
  className="admin-card"
  onClick={() => navigate("/admin/notify-result")}
>
  <h3>Thông báo kết quả</h3>
  <p>Gửi kết quả xử lý đến doanh nghiệp</p>
</div>
          </div>
        );

      case "report":
        return (
          <div className="admin-content-grid">
            <div
  className="admin-card"
  onClick={() => navigate("/admin/report/monthly")}
>
  <h3>Tổng hợp tháng</h3>
  <p>Báo cáo tổng hợp hệ thống</p>
</div>

<div
  className="admin-card"
  onClick={() => navigate("/admin/report/publish")}
>
  <h3>Công bố báo cáo</h3>
  <p>Xuất và công khai báo cáo</p>
</div>

          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="dashboard-bg">

      {/* ===== HERO (LOGO + TITLE) ===== */}
      <header className="dashboard-header">
        <div className="hero-shell">
          <div className="brand-row">
            <div className="logo-box">L</div>

            <div>
              <div className="brand-title-row">
                <div className="brand-title">Lab Admin Dashboard</div>
                <span className="badge">ODC Lab</span>
              </div>

              <p className="brand-sub">
                Quản trị hệ thống Lab — quản lý đối tượng, thẩm định dự án,
                xử lý thay đổi và công bố báo cáo minh bạch.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ===== MENU ===== */}
      <section className="dashboard-tabs">
        <div className="admin-menu-shell">
          <div
            className="admin-menu-item"
            onClick={() => setActiveSection("entity")}
          >
            Quản lý đối tượng
          </div>

          <div
            className="admin-menu-item"
            onClick={() => setActiveSection("review")}
          >
            Thẩm định
          </div>

          <div
            className="admin-menu-item"
            onClick={() => setActiveSection("change")}
          >
            Yêu cầu thay đổi
          </div>

          <div
            className="admin-menu-item"
            onClick={() => setActiveSection("report")}
          >
            Báo cáo minh bạch
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="admin-content-section">
        {renderContent()}
      </section>
    {/* FOOTER ACTIONS */}
      <div className="footer-actions footer-actions--right">
        {/* ✅ về landing */}
        <button className="btn" type="button" onClick={handleBackToLanding}>
          ← Về Trang Chủ
        </button>
        <button className="btn logout-btn" type="button" onClick={handleLogout}>
          Đăng xuất
        </button>
      </div>
    </div>
  );
}
