import { useNavigate } from "react-router-dom";
import "./LeaderHub.css";
export default function LeaderHub() {
  const navigate = useNavigate();

  return (
    <div className="portalPage">
      

      <div className="portalBrand">Labodc</div>

      <div className="hubWrap">
        <div className="hubCard">
          <div className="hubTitle">CHỨC NĂNG TRƯỞNG NHÓM</div>
          <div className="hubDesc">Chọn 1 chức năng bên dưới</div>

          <div className="hubGrid2">
            <div
              className="hubBox"
              onClick={() => navigate("/talent/leader/fund")}
              role="button"
            >
              <div className="hubBoxHead">Phân chia quỹ nhóm</div>
              <div className="hubBoxSub">
                Thanh toán dự án · Phân bổ cho thành viên
              </div>
            </div>

            <div
              className="hubBox"
              onClick={() => navigate("/talent/leader/report")}
              role="button"
            >
              <div className="hubBoxHead">Gửi báo cáo hiệu suất</div>
              <div className="hubBoxSub">
                Nhập nội dung · Đính kèm file (mô phỏng)
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="backPortalBtn" onClick={() => navigate("/talent")}>
        ← Quay lại 
      </button>
    </div>
  );
}
