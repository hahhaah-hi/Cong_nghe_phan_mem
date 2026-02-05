import { Link } from "react-router-dom";
import EnterpriseTopNav from "./EnterpriseTopNav";
import CompanySideMenu from "./CompanySideMenu";
import "./CompanyProfilePages.css";

type CompanyProfile = {
  name: string;
  taxCode: string;
  phone: string;
  email: string;
  address: string;
  representative: string;
  website: string;
  industry: string;
  size: string;
  createdAt: string;
};

const demoProfile: CompanyProfile = {
  name: "CÔNG TY TNHH ABC",
  taxCode: "0123456789",
  phone: "0901 234 567",
  email: "abc@company.com",
  address: "123 Nguyễn Trãi, Q.1, TP.HCM",
  representative: "Nguyễn Văn A",
  website: "https://abc.com",
  industry: "Công nghệ / Phần mềm",
  size: "51–200 nhân sự",
  createdAt: "2026-01-26",
};

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="cpp__row">
      <div className="cpp__label">{label}</div>
      <div className="cpp__value">{value}</div>
    </div>
  );
}

export default function CompanyProfileView() {
  const p = demoProfile;

  return (
    <div className="cpp">
      <div className="cpp__wrap">
        <EnterpriseTopNav />

        <div className="cpp__brand">Labodc</div>

        <div className="cpp__card">
          <div className="cpp__head">
            <div>
              <div className="cpp__title">Xem hồ sơ doanh nghiệp</div>
              <div className="cpp__subtitle">Thông tin tổng quan và liên hệ doanh nghiệp.</div>
            </div>

            <div className="cpp__actions">
              <Link className="cpp__btn cpp__btn--ghost" to="/enterprise/company">
                ← Quay lại
              </Link>
              <Link className="cpp__btn cpp__btn--primary" to="/enterprise/company/edit">
                Cập nhật hồ sơ
              </Link>
            </div>
          </div>

          {/* ✅ LAYOUT: đổi cpm__layout/cpm__side => cpp__layout/cpp__side */}
          <div className="cpp__layout">
            <div className="cpp__side">
              <CompanySideMenu />
            </div>

            <div>
              <div className="cpp__grid">
                <div className="cpp__box">
                  <div className="cpp__boxTitle">Thông tin doanh nghiệp</div>
                  <Row label="Tên doanh nghiệp" value={p.name} />
                  <Row label="Mã số thuế" value={p.taxCode} />
                  <Row label="Ngành nghề" value={p.industry} />
                  <Row label="Quy mô" value={p.size} />
                  <Row label="Ngày tạo hồ sơ" value={p.createdAt} />
                </div>

                <div className="cpp__box">
                  <div className="cpp__boxTitle">Liên hệ</div>
                  <Row label="Người đại diện" value={p.representative} />
                  <Row label="Số điện thoại" value={p.phone} />
                  <Row label="Email" value={p.email} />
                  <Row label="Website" value={p.website} />
                  <Row label="Địa chỉ" value={p.address} />
                </div>
              </div>

              <div className="cpp__note">
                * Đây là dữ liệu mẫu (demo). Khi nối API thật, bạn chỉ thay `demoProfile` bằng dữ liệu từ server.
              </div>
            </div>
          </div>
          {/* END layout */}
        </div>
      </div>
    </div>
  );
}
