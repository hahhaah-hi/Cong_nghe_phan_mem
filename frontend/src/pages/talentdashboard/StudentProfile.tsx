import { useNavigate } from "react-router-dom";
import "./StudentProfile.css";

export default function StudentProfile() {
  const navigate = useNavigate();

  return (
    <div className="portalPage">
     
      {/* Top header area like the image */}
      <div className="topBand">
        <div className="profileHeader">
          <div className="profileBrand">Labodc</div>
          <div className="profileSub">HỒ SƠ SINH VIÊN</div>
        </div>
      </div>

      <div className="profileWrap">
        <div className="profileSectionTitle">Thông tin cá nhân</div>

        <div className="profileCard">
          <div className="profileAvatar">SV</div>

          <div className="profileInfo">
            <div>
              <b>Họ tên</b> : Nguyễn Văn A
            </div>
            <div>
              <b>MSSV</b> : 123456789
            </div>
            <div>
              <b>Email</b> : svuth@gmail.com
            </div>
            <div>
              <b>SDT</b> : 01254353634
            </div>
          </div>
        </div>

        <div className="profileGrid">
          <div className="profileMiniCard">
  <div className="miniTitle skill">
    <span className="miniIcon" aria-hidden />
    Cập nhật kỹ năng
  </div>

  {/* Kỹ năng mềm */}
  <div className="skillRow">
    <div className="skillTop">
      <div className="skillLabel">Kỹ năng mềm</div>
      <div className="skillPill">6 / 10</div>
    </div>

    <div className="skillTrack">
      <div className="skillSeg teal" style={{ width: "60%" }} />
    </div>
  </div>

  {/* Kỹ năng chuyên môn */}
  <div className="skillRow">
    <div className="skillTop">
      <div className="skillLabel">Kỹ năng chuyên môn</div>
      <div className="skillPill">5 / 10</div>
    </div>

    <div className="skillTrack">
      <div className="skillSeg teal" style={{ width: "35%" }} />
      <div className="skillSeg amber" style={{ width: "15%" }} />
    </div>
  </div>

  <button className="miniBtn">CẬP NHẬT</button>
</div>

          <div className="profileMiniCard">
            <div className="miniTitle cert">
              <span className="miniIcon" aria-hidden />
              Quản lý chứng chỉ
            </div>

            <ul className="miniList">
              <li>Bằng TOEIC</li>
              <li>Chứng chỉ Lập trình Java</li>
              <li>Chứng chỉ Data Science</li>
              <li className="miniMore">+5 chứng chỉ khác</li>
            </ul>

            <button className="miniBtn">XEM CHỨNG CHỈ</button>
          </div>

          <div className="profileMiniCard">
            <div className="miniTitle port">
              <span className="miniIcon" aria-hidden />
              Portfolio
            </div>

            <ul className="miniList">
              <li>Dự án xây dựng Websiite ABCD</li>
              <li>Đề tài phân tích dữ liệu kinh doanh</li>
              <li className="miniMore">+2 dự án khác</li>
            </ul>

            <button className="miniBtn">QUẢN LÝ PORTFOLIO</button>
          </div>
        </div>

        <div className="profileSectionTitle mt18">Trạng thái dự án</div>

        <div className="projectRow">
          <div className="projectCard">
            <div className="projectTitle">
              <b>Dự án</b> : LabOdc - Kết nối DN &amp; SV UTH
            </div>

            <div className="projectStatus">
              <div className="pill">Đang tham gia</div>
              <div className="progress">
                <div className="progressFill" style={{ width: "78%" }} />
              </div>
              <button className="miniBtn small">XEM CHI TIẾT</button>
            </div>
          </div>

          <div className="projectCard smallCard">
            <div className="miniTitle port compact">
              <span className="miniIcon" aria-hidden />
              Portfolio
            </div>
            <button className="miniBtn">QUẢN LÝ PORTFOLIO</button>
          </div>
        </div>

        <button className="backPortalBtn" onClick={() => navigate("/talent")}>
          ← Quay lại
        </button>
      </div>
    </div>
  );
}