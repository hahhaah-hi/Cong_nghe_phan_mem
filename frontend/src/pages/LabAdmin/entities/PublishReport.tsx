import { useState } from "react";
import "./PublishReport.css";
import BackButton from "../BackButton";


export default function PublishReport() {
  const [published, setPublished] = useState(false);

  return (
    <div className="publish-container">
      <BackButton />

      <h2>Công bố báo cáo</h2>

      <div className="publish-box">
        <p>Báo cáo tháng 12/2025</p>

        {!published ? (
          <button
            className="btn-publish"
            onClick={() => setPublished(true)}
          >
            Công bố
          </button>
        ) : (
          <span className="published-text">✓ Đã công bố</span>
        )}
      </div>
    </div>
  );
}
