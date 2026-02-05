import { Link } from "react-router-dom";
import "./ChangeCancelStatus.css";
import ChangeCancelSideMenu from "./ChangeCancelSideMenu";

type Item = {
  id: string;
  project: string;
  type: "Thay đổi" | "Hủy";
  status: "Đang xử lý" | "Đã duyệt" | "Từ chối";
  updatedAt: string;
};

const MOCK: Item[] = [
  { id: "YC-001", project: "Dự án hệ thống A", type: "Thay đổi", status: "Đang xử lý", updatedAt: "2026-01-26" },
  { id: "YC-002", project: "Dự án hệ thống B", type: "Hủy", status: "Đã duyệt", updatedAt: "2026-01-20" },
  { id: "YC-003", project: "Dự án CRM", type: "Thay đổi", status: "Từ chối", updatedAt: "2026-01-18" },
];

export default function ChangeCancelStatus() {
  return (
    <div className="ccs">
      <div className="ccs__wrap ccs__wrap--withSide">
        {/* LEFT MENU */}
        <aside className="ccs__side">
          <ChangeCancelSideMenu />
        </aside>

        {/* RIGHT CONTENT */}
        <div className="ccs__main">
          <div className="ccs__brand">Labodc</div>

          <div className="ccs__panel">
            <div className="ccs__head">
              <h1 className="ccs__title">Trạng thái xử lý</h1>
              <p className="ccs__sub">Danh sách yêu cầu thay đổi / hủy dự án.</p>
            </div>

            <div className="ccs__table">
              <div className="ccs__row ccs__row--head">
                <div>Mã</div>
                <div>Dự án</div>
                <div>Loại</div>
                <div>Trạng thái</div>
                <div>Cập nhật</div>
              </div>

              {MOCK.map((it) => (
                <div key={it.id} className="ccs__row">
                  <div className="ccs__mono">{it.id}</div>
                  <div className="ccs__strong">{it.project}</div>
                  <div>{it.type}</div>
                  <div className={`ccs__pill ccs__pill--${pillKey(it.status)}`}>{it.status}</div>
                  <div className="ccs__muted">{it.updatedAt}</div>
                </div>
              ))}
            </div>

            <div className="ccs__bottom">
              <Link className="ccs__back" to="/enterprise/projects/change-cancel">
                ← Quay lại
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function pillKey(s: Item["status"]) {
  if (s === "Đã duyệt") return "ok";
  if (s === "Từ chối") return "bad";
  return "pending";
}
