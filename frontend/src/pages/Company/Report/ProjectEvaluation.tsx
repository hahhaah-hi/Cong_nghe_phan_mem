import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import "./ReportPages.css";

type Project = { id: string; name: string };

const PROJECTS: Project[] = [
  { id: "P1", name: "Dự án hệ thống A" },
  { id: "P2", name: "Dự án CRM" },
  { id: "P3", name: "Dự án App nội bộ" },
];

type CriteriaKey = "quality" | "timeline" | "communication" | "docs" | "support";

const CRITERIA: { key: CriteriaKey; label: string; hint: string }[] = [
  { key: "quality", label: "Chất lượng", hint: "Độ ổn định, ít lỗi, đúng yêu cầu" },
  { key: "timeline", label: "Đúng hạn", hint: "Bám timeline, đúng mốc bàn giao" },
  { key: "communication", label: "Giao tiếp", hint: "Phản hồi nhanh, rõ ràng" },
  { key: "docs", label: "Tài liệu", hint: "Tài liệu đầy đủ, dễ hiểu" },
  { key: "support", label: "Hỗ trợ", hint: "Hỗ trợ sau bàn giao, xử lý sự cố" },
];

export default function ProjectEvaluation() {
  const [projectId, setProjectId] = useState(PROJECTS[0].id);
  const [comment, setComment] = useState("");
  const [ratings, setRatings] = useState<Record<CriteriaKey, number>>({
    quality: 5,
    timeline: 5,
    communication: 5,
    docs: 5,
    support: 5,
  });

  const projectName = useMemo(
    () => PROJECTS.find((p) => p.id === projectId)?.name ?? "",
    [projectId]
  );

  const avg = useMemo(() => {
    const vals = Object.values(ratings);
    const sum = vals.reduce((a, b) => a + b, 0);
    return Math.round((sum / vals.length) * 10) / 10;
  }, [ratings]);

  function setOne(key: CriteriaKey, v: number) {
    setRatings((prev) => ({ ...prev, [key]: v }));
  }

  function submit() {
    alert(
      `Đã gửi đánh giá!\nDự án: ${projectName}\nTrung bình: ${avg}/5\n` +
        CRITERIA.map((c) => `${c.label}: ${ratings[c.key]}/5`).join("\n") +
        `\nBình luận: ${comment || "(trống)"}`
    );
    setComment("");
  }

  return (
    <div className="rp__panel">
      <div className="rp__head">
        <h1 className="rp__title">Đánh giá dự án</h1>
        <p className="rp__sub">Đánh giá theo tiêu chí + bình luận (tổng hợp trung bình).</p>
      </div>

      <div className="eval">
        <label className="rp__field eval__field">
          <span className="rp__label">Dự án</span>
          <select
            className="rp__input"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
          >
            {PROJECTS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </label>

        <div className="eval__summary">
          <div className="eval__avg">
            <div className="eval__avgNum">{avg}</div>
            <div className="eval__avgText">Trung bình / 5</div>
          </div>
          <div className="eval__avgStars">
            <Stars value={Math.round(avg)} onChange={() => {}} readOnly />
          </div>
        </div>

        <div className="eval__list">
          {CRITERIA.map((c) => (
            <div key={c.key} className="eval__row">
              <div className="eval__left">
                <div className="eval__label">{c.label}</div>
                <div className="eval__hint">{c.hint}</div>
              </div>
              <div className="eval__right">
                <Stars value={ratings[c.key]} onChange={(v) => setOne(c.key, v)} />
                <div className="eval__score">{ratings[c.key]}/5</div>
              </div>
            </div>
          ))}
        </div>

        <label className="rp__field rp__field--full">
          <span className="rp__label">Bình luận</span>
          <textarea
            className="rp__textarea"
            rows={5}
            placeholder="Nhập nhận xét của bạn..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>

        <div className="rp__actions">
          <Link className="rp__btn rp__btn--ghost" to="/enterprise/reports">
            ← Quay lại
          </Link>
          <button className="rp__btn rp__btn--primary" type="button" onClick={submit}>
            Gửi đánh giá
          </button>
        </div>
      </div>
    </div>
  );
}

function Stars({
  value,
  onChange,
  readOnly,
}: {
  value: number;
  onChange: (v: number) => void;
  readOnly?: boolean;
}) {
  return (
    <div className="stars" role="radiogroup" aria-label="Đánh giá sao">
      {[1, 2, 3, 4, 5].map((n) => {
        const active = n <= value;
        return (
          <button
            key={n}
            type="button"
            className={`star ${active ? "star--on" : ""}`}
            onClick={() => !readOnly && onChange(n)}
            aria-label={`${n} sao`}
            disabled={readOnly}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}
