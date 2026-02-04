import { useState } from "react";
import { Link } from "react-router-dom";
import EnterpriseTopNav from "./EnterpriseTopNav";
import CompanySideMenu from "./CompanySideMenu";
import "./CompanyVerify.css";

type StatusKey = "not_sent" | "processing" | "ok" | "fail";

const STATUS_LABEL: Record<StatusKey, string> = {
  not_sent: "Chưa gửi",
  processing: "Đang xử lý",
  ok: "Đã xác thực",
  fail: "Từ chối",
};

const BADGE: Record<StatusKey, string> = {
  not_sent: "📭",
  processing: "⏳",
  ok: "✅",
  fail: "⛔",
};

export default function CompanyVerifyStatus() {
  const [statusKey, setStatusKey] = useState<StatusKey>("processing");

  return (
    <div className="cv">
      <div className="cv__wrap">
        <EnterpriseTopNav />

        <div className="cv__brand">Labodc</div>

        <div className="cv__card">
          <div className="cv__title">Trạng thái xác thực</div>
          <div className="cv__subtitle">Theo dõi tiến trình xác thực doanh nghiệp.</div>

          {/* ✅ layout 2 cột: menu trái - nội dung phải */}
          <div className="cv__layout">
            <div className="cv__side">
              <CompanySideMenu prefix="cv" />
            </div>

            <div>
              {/* Demo đổi trạng thái */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                <button className="cv__btn cv__btn--ghost" onClick={() => setStatusKey("not_sent")}>
                  Chưa gửi
                </button>
                <button
                  className="cv__btn cv__btn--ghost"
                  onClick={() => setStatusKey("processing")}
                >
                  Đang xử lý
                </button>
                <button className="cv__btn cv__btn--ghost" onClick={() => setStatusKey("ok")}>
                  Đã xác thực
                </button>
                <button className="cv__btn cv__btn--ghost" onClick={() => setStatusKey("fail")}>
                  Từ chối
                </button>
              </div>

              <div className="cv__statusBox">
                <div className="cv__statusLeft">
                  <div className="cv__statusLabel">Trạng thái hiện tại</div>
                  <div className="cv__statusValue">{STATUS_LABEL[statusKey]}</div>
                </div>
                <div className="cv__badge">{BADGE[statusKey]}</div>
              </div>

              <div className="cv__timeline">
                <div className="cv__step cv__step--done">1) Gửi yêu cầu</div>
                <div className="cv__step cv__step--doing">2) Lab kiểm tra</div>
                <div className="cv__step">3) Kết quả</div>
              </div>

              <div className="cv__bottom">
                <Link className="cv__btn cv__btn--ghost" to="/enterprise/company">
                  ← Quay lại Hồ sơ doanh nghiệp
                </Link>

                <Link className="cv__btn cv__btn--ghost" to="/enterprise/company/verify-submit">
                  Gửi lại yêu cầu →
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
