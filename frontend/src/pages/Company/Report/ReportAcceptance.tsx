import { Link } from "react-router-dom";
import { useState } from "react";
import "./ReportPages.css";

type AcceptanceItem = {
  title: string;
  passed: boolean;
  note?: string;
};

type Row = {
  id: string;
  project: string;
  date: string;
  status: "Đạt" | "Chưa đạt" | "Đang nghiệm thu";
  summary: string;
  checklist: AcceptanceItem[];
  attachments: { name: string; url?: string }[];
};

const DATA: Row[] = [
  {
    id: "NT-001",
    project: "Dự án hệ thống A",
    date: "2026-01-22",
    status: "Đạt",
    summary: "Đã ký biên bản nghiệm thu, bàn giao đầy đủ.",
    checklist: [
      { title: "Hoàn thành chức năng theo scope", passed: true },
      { title: "Kiểm thử UAT", passed: true },
      { title: "Tài liệu hướng dẫn", passed: true },
      { title: "Bàn giao source & cấu hình", passed: true },
    ],
    attachments: [{ name: "Bien-ban-nghiem-thu.pdf" }, { name: "UAT-report.xlsx" }],
  },
  {
    id: "NT-002",
    project: "Dự án CRM",
    date: "2026-01-18",
    status: "Chưa đạt",
    summary: "Còn lỗi luồng đăng nhập và thiếu tài liệu triển khai.",
    checklist: [
      { title: "Hoàn thành chức năng theo scope", passed: false, note: "Thiếu 2 màn hình báo cáo." },
      { title: "Kiểm thử UAT", passed: false, note: "Fail 6/32 testcases." },
      { title: "Tài liệu hướng dẫn", passed: false, note: "Chưa có tài liệu user." },
      { title: "Bàn giao source & cấu hình", passed: true },
    ],
    attachments: [{ name: "Danh-sach-loi.docx" }, { name: "Bien-ban-nghiem-thu-du-thao.pdf" }],
  },
];

export default function ReportAcceptance() {
  const [openId, setOpenId] = useState<string>(DATA[0]?.id ?? "");

  return (
    <div className="rp__panel">
      <div className="rp__head">
        <h1 className="rp__title">Kết quả nghiệm thu</h1>
        <p className="rp__sub">Xem chi tiết nghiệm thu theo từng dự án (checklist + biên bản).</p>
      </div>

      <div className="acc">
        {DATA.map((row) => {
          const isOpen = openId === row.id;
          const pill =
            row.status === "Đạt" ? "ok" : row.status === "Chưa đạt" ? "bad" : "warn";

          return (
            <div key={row.id} className={`acc__item ${isOpen ? "acc__item--open" : ""}`}>
              <button
                type="button"
                className="acc__head"
                onClick={() => setOpenId(isOpen ? "" : row.id)}
              >
                <div className="acc__left">
                  <div className="acc__title">{row.project}</div>
                  <div className="acc__meta">
                    <span className={`rp__pill rp__pill--${pill}`}>{row.status}</span>
                    <span className="acc__muted">Mã: {row.id}</span>
                    <span className="acc__muted">Ngày: {row.date}</span>
                  </div>
                </div>

                <div className="acc__chev" aria-hidden="true">
                  {isOpen ? "▾" : "▸"}
                </div>
              </button>

              {isOpen && (
                <div className="acc__body">
                  <div className="acc__summary">{row.summary}</div>

                  <div className="acc__grid">
                    <div className="acc__box">
                      <div className="acc__boxTitle">Checklist nghiệm thu</div>
                      <ul className="acc__list">
                        {row.checklist.map((it, idx) => (
                          <li key={idx} className="acc__li">
                            <span
                              className={`acc__dot ${it.passed ? "acc__dot--ok" : "acc__dot--bad"}`}
                            />
                            <div className="acc__liText">
                              <div className="acc__liTitle">{it.title}</div>
                              {it.note && <div className="acc__liNote">{it.note}</div>}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="acc__box">
                      <div className="acc__boxTitle">Tài liệu / Biên bản</div>
                      <div className="acc__files">
                        {row.attachments.map((f, idx) => (
                          <div key={idx} className="acc__file">
                            <span className="acc__fileIcon" aria-hidden="true">
                              📎
                            </span>
                            <span className="acc__fileName">{f.name}</span>
                          </div>
                        ))}
                      </div>

                      <div className="acc__hint">(Sau này bạn thay danh sách file bằng link tải từ API)</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="rp__bottom">
        <Link className="rp__back" to="/enterprise/reports">
          ← Quay lại Báo cáo và đánh giá
        </Link>
      </div>
    </div>
  );
}
