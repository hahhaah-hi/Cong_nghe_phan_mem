import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PerformanceReport.css";

export default function PerformanceReport() {
  const navigate = useNavigate();
  const [content, setContent] = useState(
    "• Việc đã làm\n• Tiến độ hiện tại\n• Khó khăn / vướng mắc\n• Kế hoạch tiếp theo"
  );
  const [fakeFileName, setFakeFileName] = useState<string>("Chưa chọn file");

  const submit = () => {
    alert("Đã gửi báo cáo (mô phỏng)!");
  };

  return (
    <div className="portalPage">
      

      <div className="reportWrap">
        <div className="reportBrand">Labodc</div>
        <div className="reportTitle">GỬI BÁO CÁO TIẾN ĐỘ</div>
        <div className="reportSub">
          Nhập nội dung và đính kèm file ( nếu có). Mentor sẽ theo dõi tiến độ theo kỳ.
        </div>

        <div className="reportCard">
          <div className="reportGrid2">
            {/* left box */}
            <div className="reportBox">
              <div className="reportBoxHead">Nội dung báo cáo</div>

              <div className="reportLabel">Nhập nội dung báo cáo.</div>
              <div className="reportHint">
                Gợi ý : việc đã làm, tiến độ , khó khăn, kế hoạch tiếp theo.
              </div>

              <textarea
                className="reportTextarea"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />

              <div className="reportTip">Mẹo : Nhấn Enter để xuống dòng.</div>

              <button className="reportBtn" type="button" onClick={submit}>
                GỬI BÁO CÁO
              </button>
            </div>

            {/* right box */}
            <div className="reportBox">
              <div className="reportUploadTitle">
                Upload file <span className="mutedTeal">( mô phỏng)</span>
              </div>

              <div className="uploadCard">
                <div className="uploadRow">
                  <span className="paperclip">📎</span>
                  <div>
                    <div className="uploadPick">Chọn file ( PDF, DOCX, PNG )</div>
                    <div className="uploadName">{fakeFileName}</div>
                  </div>
                </div>

                <button className="reportBtn" type="button" onClick={submit}>
                  GỬI BÁO CÁO
                </button>

                <button
                  className="miniBtn"
                  style={{ marginTop: 10 }}
                  type="button"
                  onClick={() => setFakeFileName("report_demo.pdf")}
                >
                  Chọn file (mô phỏng)
                </button>
              </div>

              <div className="radioRow">
                <span className="radioDot" />
                <b>Dữ liệu nhập (Input)</b>
              </div>

              <ul className="reportBullets">
                <li>Chọn 1 file đính kèm (mô phỏng)</li>
                <li>Ví dụ : PDF, DOCX, PNG</li>
              </ul>

              <button className="reportBtn" type="button" onClick={submit}>
                GỬI BÁO CÁO
              </button>
            </div>
          </div>
        </div>

        <button className="backPortalBtn" onClick={() => navigate("/talent/leader")}>
          ← Quay lại 
        </button>
      </div>
    </div>
  );
}
