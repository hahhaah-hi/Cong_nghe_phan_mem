import React, { useState } from "react";
import { Link } from "react-router-dom";
import EnterpriseTopNav from "./EnterpriseTopNav";
import CompanySideMenu from "./CompanySideMenu";
import "./CompanyProfilePages.css";

type Form = {
  name: string;
  taxCode: string;
  representative: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  industry: string;
  size: string;
};

const initial: Form = {
  name: "CÔNG TY TNHH ABC",
  taxCode: "0123456789",
  representative: "Nguyễn Văn A",
  phone: "0901 234 567",
  email: "abc@company.com",
  website: "https://abc.com",
  address: "123 Nguyễn Trãi, Q.1, TP.HCM",
  industry: "Công nghệ / Phần mềm",
  size: "51–200 nhân sự",
};

export default function CompanyProfileEdit() {
  const [form, setForm] = useState<Form>(initial);

  const set =
    (key: keyof Form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleSave = () => {
    console.log("SAVE PROFILE:", form);
    alert("Đã lưu (demo)!");
  };

  return (
    <div className="cpp">
      <div className="cpp__wrap">
        {/* TOP NAV 5 chức năng */}
        <EnterpriseTopNav />

        <div className="cpp__brand">Labodc</div>

        <div className="cpp__card">
          <div className="cpp__head">
            <div>
              <div className="cpp__title">Cập nhật hồ sơ doanh nghiệp</div>
              <div className="cpp__subtitle">Chỉnh sửa thông tin và lưu thay đổi.</div>
            </div>

            <div className="cpp__actions">
              <Link className="cpp__btn cpp__btn--ghost" to="/enterprise/company">
                ← Quay lại
              </Link>
              <button
                className="cpp__btn cpp__btn--primary"
                type="button"
                onClick={handleSave}
              >
                Lưu thay đổi
              </button>
            </div>
          </div>

          {/* ✅ LAYOUT: trái menu - phải form */}
          <div className="cpp__layout">
            <div className="cpp__side">
              <CompanySideMenu />
            </div>

            <div>
              {/* Form giữ nguyên */}
              <div className="cpp__formGrid">
                <div className="cpp__field">
                  <div className="cpp__fLabel">Tên doanh nghiệp</div>
                  <input className="cpp__input" value={form.name} onChange={set("name")} />
                </div>

                <div className="cpp__field">
                  <div className="cpp__fLabel">Mã số thuế</div>
                  <input className="cpp__input" value={form.taxCode} onChange={set("taxCode")} />
                </div>

                <div className="cpp__field">
                  <div className="cpp__fLabel">Người đại diện</div>
                  <input
                    className="cpp__input"
                    value={form.representative}
                    onChange={set("representative")}
                  />
                </div>

                <div className="cpp__field">
                  <div className="cpp__fLabel">Số điện thoại</div>
                  <input className="cpp__input" value={form.phone} onChange={set("phone")} />
                </div>

                <div className="cpp__field">
                  <div className="cpp__fLabel">Email</div>
                  <input className="cpp__input" value={form.email} onChange={set("email")} />
                </div>

                <div className="cpp__field">
                  <div className="cpp__fLabel">Website</div>
                  <input className="cpp__input" value={form.website} onChange={set("website")} />
                </div>

                <div className="cpp__field cpp__field--full">
                  <div className="cpp__fLabel">Địa chỉ</div>
                  <input className="cpp__input" value={form.address} onChange={set("address")} />
                </div>

                <div className="cpp__field">
                  <div className="cpp__fLabel">Ngành nghề</div>
                  <input className="cpp__input" value={form.industry} onChange={set("industry")} />
                </div>

                <div className="cpp__field">
                  <div className="cpp__fLabel">Quy mô</div>
                  <select className="cpp__input" value={form.size} onChange={set("size")}>
                    <option value="1–10 nhân sự">1–10 nhân sự</option>
                    <option value="11–50 nhân sự">11–50 nhân sự</option>
                    <option value="51–200 nhân sự">51–200 nhân sự</option>
                    <option value="201–500 nhân sự">201–500 nhân sự</option>
                    <option value="500+ nhân sự">500+ nhân sự</option>
                  </select>
                </div>
              </div>

              <div className="cpp__bottomLinks">
                <Link className="cpp__btn cpp__btn--ghost" to="/enterprise/company/verify-submit">
                  Tiếp theo: Gửi xác thực →
                </Link>
              </div>
            </div>
          </div>
          {/* END layout */}
        </div>
      </div>
    </div>
  );
}
