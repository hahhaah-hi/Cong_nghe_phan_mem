import { Link, useLocation } from "react-router-dom";
import "./ChangeCancelSideMenu.css";

export default function ChangeCancelSideMenu() {
  const { pathname } = useLocation();

  const isRequest = pathname.includes("/change-cancel/request");
  const isStatus = pathname.includes("/change-cancel/status");

  return (
    <div className="ccm__card">
      <div className="ccm__title">Thay đổi hoặc hủy dự án</div>
      <div className="ccm__subtitle">Chọn tác vụ bạn muốn thực hiện.</div>

      <div className="ccm__grid">
        <Link
          to="/enterprise/projects/change-cancel/request"
          className={`ccm__tile ${isRequest ? "ccm__tile--active" : ""}`}
        >
          <div className="ccm__icon">📌</div>
          <div className="ccm__tileTitle">Gửi yêu cầu</div>
          <div className="ccm__tileDesc">Tạo yêu cầu thay đổi / hủy dự án</div>
        </Link>

        <Link
          to="/enterprise/projects/change-cancel/status"
          className={`ccm__tile ${isStatus ? "ccm__tile--active" : ""}`}
        >
          <div className="ccm__icon">📊</div>
          <div className="ccm__tileTitle">Trạng thái xử lý</div>
          <div className="ccm__tileDesc">Theo dõi: đang xử lý • đã duyệt • từ chối</div>
        </Link>
      </div>

      <div className="ccm__bottom">
        <Link className="ccm__btn ccm__btn--ghost" to="/enterprise/projects">
          ← Quay lại Quản lý dự án
        </Link>
      </div>
    </div>
  );
}
