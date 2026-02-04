import { Link } from "react-router-dom";
import "./ReportPages.css";

type Row = {
  name: string;
  percent: number;
  status: "Đúng tiến độ" | "Chậm" | "Nguy cơ chậm";
  updatedAt: string;
};

const DATA: Row[] = [
  { name: "Dự án hệ thống A", percent: 68, status: "Đúng tiến độ", updatedAt: "2026-01-26" },
  { name: "Dự án CRM", percent: 42, status: "Nguy cơ chậm", updatedAt: "2026-01-23" },
  { name: "Dự án App nội bộ", percent: 30, status: "Chậm", updatedAt: "2026-01-20" },
];

export default function ReportProgress() {
  return (
    <div className="rp__panel">
      <div className="rp__head">
        <h1 className="rp__title">Xem báo cáo tiến độ</h1>
        <p className="rp__sub">Danh sách dự án và % hoàn thành hiện tại.</p>
      </div>

      <div className="rp__table">
        <div className="rp__row rp__row--head">
          <div>Dự án</div>
          <div>Tiến độ</div>
          <div>Trạng thái</div>
          <div>Cập nhật</div>
        </div>

        {DATA.map((r) => (
          <div key={r.name} className="rp__row">
            <div className="rp__strong">{r.name}</div>

            <div className="rp__progress">
              <div className="rp__bar">
                <div className="rp__fill" style={{ width: `${r.percent}%` }} />
              </div>
              <div className="rp__pct">{r.percent}%</div>
            </div>

            <div className={`rp__pill rp__pill--${pillKey(r.status)}`}>{r.status}</div>
            <div className="rp__muted">{r.updatedAt}</div>
          </div>
        ))}
      </div>

      <div className="rp__bottom">
        <Link className="rp__back" to="/enterprise/reports">
          ← Quay lại Báo cáo và đánh giá
        </Link>
      </div>
    </div>
  );
}

function pillKey(s: Row["status"]) {
  if (s === "Đúng tiến độ") return "ok";
  if (s === "Chậm") return "bad";
  return "warn";
}
