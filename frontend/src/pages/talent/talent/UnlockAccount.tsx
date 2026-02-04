import { Link } from "react-router-dom";
import "./UnlockAccount.css";

type Row = {
  id: number;
  name: string;
  status: "Đang Hoạt động" | "Đã khóa";
};

export default function UnlockAccount() {
  const rows: Row[] = [
    { id: 1, name: "Minh Nguyen", status: "Đang Hoạt động" },
    { id: 2, name: "Linh Tran", status: "Đã khóa" },
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
        <div className="dashboard-header-inner">
          <div className="dashboard-brand">Labodc</div>
        </div>
      </header>

      <main className="lock-wrap">
        <h2 className="lock-title">Khóa Mở tài khoản</h2>

        <section className="lock-card">
          <div className="lock-search">
            <span className="lock-search-ico">🔍</span>
            <input placeholder="Tìm kiếm tài khoản..." />
          </div>

          <div className="lock-table">
            <div className="lock-head">
              <div>Tên tài khoản</div>
              <div>Trạng thái</div>
              <div>Hành động</div>
            </div>

            {rows.map((r) => {
              const isActive = r.status === "Đang Hoạt động";
              return (
                <div className="lock-row" key={r.id}>
                  <div className="lock-name">{r.name}</div>

                  <div className="lock-status">
                    <span className={isActive ? "lock-pill ok" : "lock-pill bad"}>
                      {r.status}
                    </span>
                  </div>

                  <div className="lock-action">
                    <button
                      className={isActive ? "lock-btn danger" : "lock-btn safe"}
                      type="button"
                      onClick={() =>
                        alert(isActive ? "Khóa tài khoản" : "Mở khóa tài khoản")
                      }
                    >
                      {isActive ? "Khóa" : "Mở khóa"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Link className="btn home-btn" to="/talent/users">
        ← Quay lại
      </Link>
    </div>
  );
}
