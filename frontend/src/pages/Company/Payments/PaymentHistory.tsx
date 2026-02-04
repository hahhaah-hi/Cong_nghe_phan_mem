import { Link } from "react-router-dom";
import EnterpriseTopNav from "../EnterpriseTopNav";
import PaymentSideMenu from "./PaymentSideMenu";
import "./Payment.css";

export default function PaymentHistory() {
  return (
    <div className="pay">
      <div className="pay__wrap">
        <EnterpriseTopNav />
        <div className="pay__brand">Labodc</div>

        <div className="pay__panel">
          <h1 className="pay__title">Lịch sử thanh toán</h1>
          <p className="pay__subtitle">(Demo) Danh sách giao dịch gần đây.</p>

          <div className="pay__layout">
            <div className="pay__side">
              <PaymentSideMenu />
            </div>

            <div>
              <div className="pay__grid">
                <div className="pay__card" style={{ cursor: "default" }}>
                  <div className="pay__cardTop">
                    <div className="pay__icon">💳</div>
                    <h3 className="pay__cardTitle">DEMO-123456</h3>
                  </div>
                  <p className="pay__cardDesc">✅ Thành công • 199,000 VND • 2026-01-26</p>
                </div>

                <div className="pay__card" style={{ cursor: "default" }}>
                  <div className="pay__cardTop">
                    <div className="pay__icon">💳</div>
                    <h3 className="pay__cardTitle">DEMO-000222</h3>
                  </div>
                  <p className="pay__cardDesc">⏳ Đang xử lý • 499,000 VND • 2026-01-25</p>
                </div>
              </div>

              <Link className="pay__back" to="/enterprise/payments">
                ← Quay lại Thanh toán
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
