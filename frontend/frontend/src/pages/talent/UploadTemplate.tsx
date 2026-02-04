import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import "./UploadTemplate.css";

export default function UploadTemplate() {
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

  const handleUpload = () => {
    if (!fileRef.current?.files?.[0]) {
      alert("Bạn chưa chọn file!");
      return;
    }
    alert(`Đang tải lên: ${fileRef.current.files[0].name}`);
  };

  return (
    <div className="page-bg">
      <header className="page-header">
        <div className="brand">Labodc</div>
      </header>

      <main className="content">
        <h1 className="page-title">Tải lên</h1>

        <section className="card">
          <div className="panel">
            <div className="upload-icon">
              <span className="upload-icon-inner">↑</span>
            </div>

            <button className="pick-btn" onClick={pickFile}>
              {fileName || "Chọn file để tải lên"}
            </button>

            <input
              ref={fileRef}
              type="file"
              accept=".xlsx,.xls"
              onChange={handleChange}
              hidden
            />

            <div className="actions">
              <button className="btn ghost" onClick={handleCancel}>
                Hủy bỏ
              </button>
              <button className="btn primary" onClick={handleUpload}>
                Tải lên
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
