import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="hPage">
      {/* HEADER */}
      <header className="hTop">
        {/* Brand left */}
        <div className="hBrand">
          <div className="hUth">UTH</div>
          <div className="hUni">
            <div className="hUniRed">UNIVERSITY</div>
            <div className="hUniRed">OF TRANSPORT</div>
            <div className="hUniRed">HOCHIMINH CITY</div>
          </div>
        </div>

        {/* Nav center */}
        <nav className="hNav">
          <button type="button" className="hNavLink">Dự án</button>
          <button type="button" className="hNavLink">
            Doanh nghiệp <span className="hCaret">▾</span>
          </button>
          <button type="button" className="hNavLink">Mentor</button>
          <button type="button" className="hNavLink">
            Sinh viên <span className="hCaret">▾</span>
          </button>
          <button type="button" className="hNavLink">Báo cáo minh bạch</button>
        </nav>

        {/* Auth right */}
        <div className="hAuth">
          <button className="hBtnOutline" onClick={() => navigate("/register")}>
            Đăng ký
          </button>
          <button className="hBtnSolid" onClick={() => navigate("/login")}>
            Đăng nhập
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hHero">
        <div className="hHeroInner">
          <h1 className="hTitle">LabOdc – Kết nối doanh nghiệp</h1>
          <h2 className="hTitle2">với sinh viên UTH qua dự án thực tế</h2>
          <p className="hDesc">Minh bạch tiến độ – minh bạch quỹ – mentor giám sát</p>

          {/* Search */}
          <div className="hSearch">
            <div className="hInput">
              <span className="hIco">🔍</span>
              <input placeholder="Tên dự án / công ty" />
            </div>

            <div className="hSelect">
              <span className="hIco">📍</span>
              <select defaultValue="">
                <option value="" disabled>
                  Lĩnh vực
                </option>
                <option>CNTT</option>
                <option>Logistics</option>
                <option>Giao thông</option>
              </select>
              <span className="hSelectCaret">▾</span>
            </div>

            <button className="hSearchBtn" type="button">
              Tìm dự án
            </button>
          </div>

          {/* Quick chips */}
          <div className="hQuick">
            <button className="hChip" type="button">Tra cứu kết quả</button>
            <button className="hChip" type="button">Đặt lịch</button>
            <button className="hChip" type="button">Hướng dẫn</button>
            <button className="hChip" type="button">
              Liên hệ <span className="hCaret">▾</span>
            </button>
          </div>

          {/* Cards */}
          <div className="hGrid">
            {/* Left menu */}
            <aside className="hCard hSide">
              <div className="hCardHead">
                <div className="hCardTitle">Danh mục dự án</div>
                <div className="hArrow">›</div>
              </div>

              <div className="hMenuItem">
                <span className="hMenuIco">🏢</span> Enterprise Dashboard
              </div>
              <div className="hMenuItem">
                <span className="hMenuIco">👤</span> Candidate Portal
              </div>
              <div className="hMenuItem">
                <span className="hMenuIco">🧑‍🏫</span> Mentor Dashboard
              </div>
              <div className="hMenuItem">
                <span className="hMenuIco">🧪</span> Lab Admin Dashboard
              </div>
              <div className="hMenuItem">
                <span className="hMenuIco">⚙️</span> System Admin Dashboard
              </div>
            </aside>

            {/* Center stats */}
            <div className="hCard hCenter">
              <div className="hCardHead">
                <div className="hCardTitle">Hệ thống quản lý ODC cho UTH</div>
              </div>

              <div className="hRow">
                <div className="hRowLeft">
                  <span className="hDot" /> Dự án đang triển khai
                </div>
                <div className="hRowRight">
                  <span className="hRowNum">1,562</span>
                  <span className="hRowGo">›</span>
                </div>
              </div>

              <div className="hRow">
                <div className="hRowLeft">
                  <span className="hDot" /> Doanh nghiệp tham gia
                </div>
                <div className="hRowRight">
                  <span className="hRowNum">286</span>
                  <span className="hRowGo">›</span>
                </div>
              </div>

              <div className="hRow">
                <div className="hRowLeft">
                  <span className="hDot" /> Sinh viên tham gia thực hiện
                </div>
                <div className="hRowRight">
                  <span className="hRowNum">4,292</span>
                  <span className="hRowGo">›</span>
                </div>
              </div>

              <div className="hDivider" />

              <div className="hBottomStats">
                <div className="hKpi">
                  <div className="hKpiNum">1,562</div>
                  <div className="hKpiLab">Dự án đang triển khai</div>
                </div>
                <div className="hKpi">
                  <div className="hKpiNum">286</div>
                  <div className="hKpiLab">Doanh nghiệp tham gia</div>
                </div>
                <div className="hKpi">
                  <div className="hKpiNum">4,292</div>
                  <div className="hKpiLab">Sinh viên tham gia thực hiện</div>
                </div>
              </div>
            </div>

            {/* Right demo */}
            <div className="hCard hRight">
              <div className="hCardHead">
                <div className="hCardTitle">Hệ thống quản lý ODC cho UTH</div>
              </div>

              <div className="hPoster">
                <div className="hPosterImg" />
                <div className="hPosterBadges">
                  <div className="hBadge">
                    <div className="hBadgeNum">1,562</div>
                    <div className="hBadgeTxt">Dự án triển khai</div>
                  </div>
                  <div className="hBadge">
                    <div className="hBadgeNum">4,292</div>
                    <div className="hBadgeTxt">Sinh viên tham gia</div>
                  </div>
                </div>

                <button className="hDemoBtn" type="button" onClick={() => navigate("/login")}>
                  Xem demo
                </button>
              </div>
            </div>
          </div>

          <div className="hHint">💡 Gợi ý: Di chuột vào các link/mục để xem thêm các chỉ tiêu</div>
        </div>
      </section>
    </div>
  );
}
