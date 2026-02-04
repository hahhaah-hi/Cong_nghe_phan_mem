import { Link } from "react-router-dom";
import "./CompanyFlow.css";

export default function CompanyFlow() {
  return (
    <div className="flow">
      <div className="flow__wrap">
        <div className="flow__brand">Labodc</div>

        <div className="flow__canvas">
          {/* Node: Hồ sơ doanh nghiệp */}
          <div className="node node--root">
            <div className="node__title">Hồ sơ doanh nghiệp</div>
          </div>

          {/* lines down from root */}
          <div className="line line--downRoot" />
          <div className="line line--split" />

          {/* Left: Xem hồ sơ */}
          <Link to="/enterprise/company/view" className="node node--left">
            <div className="node__title">Xem hồ sơ</div>
          </Link>

          {/* Right: Cập nhật hồ sơ */}
          <Link to="/enterprise/company/edit" className="node node--right">
            <div className="node__title">Cập nhật hồ sơ</div>
          </Link>

          {/* line down from "Cập nhật hồ sơ" */}
          <div className="line line--downEdit" />

          {/* Gửi xác thực Lab (dưới edit) */}
          <Link to="/enterprise/company/verify-submit" className="node node--mid1">
            <div className="node__title">Gửi xác thực Lab</div>
          </Link>

          {/* line down to status */}
          <div className="line line--downVerify" />

          {/* Trạng thái xác thực */}
          <Link to="/enterprise/company/verify-status" className="node node--mid2">
            <div className="node__title">Trạng thái xác thực</div>
          </Link>
        </div>

        <div className="flow__bottom">
          <Link className="flow__back" to="/enterprise">
            ← Quay lại Bảng điều khiển
          </Link>
        </div>
      </div>
    </div>
  );
}
