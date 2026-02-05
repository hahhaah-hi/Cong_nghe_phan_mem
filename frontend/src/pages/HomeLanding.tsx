import "./HomeLanding.css";
import { useNavigate } from "react-router-dom";

export default function HomeLanding() {
  const navigate = useNavigate();
 const goEnterprise = () => navigate("/enterprise");
  const goTalent = () => navigate("/talent");
const goSystemAdmin = () => navigate("/talent/settings");

  return (
    <div className="hl">
      {/* TOP */}
      <header className="hlTop">
        {/* LOGO */}
        <div className="hlLogo">
          <span className="hlUth">UTH</span>
          <span className="hlSub">
            UNIVERSITY OF TRANSPORT
            <br />
            HOCHIMINH CITY
          </span>
        </div>

        {/* NAV */}
        <nav className="hlNav">
          <button type="button" className="hlNavBtn">
            Dự án
          </button>

          <button type="button" className="hlNavBtn" onClick={goEnterprise}>
            Doanh nghiệp <span className="hlCaret">▾</span>
          </button>

          <button type="button" className="hlNavBtn">
            Mentor
          </button>

          {/* ✅ BẤM QUA TALENT */}
          <button type="button" className="hlNavBtn" onClick={goTalent}>
            Sinh viên <span className="hlCaret">▾</span>
          </button>

          <button type="button" className="hlNavBtn" onClick={goSystemAdmin}>
            System admin <span className="hlCaret">▾</span>
          </button>
        </nav>

        {/* RIGHT */}
        <div className="hlRight">
          <button
            type="button"
            className="hlAvatarBtn"
            onClick={goTalent}
            title="Vào cổng sinh viên"
          >
            <div className="hlAvatar">
              <svg viewBox="0 0 24 24" className="hlAvatarIcon" aria-hidden="true">
                <path d="M12 12c2.76 0 5-2.46 5-5.5S14.76 1 12 1 7 3.46 7 6.5 9.24 12 12 12Z" />
                <path d="M3 23c0-4.42 4.03-8 9-8s9 3.58 9 8" />
              </svg>
            </div>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hlHero">
        <h1 className="hlTitle">LabOdc – Kết nối doanh nghiệp</h1>
        <h2 className="hlTitle2">với sinh viên UTH qua dự án thực tế</h2>
        <p className="hlDesc">Minh bạch tiến độ – minh bạch quỹ – mentor giám sát</p>

        <div className="hlSearch">
          <div className="hlInput">
            <span className="hlIco">🔍</span>
            <input placeholder="Tên dự án / công ty" />
          </div>

          <div className="hlSelect">
            <span className="hlIco">📍</span>
            <select defaultValue="">
              <option value="" disabled>
                Lĩnh vực
              </option>
              <option>CNTT</option>
              <option>Logistics</option>
              <option>Giao thông</option>
            </select>
            <span className="hlSelectCaret">▾</span>
          </div>

          <button type="button" className="hlSearchBtn">
            Tìm dự án
          </button>
        </div>

        <div className="hlQuick">
          <button type="button" className="hlChip">
            Tra cứu kết quả
          </button>
          <button type="button" className="hlChip">
            Đặt lịch
          </button>
          <button type="button" className="hlChip">
            Hướng dẫn
          </button>
          <button type="button" className="hlChip">
            Liên hệ <span className="hlCaret">▾</span>
          </button>
        </div>
      </section>

      {/* BODY */}
      <section className="hlBody">
        {/* SIDE */}
        <aside className="hlSide">
          <div className="hlSideHeader">
            Danh mục dự án <span className="hlArrow">›</span>
          </div>

          <div className="hlSideItem">
            <span className="hlSideIcon">🏢</span>Enterprise Dashboard
          </div>
          <div className="hlSideItem">
            <span className="hlSideIcon">👥</span>Candidate Portal 
          </div>
          <div className="hlSideItem">
            <span className="hlSideIcon">🧑‍🏫</span>Mentor Dashboard
          </div>
          <div className="hlSideItem">
            <span className="hlSideIcon">🧪</span>Lab Admin Dashboard
          </div>
          <div className="hlSideItem">
            <span className="hlSideIcon">⚙️</span>System Admin Dashboard
          </div>
        </aside>

        {/* MAIN */}
        <div className="hlMain">
          <div className="hlGrid">
            {/* Card 1 */}
            <div className="hlCard">
              <div className="hlCardTitle">Hệ thống quản lý ODC cho UTH</div>

              <div className="hlRow">
                <span className="hlRowLeft">🔎 Dự án đang triển khai</span>
                <span className="hlRowNum">1,562</span>
                <span className="hlRowArrow">›</span>
              </div>

              <div className="hlRow">
                <span className="hlRowLeft">🏢 Doanh nghiệp tham gia</span>
                <span className="hlRowNum">286</span>
                <span className="hlRowArrow">›</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="hlCard">
              <div className="hlCardTitle">Hệ thống quản lý ODC cho UTH</div>

              <div className="hlPoster">
                <div className="hlPosterStats">
                  <div className="hlPosterStat">
                    <div className="hlPosterBig">1,562</div>
                    <div className="hlPosterSmall">
                      Dự án
                      <br />
                      triển khai
                    </div>
                  </div>

                  <div className="hlPosterStat">
                    <div className="hlPosterBig">4,292</div>
                    <div className="hlPosterSmall">
                      Sinh viên tham
                      <br />
                      gia thực hiện
                    </div>
                  </div>
                </div>

                <button type="button" className="hlDemoBtn" onClick={goTalent}>
                  Xem demo
                </button>
              </div>
            </div>

            {/* Bottom */}
            <div className="hlCard hlBottom">
              <div className="hlBottomTitle">
                Dự án đang triển khai <span className="hlBottomNum">1,562</span>
              </div>

              <div className="hlBottomStats">
                <div className="hlKpi">
                  <div className="hlKpiNum">1,562</div>
                  <div className="hlKpiLabel">Dự án đang triển khai</div>
                </div>

                <div className="hlKpi">
                  <div className="hlKpiNum">286</div>
                  <div className="hlKpiLabel">Doanh nghiệp tham gia</div>
                </div>

                <div className="hlKpi">
                  <div className="hlKpiNum">4,292</div>
                  <div className="hlKpiLabel">Sinh viên tham gia thực hiện</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hlHint">💡 Gợi ý: Di chuột vào các link/ mục để xem thêm các chỉ tiêu</div>
        </div>
      </section>
    </div>
  );
}
