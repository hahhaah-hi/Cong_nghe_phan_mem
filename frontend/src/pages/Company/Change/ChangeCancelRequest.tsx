import { Link } from "react-router-dom";
import "./ChangeCancelRequest.css";
import ChangeCancelSideMenu from "./ChangeCancelSideMenu";

export default function ChangeCancelRequest() {
  return (
    <div className="ccr">
      <div className="ccr__wrap ccr__wrap--withSide">
        {/* LEFT MENU */}
        <aside className="ccr__side">
          <ChangeCancelSideMenu />
        </aside>

        {/* RIGHT CONTENT */}
        <div className="ccr__main">
          <div className="ccr__brand">Labodc</div>

          <div className="ccr__panel">
            <div className="ccr__head">
              <h1 className="ccr__title">Gửi yêu cầu thay đổi / hủy dự án</h1>
              <p className="ccr__sub">Nhập thông tin để tạo yêu cầu.</p>
            </div>

            <form className="ccr__form" onSubmit={(e) => e.preventDefault()}>
              <label className="ccr__field ccr__field--full">
                <span className="ccr__label">Tên dự án</span>
                <input className="ccr__input" placeholder="VD: Dự án xây dựng hệ thống A" />
              </label>

              <label className="ccr__field">
                <span className="ccr__label">Loại yêu cầu</span>
                <select className="ccr__input">
                  <option>Thay đổi</option>
                  <option>Hủy</option>
                </select>
              </label>

              <label className="ccr__field">
                <span className="ccr__label">Mức ưu tiên</span>
                <select className="ccr__input">
                  <option>Bình thường</option>
                  <option>Cao</option>
                  <option>Khẩn cấp</option>
                </select>
              </label>

              <label className="ccr__field ccr__field--full">
                <span className="ccr__label">Nội dung yêu cầu</span>
                <textarea
                  className="ccr__textarea"
                  rows={6}
                  placeholder="Mô tả thay đổi/hủy, lý do, tác động..."
                />
              </label>

              <label className="ccr__field ccr__field--full">
                <span className="ccr__label">Ghi chú</span>
                <textarea className="ccr__textarea" rows={4} placeholder="VD: Ưu tiên xử lý trong tuần này" />
              </label>

              <div className="ccr__actions">
                <Link className="ccr__btn ccr__btn--ghost" to="/enterprise/projects/change-cancel">
                  ← Quay lại
                </Link>
                <button className="ccr__btn ccr__btn--primary" type="submit">
                  Gửi yêu cầu
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
