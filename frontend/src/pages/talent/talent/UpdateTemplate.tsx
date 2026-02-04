import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import "./UpdateTemplate.css";

export default function UpdateTemplate() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState("");

  const pickFile = () => fileRef.current?.click();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    setFileName(f ? f.name : "");
  };

  const handleCancel = () => {
    setFileName("");
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleUpdate = () => {
    const file = fileRef.current?.files?.[0];
    if (!file) {
      alert("Bạn chưa chọn file!");
      return;
    }
    alert(`Đang cập nhật: ${file.name}`);
  };

  return (
    <div className="page-bg">
      <header className="page-header">
        <div className="brand">Labodc</div>
      </header>

      <main className="content">
        <h1 className="page-title">Cập nhật</h1>

        <section className="card">
          <div className="panel">
            <div className="upload-icon">
              <span className="upload-icon-inner">🕒</span>
            </div>

            <button className="pick-btn" onClick={pickFile} type="button">
              {fileName || "Chọn file để cập nhật"}
            </button>

            <input
              ref={fileRef}
              type="file"
              accept=".xlsx,.xls"
              onChange={handleChange}
              hidden
            />

            <div className="actions">
              <button className="btn ghost" onClick={handleCancel} type="button">
                Hủy bỏ
              </button>
              <button className="btn primary" onClick={handleUpdate} type="button">
                Cập nhật
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
