import { Link } from "react-router-dom";
import EnterpriseTopNav from "../EnterpriseTopNav";
import PaymentSideMenu from "./PaymentSideMenu";
import "./Payment.css";

export default function PaymentResult() {
  return (
    <div className="pay">
      <div className="pay__wrap">
        <EnterpriseTopNav />
        <div className="pay__brand">Labodc</div>

        <div className="pay__panel">
          <h1 className="pay__title">Kết quả thanh toán</h1>

          <div className="pay__steps">
            <span className="pay__step">1) Thông tin</span>
            <span className="pay__step">2) PayOS</span>
            <span className="pay__step pay__step--active">3) Kết quả</span>
            <span className="pay__step">Hoặc: Lịch sử</span>
          </div>

          <div className="pay__layout">
            <div className="pay__side">
              <PaymentSideMenu />
            </div>

            <div>
              <div className="pay__grid">
                <div className="pay__card" style={{ cursor: "default" }}>
                  <div className="pay__cardTop">
                    <div className="pay__icon">✅</div>
                    <h3 className="pay__cardTitle">Thanh toán thành công</h3>
                  </div>
                  <p className="pay__cardDesc">
                    Mã giao dịch: DEMO-123456 • Số tiền: 199,000 VND
                  </p>
                </div>

                <Link to="/enterprise/payments/history" className="pay__card">
                  <div className="pay__cardTop">
                    <div className="pay__icon">📚</div>
                    <h3 className="pay__cardTitle">Xem lịch sử</h3>
                  </div>
                  <p className="pay__cardDesc">Kiểm tra toàn bộ giao dịch đã thanh toán</p>
                </Link>
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
