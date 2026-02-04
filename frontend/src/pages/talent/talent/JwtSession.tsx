import { useState } from "react";
import { Link } from "react-router-dom";
import "/src/pages/talent/JwtSession.css";

export default function JwtSession() {
  const [secret, setSecret] = useState("");
  const [ttl, setTtl] = useState("");
  const [refresh, setRefresh] = useState(true);
  const [multiDevice, setMultiDevice] = useState(true);

  const handleSave = () => {
    alert("Đã lưu JWT Session!");
  };

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
        <div className="jwt-head">
          <div className="dashboard-brand">Labodc</div>
        </div>
      </header>

      <main className="jwt-wrap">
        <div className="jwt-title">
          <h2>Bảo mật JWT Session</h2>
        </div>

        <section className="jwt-card">
          <div className="jwt-field">
            <label>Khóa bảo mật:</label>
            <input
              placeholder="Nhập khóa bí mật"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <div className="jwt-field">
            <label>Thời gian sống của JWT:</label>

            <div className="jwt-ttl">
              <input
                placeholder="Nhập thời gian sống "
                value={ttl}
                onChange={(e) => setTtl(e.target.value)}
              />
            </div>
          </div>

          <div className="jwt-checks">
            <label className="jwt-check">
              <input
                type="checkbox"
                checked={refresh}
                onChange={(e) => setRefresh(e.target.checked)}
              />
              <span>Yêu cầu làm mới JWT</span>
            </label>

            <label className="jwt-check">
              <input
                type="checkbox"
                checked={multiDevice}
                onChange={(e) => setMultiDevice(e.target.checked)}
              />
              <span>Cho phép nhiều thiết bị đăng nhập</span>
            </label>
          </div>
        </section>
      </main>

      <Link className="btn home-btn" to="/talent/settings">
        ← Quay lại
      </Link>

      <button className="btn save-btn" type="button" onClick={handleSave}>
        Lưu
      </button>
    </div>
  );
}
