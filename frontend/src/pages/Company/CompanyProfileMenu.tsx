import { Link } from "react-router-dom";
import EnterpriseShell from "./EnterpriseShell";
import "./CompanyProfileMenu.css";

function BuildingIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="10" y="16" width="30" height="38" rx="6" fill="rgba(10,168,163,0.18)" />
      <rect x="16" y="22" width="8" height="6" rx="2" fill="rgba(10,168,163,0.35)" />
      <rect x="28" y="22" width="8" height="6" rx="2" fill="rgba(10,168,163,0.35)" />
      <rect x="16" y="32" width="8" height="6" rx="2" fill="rgba(10,168,163,0.35)" />
      <rect x="28" y="32" width="8" height="6" rx="2" fill="rgba(10,168,163,0.35)" />
      <rect x="16" y="42" width="20" height="12" rx="3" fill="rgba(19,42,42,0.10)" />
      <path
        d="M42 26c6-6 10-7 12-5s1 6-5 12-10 7-12 5-1-6 5-12z"
        fill="rgba(10,168,163,0.12)"
      />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="12" y="14" width="40" height="36" rx="8" fill="rgba(10,168,163,0.14)" />
      <path
        d="M22 40l3-9 16-16c1-1 3-1 4 0l3 3c1 1 1 3 0 4L36 38l-9 2z"
        fill="rgba(10,168,163,0.35)"
      />
      <path d="M22 40l9-2" stroke="rgba(19,42,42,0.25)" strokeWidth="2" />
      <rect x="20" y="48" width="24" height="4" rx="2" fill="rgba(19,42,42,0.10)" />
    </svg>
  );
}

function VerifyIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="12" y="14" width="40" height="36" rx="10" fill="rgba(10,168,163,0.14)" />
      <path
        d="M24 34l6 6 14-16"
        stroke="rgba(10,168,163,0.75)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="20" y="48" width="24" height="4" rx="2" fill="rgba(19,42,42,0.10)" />
    </svg>
  );
}

function StatusIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="12" y="14" width="40" height="36" rx="10" fill="rgba(10,168,163,0.14)" />
      <circle cx="32" cy="32" r="12" fill="rgba(10,168,163,0.18)" />
      <path
        d="M32 24v9l6 4"
        stroke="rgba(19,42,42,0.35)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="20" y="48" width="24" height="4" rx="2" fill="rgba(19,42,42,0.10)" />
    </svg>
  );
}

export default function CompanyProfileMenu() {
  return (
    <EnterpriseShell>
      <div className="cpm__card">
        <div className="cpm__title">Hồ sơ doanh nghiệp</div>
        <div className="cpm__subtitle">
          Hoàn tất hồ sơ → Gửi xác thực Lab → Theo dõi trạng thái xác thực.
        </div>

        <Link to="/enterprise/company-flow" className="cpm__flowLink">
          Xem sơ đồ →
        </Link>

        <div className="cpm__grid">
          <Link to="/enterprise/company/view" className="cpm__tile">
            <div className="cpm__icon"><BuildingIcon /></div>
            <div className="cpm__tileTitle">Xem hồ sơ</div>
            <div className="cpm__tileDesc">Thông tin doanh nghiệp • Liên hệ • Thông tin chung</div>
          </Link>

          <Link to="/enterprise/company/edit" className="cpm__tile">
            <div className="cpm__icon"><EditIcon /></div>
            <div className="cpm__tileTitle">Cập nhật hồ sơ</div>
            <div className="cpm__tileDesc">Chỉnh sửa thông tin • Tải tài liệu • Lưu thay đổi</div>
          </Link>

          <Link to="/enterprise/company/verify-submit" className="cpm__tile">
            <div className="cpm__icon"><VerifyIcon /></div>
            <div className="cpm__tileTitle">Gửi xác thực Lab</div>
            <div className="cpm__tileDesc">Gửi yêu cầu • Tải tài liệu • Xác minh doanh nghiệp</div>
          </Link>

          <Link to="/enterprise/company/verify-status" className="cpm__tile">
            <div className="cpm__icon"><StatusIcon /></div>
            <div className="cpm__tileTitle">Trạng thái xác thực</div>
            <div className="cpm__tileDesc">Theo dõi xử lý • Kết quả • Gửi lại nếu cần</div>
          </Link>
        </div>

        <div className="cpm__bottom">
          <Link className="cpm__btn cpm__btn--ghost" to="/enterprise">
            ← Quay lại Bảng điều khiển
          </Link>
        </div>
      </div>
    </EnterpriseShell>
  );
}
