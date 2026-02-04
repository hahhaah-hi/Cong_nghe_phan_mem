import { Link } from "react-router-dom";
import EnterpriseTopNav from "./EnterpriseTopNav";
import CompanySideMenu from "./CompanySideMenu";
import "./CompanyVerify.css";

export default function CompanyVerifySubmit() {
  return (
    <div className="cv">
      <div className="cv__wrap">
        <EnterpriseTopNav />

        <div className="cv__brand">Labodc</div>

        <div className="cv__card">
          <div className="cv__title">Gửi xác thực Lab</div>
          <div className="cv__subtitle">
            Điền thông tin và tải tài liệu để gửi yêu cầu xác thực doanh nghiệp.
          </div>

          {/* ✅ layout 2 cột: menu trái - form phải */}
          <div className="cv__layout">
            <div className="cv__side">
              <CompanySideMenu prefix="cv" />
            </div>

            <div>
              <div className="cv__form">
                <div className="cv__row">
                  <label className="cv__label">Tên doanh nghiệp</label>
                  <input className="cv__input" placeholder="VD: Công ty ABC" />
                </div>

                <div className="cv__row">
                  <label className="cv__label">Mã số thuế</label>
                  <input className="cv__input" placeholder="VD: 0123456789" />
                </div>

                <div className="cv__row">
                  <label className="cv__label">Người đại diện</label>
                  <input className="cv__input" placeholder="VD: Nguyễn Văn A" />
                </div>

                <div className="cv__row">
                  <label className="cv__label">Tài liệu xác thực (PDF/JPG/PNG)</label>
                  <input className="cv__input" type="file" />
                  <div className="cv__hint">Gợi ý: Giấy phép kinh doanh / CCCD / tài liệu liên quan.</div>
                </div>

                <button
                  type="button"
                  className="cv__btn cv__btn--primary"
                  onClick={() => alert("Đã gửi xác thực (demo)!")}
                >
                  Gửi xác thực
                </button>
              </div>

              <div className="cv__bottom">
                <Link className="cv__btn cv__btn--ghost" to="/enterprise/company">
                  ← Quay lại Hồ sơ doanh nghiệp
                </Link>

                <Link className="cv__btn cv__btn--ghost" to="/enterprise/company/verify-status">
                  Xem trạng thái →
                </Link>
              </div>
            </div>
          </div>
          {/* end layout */}
        </div>
      </div>
    </div>
  );
}
