import { Link } from "react-router-dom";
import "./Permission.css";

type UserRow = {
  id: number;
  name: string;
  role: string;
  status: "Hoạt động" | "Đã khóa";
};

export default function Permission() {
  const rows: UserRow[] = [
    { id: 1, name: "Minh Nguyen", role: "Administrator", status: "Hoạt động" },
    { id: 2, name: "Linh Tran", role: "Editor", status: "Hoạt động" },
    { id: 3, name: "Hoang Le", role: "Viewer", status: "Đã khóa" },
  ];

  return (
    <div className="dashboard-bg">
      <div className="dashboard-browser">
        <div className="browser-left">
        </div>
        <div className="browser-addr" />
        <div className="browser-right">
          <span className="dot gray" />
          <span className="dot gray" />
          <span className="dot gray" />
        </div>
      </div>

      <header className="dashboard-header">
        <div className="perm-head">
          <div className="dashboard-brand">Labodc</div>
        </div>
      </header>

      <main className="perm-wrap">
        <h2 className="perm-title">Phân quyền</h2>

        <section className="perm-card">
          <div className="perm-tools">
            <div className="perm-search">
              <span className="perm-search-ico">🔍</span>
              <input placeholder="Tìm kiếm người dùng..." />
            </div>

            <button className="perm-add" type="button">
              + Thêm người dùng
            </button>
          </div>

          <div className="perm-table">
            <div className="perm-head-row">
              <div>Tên tài khoản</div>
              <div>Vai trò</div>
              <div>Trạng thái</div>
            </div>

            {rows.map((r) => (
              <div className="perm-row" key={r.id}>
                <div className="perm-name">{r.name}</div>
                <div className="perm-role">{r.role}</div>
                <div className="perm-status">
                  <button
                    className={
                      r.status === "Hoạt động"
                        ? "perm-pill ok"
                        : "perm-pill lock"
                    }
                    type="button"
                  >
                    {r.status} <span className="perm-caret">▼</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="perm-pager">
            <button className="perm-page-btn" type="button">
              ‹
            </button>
            <div className="perm-page-text">1 - 3 / 3</div>
            <button className="perm-page-btn" type="button">
              ›
            </button>
          </div>
        </section>
      </main>

      <Link className="btn home-btn" to="/talent/users">
        ← Quay lại
      </Link>
    </div>
  );
}
