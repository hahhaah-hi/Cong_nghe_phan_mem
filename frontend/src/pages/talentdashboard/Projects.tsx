import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";


type Status = "CHUA_THAM_GIA" | "DANG_CHO_DUYET" | "DA_HOAN_THANH" | "BI_TU_CHOI";

type Project = {
  id: string;
  title: string;
  code: string;
  mentor: string;
  status: Status;
};

const STATUS_TEXT: Record<Status, string> = {
  CHUA_THAM_GIA: "CHƯA THAM GIA",
  DANG_CHO_DUYET: "ĐANG CHỜ DUYỆT",
  DA_HOAN_THANH: "ĐÃ HOÀN THÀNH",
  BI_TU_CHOI: "BỊ TỪ CHỐI",
};

export default function Projects() {
  const navigate = useNavigate();

  const projects = useMemo<Project[]>(
    () => [
      {
        id: "UTH-001",
        title: "LabOdc – Kết nối doanh nghiệp & sinh viên UTH",
        code: "UTH-001",
        mentor: "Nguyễn Văn A",
        status: "CHUA_THAM_GIA",
      },
      {
        id: "UTH-003",
        title: "Hệ thống quản lý kho hàng",
        code: "UTH-003",
        mentor: "Bùi Thị C",
        status: "DA_HOAN_THANH",
      },
      {
        id: "UTH-002",
        title: "Ứng dụng quản lý sinh viên",
        code: "UTH-002",
        mentor: "Trần Thị B",
        status: "DANG_CHO_DUYET",
      },
      {
        id: "UTH-004",
        title: "App quản lý trường học",
        code: "UTH-004",
        mentor: "Phạm Minh D",
        status: "BI_TU_CHOI",
      },
    ],
    []
  );

  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"ALL" | Status>("ALL");

  const filtered = useMemo(() => {
    const k = q.trim().toLowerCase();
    return projects.filter((p) => {
      const matchK =
        !k ||
        p.title.toLowerCase().includes(k) ||
        p.code.toLowerCase().includes(k) ||
        p.mentor.toLowerCase().includes(k);

      const matchS = status === "ALL" ? true : p.status === status;
      return matchK && matchS;
    });
  }, [projects, q, status]);

  const pillCls = (s: Status) => {
    if (s === "CHUA_THAM_GIA") return "pPill pPillBlue";
    if (s === "DANG_CHO_DUYET") return "pPill pPillYellow";
    if (s === "DA_HOAN_THANH") return "pPill pPillGreen";
    return "pPill pPillRed";
  };

  return (
    <div className="labWrap">
     

      {/* Title */}
      <div className="projTitle">
        <div className="projBrand">Labodc</div>
        <div className="projSub">DANH SÁCH DỰ ÁN</div>
      </div>

      {/* Main panel */}
      <div className="projPanel">
        {/* Filters */}
        <div className="projFilters">
          <div className="projFilterRow">
            <span className="projIcon">🔎</span>
            <input
              className="projInput"
              placeholder="Tìm theo tên dự án"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <span className="projCaret">▾</span>
          </div>

          <div className="projFilterRow">
            <span className="projIcon">🏷️</span>
            <select
              className="projSelect"
              value={status}
              onChange={(e) => setStatus(e.target.value as any)}
            >
              <option value="ALL">Trạng thái tham gia</option>
              <option value="CHUA_THAM_GIA">Chưa tham gia</option>
              <option value="DANG_CHO_DUYET">Đang chờ duyệt</option>
              <option value="DA_HOAN_THANH">Đã hoàn thành</option>
              <option value="BI_TU_CHOI">Bị từ chối</option>
            </select>
            <span className="projCaret">▾</span>
          </div>
        </div>

        {/* Cards */}
        <div className="projGrid">
          {filtered.map((p) => (
            <div key={p.id} className="projCard">
              <div className="projCardText">
                <div className="projCardTitle">Dự án: {p.title}</div>
                <div className="projCardMeta">Mã: {p.code}</div>
                <div className="projCardMeta">GVHD: {p.mentor}</div>
              </div>

              <div className="projCardActions">
                <button className="pBtn" onClick={() => navigate(`/talent/projects/${p.id}/join`)}>
                  XEM
                </button>

                <button className="pBtn" onClick={() => navigate(`/talent/projects/${p.id}/join`)}>
                  THAM GIA
                </button>

                <span className={pillCls(p.status)}>{STATUS_TEXT[p.status]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom left back */}
      <button className="backPortalBtn" onClick={() => navigate("/talent")}>
  ← Quay lại
</button>
    </div>
  );
}
