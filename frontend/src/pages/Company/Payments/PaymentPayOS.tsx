import { Link, useNavigate } from "react-router-dom";
import EnterpriseTopNav from "../EnterpriseTopNav";
import PaymentSideMenu from "./PaymentSideMenu";
import "./Payment.css";

export default function PaymentPayOS() {
  const navigate = useNavigate();

  return (
    <div className="pay">
      <div className="pay__wrap">
        <EnterpriseTopNav />
        <div className="pay__brand">Labodc</div>

        <div className="pay__panel">
          <h1 className="pay__title">Thanh toán qua PayOS</h1>

          <div className="pay__steps">
            <span className="pay__step">1) Thông tin</span>
            <span className="pay__step pay__step--active">2) PayOS</span>
            <span className="pay__step">3) Kết quả</span>
            <span className="pay__step">Hoặc: Lịch sử</span>
          </div>

          <div className="pay__layout">
            <div className="pay__side">
              <PaymentSideMenu />
            </div>

            <div>
              <p className="pay__subtitle" style={{ marginBottom: 14 }}>
                (Demo) Ở đây bạn sẽ gọi API tạo payment link và redirect sang PayOS.
              </p>

              <div className="pay__actions">
                <button
                  type="button"
                  className="pay__btn pay__btn--primary"
                  onClick={() => navigate("/enterprise/payments/result")}
                >
                  Giả lập thanh toán thành công →
                </button>

                <Link className="pay__btn pay__btn--ghost" to="/enterprise/payments/info">
                  ← Quay lại nhập thông tin
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
