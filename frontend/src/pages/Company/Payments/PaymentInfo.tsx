import { Link, useNavigate } from "react-router-dom";
import EnterpriseTopNav from "../EnterpriseTopNav"; // ✅ đường dẫn này đúng nếu Payments nằm trong src/pages/Company/Payments
import PaymentSideMenu from "./PaymentSideMenu";
import "./Payment.css";

export default function PaymentInfo() {
  const navigate = useNavigate();

  return (
    <div className="pay">
      <div className="pay__wrap">
        <EnterpriseTopNav />

        <div className="pay__brand">Labodc</div>

        <div className="pay__panel">
          <h1 className="pay__title">Thông tin thanh toán</h1>

          <div className="pay__steps">
            <span className="pay__step pay__step--active">1) Thông tin</span>
            <span className="pay__step">2) PayOS</span>
            <span className="pay__step">3) Kết quả</span>
            <span className="pay__step">Hoặc: Lịch sử</span>
          </div>

          {/* ✅ layout 2 cột: trái menu - phải nội dung */}
          <div className="pay__layout">
            <div className="pay__side">
              <PaymentSideMenu />
            </div>

            <div>
              {/* Demo form */}
              <div className="pay__form">
                <div className="pay__field">
                  <label>Gói</label>
                  <select defaultValue="basic">
                    <option value="basic">Basic</option>
                    <option value="pro">Pro</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </div>

                <div className="pay__field">
                  <label>Số tiền (VND)</label>
                  <input defaultValue="199000" />
                </div>

                <div className="pay__field">
                  <label>Email</label>
                  <input placeholder="email@gmail.com" />
                </div>

                <div className="pay__field">
                  <label>Số điện thoại</label>
                  <input placeholder="0xxxxxxxxx" />
                </div>
              </div>

              <div className="pay__actions">
                <button
                  className="pay__btn pay__btn--primary"
                  type="button"
                  onClick={() => navigate("/enterprise/payments/payos")}
                >
                  Tiếp tục: Thanh toán qua PayOS →
                </button>

                <Link className="pay__btn pay__btn--ghost" to="/enterprise/payments/result">
                  Xem nhanh: Kết quả thanh toán
                </Link>

                <Link className="pay__btn pay__btn--ghost" to="/enterprise/payments/history">
                  Xem Lịch sử thanh toán
                </Link>
              </div>

              <Link className="pay__back" to="/enterprise/payments">
                ← Quay lại Thanh toán
              </Link>
            </div>
          </div>
          {/* END layout */}
        </div>
      </div>
    </div>
  );
}
