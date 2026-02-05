import { Link } from "react-router-dom";
import EnterpriseTopNav from "../EnterpriseTopNav";
import "../Projects/ProjectFlow.css";

export default function ProjectChangeCancelFlow() {
  return (
    <div className="pf">
      <div className="pf__wrap">
        <div className="pf__brand">Labodc</div>
        <EnterpriseTopNav />


        <div className="pf__card">
          <div className="pf__title">Thay đổi hoặc hủy dự án</div>
          <div className="pf__subtitle">Chọn tác vụ bạn muốn thực hiện.</div>

          <div className="pf__grid">
            <Link className="pf__tile" to="/enterprise/projects/change-cancel/request">
              <div className="pf__icon">📌</div>
              <div className="pf__tileTitle">Gửi yêu cầu</div>
              <div className="pf__tileDesc">Tạo yêu cầu thay đổi / hủy dự án</div>
            </Link>

            <Link className="pf__tile" to="/enterprise/projects/change-cancel/status">
              <div className="pf__icon">📊</div>
              <div className="pf__tileTitle">Trạng thái xử lý</div>
              <div className="pf__tileDesc">Theo dõi: đang xử lý • đã duyệt • từ chối</div>
            </Link>
          </div>

          <div className="pf__btnRow">
            <Link className="pf__btn pf__btn--ghost" to="/enterprise/projects">
              ← Quay lại Quản lý dự án
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
