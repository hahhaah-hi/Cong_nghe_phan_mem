import React from "react";
import { Link } from "react-router-dom";
import "./EnterpriseDashboard.css";

type DashItem = {
  title: string;
  desc?: string;
  to: string;
};

const items: DashItem[] = [
  { title: "Hồ sơ doanh nghiệp", to: "/enterprise/company" },
  { title: "Quản lý dự án", to: "/enterprise/projects" },
  { title: "Thanh toán", to: "/enterprise/payments" },
  { title: "Thay đổi hoặc huỷ dự án", to: "/enterprise/change/change-cancel-flow" },
  { title: "Báo cáo và đánh giá", to: "/enterprise/reports" },
];

export default function EnterpriseDashboard(): React.ReactElement {
  return (
    <div className="edb">
      <div className="edb__wrap">
        {/* HERO */}
        <div className="edb__hero">
          {/* LEFT: Brand card */}
          <div className="edb__brandCard">
            <div className="edb__brandRow">
              <div className="edb__logoSquare" aria-hidden="true">
                <div className="edb__logoInner">L</div>
              </div>

              <div className="edb__brandText">
                <div className="edb__brandTop">
                  <h1 className="edb__brandName">Labodc</h1>
                  <span className="edb__badge">Enterprise</span>
                </div>

                <p className="edb__brandTagline">
                  Kết nối doanh nghiệp với dự án thực tế — minh bạch tiến độ, mentor giám sát.
                </p>

                <div className="edb__brandChips">
                  <span className="edb__chip">ODC Management</span>
                  <span className="edb__chip">PayOS</span>
                  <span className="edb__chip">Reports</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Illustration */}
          <div className="edb__heroArt" aria-hidden="true">
            <svg viewBox="0 0 520 260" className="edb__heroSvg">
              <defs>
                <filter id="s" x="-40%" y="-40%" width="180%" height="180%">
                  <feDropShadow dx="0" dy="18" stdDeviation="14" floodColor="rgba(0,0,0,0.12)" />
                </filter>
              </defs>

              <path
                d="M375 35c60 10 105 60 90 110s-75 52-105 88c-30 36-55 55-100 45-45-10-80-45-86-80-6-35 16-65 40-92 24-27 55-80 95-83 40-3 6 0 66 12z"
                fill="rgba(10,168,163,0.45)"
              />

              <circle cx="460" cy="78" r="12" fill="rgba(10,168,163,0.20)" />
              <circle cx="488" cy="120" r="7" fill="rgba(10,168,163,0.18)" />
              <circle cx="456" cy="146" r="6" fill="rgba(10,168,163,0.16)" />

              <g filter="url(#s)">
                <rect
                  x="190"
                  y="78"
                  width="290"
                  height="150"
                  rx="22"
                  fill="rgba(255,255,255,0.86)"
                  stroke="rgba(0,0,0,0.06)"
                />
                <rect x="230" y="110" width="165" height="18" rx="9" fill="rgba(19,42,42,0.10)" />
                <rect x="230" y="140" width="210" height="14" rx="7" fill="rgba(19,42,42,0.08)" />
                <rect x="230" y="164" width="240" height="14" rx="7" fill="rgba(19,42,42,0.08)" />

                <rect x="232" y="186" width="18" height="32" rx="7" fill="rgba(10,168,163,0.22)" />
                <rect x="260" y="172" width="18" height="46" rx="7" fill="rgba(10,168,163,0.45)" />
                <rect x="288" y="160" width="18" height="58" rx="7" fill="rgba(10,168,163,0.65)" />
                <rect x="316" y="178" width="18" height="40" rx="7" fill="rgba(10,168,163,0.35)" />
              </g>
            </svg>
          </div>
        </div>

        {/* Tiles */}
        <div className="edb__panel">
          {items.map((it) => (
            <Link key={it.title} to={it.to} className="edb__tile">
              <div className="edb__tileHead">
                <span className="edb__miniDot" />
                <span className="edb__miniDot" />
                <div className="edb__tileTitle">{it.title}</div>
              </div>

              {it.desc?.trim() ? <div className="edb__tileDesc">{it.desc}</div> : null}
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="edb__footer">
          <Link to="/landing" className="edb__btn edb__btn--ghost">
  ← Về trang chủ
</Link>

          <button
            type="button"
            className="edb__btn edb__btn--primary"
            onClick={() => alert("Đăng xuất (demo)")}
          >
            Đăng xuất
          </button>
        </div>
      </div>
    </div>
  );
}
