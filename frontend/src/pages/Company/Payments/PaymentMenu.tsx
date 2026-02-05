import { Link } from "react-router-dom";
import EnterpriseTopNav from "../EnterpriseTopNav";
import "../Projects/ProjectFlow.css";

export default function PaymentMenu() {
  return (
    <div className="pf">
      <div className="pf__wrap">
        <div className="pf__brand">Labodc</div>
        <EnterpriseTopNav />


        <div className="pf__card">
          <div className="pf__title">Thanh toán</div>
          <div className="pf__subtitle">
            Thông tin thanh toán → Thanh toán qua PayOS → Kết quả thanh toán. Hoặc xem Lịch sử thanh toán.
          </div>

          <div className="pf__grid">
            <Link to="/enterprise/payments/info" className="pf__tile">
              <div className="pf__icon">🧾</div>
              <div className="pf__tileTitle">Thông tin thanh toán</div>
              <div className="pf__tileDesc">Nhập gói • Số tiền • Email/SDT</div>
            </Link>

            <Link to="/enterprise/payments/history" className="pf__tile">
              <div className="pf__icon">📚</div>
              <div className="pf__tileTitle">Lịch sử thanh toán</div>
              <div className="pf__tileDesc">Danh sách giao dịch • Trạng thái • Thời gian</div>
            </Link>
          </div>

          <div className="pf__btnRow">
            <Link className="pf__btn pf__btn--ghost" to="/enterprise">
              ← Quay lại Bảng điều khiển
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
