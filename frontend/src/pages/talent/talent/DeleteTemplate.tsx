import { Link, useNavigate } from "react-router-dom";
import "./DeleteTemplate.css";

export default function DeleteTemplate() {
  const navigate = useNavigate();

  const handleDelete = () => {
    alert("Đã xóa !");
    navigate("/talent/templates", { replace: true });
  };

  const handleCancel = () => navigate("/talent/templates");

  return (
    <div className="page-bg">
      <header className="page-header">
        <div className="brand">Labodc</div>
      </header>

      <main className="content">
        <h1 className="page-title">Xóa</h1>

        <section className="card">
          <div className="panel">
            <div className="danger-icon">
              <span className="danger-icon-inner">🗑️</span>
            </div>

            <div className="confirm-text">
              Bạn có chắc chắn muốn <br />
              xóa không?
            </div>

            <div className="actions">
              <button className="btn ghost" type="button" onClick={handleCancel}>
                Hủy bỏ
              </button>

              <button className="btn danger" type="button" onClick={handleDelete}>
                Xóa
              </button>
            </div>
          </div>
        </section>
      </main>

      <Link to="/talent/templates" className="back-btn">
        ← Quay lại
      </Link>
    </div>
  );
}
