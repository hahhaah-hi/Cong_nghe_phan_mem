import { useNavigate } from "react-router-dom";
import "/src/pages/talent/AppConfig.css";

export default function AppConfig() {
  const navigate = useNavigate();

  const handleSave = () => {
    alert("Đã lưu cấu hình!");
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
        <div className="appcfg-head">
          <div className="dashboard-brand">Labodc</div>
        </div>
      </header>

      <main className="appcfg-wrap">
        <div className="appcfg-title">
          <h2>Cấu hình ứng dụng</h2>
        </div>

        <section className="appcfg-card">
          <div className="appcfg-field">
            <label>Tên ứng dụng:</label>
            <input placeholder="Tên ứng dụng" />
          </div>

          <div className="appcfg-field">
            <label>Địa chỉ URL:</label>
            <input placeholder="Nhập địa chỉ URL" />
          </div>

          <div className="appcfg-field">
            <label>Tùy chọn bổ sung:</label>
            <div className="appcfg-checks">
              <label className="appcfg-check">
                <input type="checkbox" defaultChecked />
                <span>Cho phép đăng ký</span>
              </label>

              <label className="appcfg-check">
                <input type="checkbox" defaultChecked />
                <span>Bật kiểm thử ứng dụng</span>
              </label>

              <label className="appcfg-check">
                <input type="checkbox" defaultChecked />
                <span>Gửi thông báo qua email</span>
              </label>
            </div>
          </div>
        </section>
      </main>

      <button
        className="btn home-btn"
        type="button"
        onClick={() => navigate("/talent/settings")}
      >
        ← Quay lại
      </button>

      <button className="btn save-btn" type="button" onClick={handleSave}>
        Lưu
      </button>
    </div>
  );
}
