import { Link } from "react-router-dom";
import "../Projects/ProjectFlow.css";

export default function ReportEvaluationFlow() {
  return (
    <div className="pf__card">
      <div className="pf__title">Báo cáo và đánh giá</div>
      <div className="pf__subtitle">Tiến độ • Nghiệm thu • Đánh giá</div>

      <div className="pf__grid">
        <Link className="pf__tile" to="/enterprise/reports/progress">
          <div className="pf__icon">📈</div>
          <div className="pf__tileTitle">Xem báo cáo tiến độ</div>
          <div className="pf__tileDesc">Theo dõi tiến độ • mốc hoàn thành • cảnh báo</div>
        </Link>

        <Link className="pf__tile" to="/enterprise/reports/acceptance">
          <div className="pf__icon">✅</div>
          <div className="pf__tileTitle">Kết quả nghiệm thu</div>
          <div className="pf__tileDesc">Biên bản • kết quả • ngày nghiệm thu</div>
        </Link>

        <Link className="pf__tile" to="/enterprise/reports/evaluation">
          <div className="pf__icon">⭐</div>
          <div className="pf__tileTitle">Đánh giá dự án</div>
          <div className="pf__tileDesc">Chấm sao • bình luận • ghi nhận chất lượng</div>
        </Link>
      </div>

      <div className="pf__btnRow">
        <Link className="pf__btn pf__btn--ghost" to="/enterprise">
          ← Quay lại
        </Link>
      </div>
    </div>
  );
}
