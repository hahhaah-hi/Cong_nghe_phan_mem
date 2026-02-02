import { useNavigate } from "react-router-dom";
import "./JoinSelect.css";

type Project = {
  id: string;
  title: string;
  code: string;
  advisor: string;
};

const PROJECTS: Project[] = [
  { id: "UTH-001", title: "LabOdc – Kết nối doanh nghiệp & sinh viên UTH", code: "UTH-001", advisor: "Nguyễn Văn A" },
  { id: "UTH-002", title: "Ứng dụng quản lý sinh viên", code: "UTH-002", advisor: "Trần Thị B" },
  { id: "UTH-003", title: "Hệ thống quản lý kho hàng", code: "UTH-003", advisor: "Bùi Thị C" },
  { id: "UTH-004", title: "App quản lý trường học", code: "UTH-004", advisor: "Phạm Minh D" },
];

export default function JoinSelect() {
  const navigate = useNavigate();

  return (
    <div className="portalPage">

      <div className="profileHeader">
        <div className="profileBrand">Labodc</div>
        <div className="profileSub">GỬI YÊU CẦU THAM GIA</div>
      </div>

      <div className="projectsWrap">
        <div className="projectsInnerCard">
          <div className="projectsGrid">
            {PROJECTS.map((p) => (
              <div className="projectTile" key={p.id}>
                <div className="projectTileBody">
                  <div className="projectTileTitle">Dự án: {p.title}</div>
                  <div className="projectTileMeta">Mã: {p.code}</div>
                  <div className="projectTileMeta">GVHD: {p.advisor}</div>
                </div>

                <div className="projectTileFooter">
                  <div className="projectActions">
                    <button
                      className="miniBtn small"
                      onClick={() => navigate(`/talent/projects/${p.id}/join`)}
                    >
                      GỬI YÊU CẦU
                    </button>
                  </div>
                  <div className="statusPill stBlue">MỞ ĐĂNG KÝ</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="backPortalBtn" onClick={() => navigate("/talent/projects")}>
          ← Quay lại
        </button>
      </div>

      <button className="homeBtn" onClick={() => navigate("/")}>
        ← Về trang chủ
      </button>
      <button className="logoutBtn" onClick={() => navigate("/login")}>
        Đăng xuất
      </button>
    </div>
  );
}
