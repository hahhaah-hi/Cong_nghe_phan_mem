import { useNavigate } from "react-router-dom";
import "./ProjectsHub.css";

export default function ProjectsHub() {
  const navigate = useNavigate();

  return (
    <div className="portalPage">

      {/* Header */}
      <div className="profileHeader">
        <div className="profileBrand">Labodc</div>
        <div className="profileSub">DỰ ÁN</div>
      </div>

      {/* 3 KHUNG */}
      <div className="hubWrap">
        <div className="hubGrid">
          {/* 1) Xem dự án đã công bố -> Danh sách dự án */}
          <div
            className="hubCard"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/talent/projects/list")}
          >
            <div>
              <div className="hubTitle">Xem dự án đã công bố</div>
              <div className="hubDesc">Danh sách dự án · Trạng thái</div>
            </div>
            <button className="hubBtn">VÀO DANH SÁCH</button>
          </div>

          {/* 2) Gửi yêu cầu tham gia */}
          <div
            className="hubCard"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/talent/projects/join")}
          >
            <div>
              <div className="hubTitle">Gửi yêu cầu tham gia</div>
              <div className="hubDesc">Chọn dự án · Điền form yêu cầu</div>
            </div>
            <button className="hubBtn">GỬI YÊU CẦU</button>
          </div>

          {/* ✅ 3) Xem nhiệm vụ được giao -> trong Dự án luôn */}
          <div
            className="hubCard"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/talent/projects/tasks")}
          >
            <div>
              <div className="hubTitle">Xem nhiệm vụ được giao</div>
              <div className="hubDesc">Danh sách nhiệm vụ · Tiến độ</div>
            </div>
            <button className="hubBtn">XEM NHIỆM VỤ</button>
          </div>
        </div>

        {/* Quay lại cổng */}
        <button className="backPortalBtn" onClick={() => navigate("/talent")}>
          ← Quay lại
        </button>
      </div>

      {/* Bottom buttons */}
      <button className="homeBtn" onClick={() => navigate("/")}>
        ← Về trang chủ
      </button>

      <button className="logoutBtn" onClick={() => navigate("/login")}>
        Đăng xuất
      </button>
    </div>
  );
}
