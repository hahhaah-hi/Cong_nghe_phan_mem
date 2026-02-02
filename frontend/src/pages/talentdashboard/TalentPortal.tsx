import { useNavigate } from "react-router-dom";
import "./TalentPortal.css";

export default function TalentPortal() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  return (
    <div className="portalPage">
    

      {/* Brand */}
      <div className="portalBrand">Labodc</div>

      {/* Menu cards */}
      <div className="portalMenuWrap">
        <div className="portalMenu">
          {/* HỒ SƠ CÁ NHÂN */}
          <div
            className="portalItem active"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/talent/profile")}
          >
            <div className="portalItemHead">
              <span className="miniDot" />
              <span className="miniDot" />
              <div className="portalTitle">Hồ sơ cá nhân</div>
            </div>
            <div className="portalDesc">Cập nhật kỹ năng · Chứng chỉ</div>
            <div className="portalDesc">Portfolio</div>
          </div>

          <div className="portalDivider" />

          {/* DỰ ÁN */}
          <div
            className="portalItem center"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/talent/projects")}
          >
            <div className="portalTitle">Dự án</div>
            <div className="portalDesc">Xem dự án đã công bố ·</div>
            <div className="portalDesc">Trạng thái</div>
          </div>

          <div className="portalDivider" />

          {/* CHỨC NĂNG TRƯỞNG NHÓM */}
          <div
            className="portalItem"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/talent/leader")}
          >
            <div className="portalTitle">Chức năng Trưởng nhóm</div>
            <div className="portalDesc">Phân chia công việc · Gửi báo cáo</div>
          </div>
        </div>
      </div>

      {/* VỀ TRANG CHỦ */}
      <button className="homeBtn" onClick={() => navigate("/landing")}>
  ← Về trang chủ
</button>


      {/* ĐĂNG XUẤT */}
      <button className="logoutBtn" onClick={handleLogout}>
        Đăng xuất
      </button>
    </div>
  );
}
