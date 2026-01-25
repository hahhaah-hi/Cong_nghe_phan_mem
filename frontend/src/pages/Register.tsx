import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="page">
      <div className="loginWrap">
        <div className="loginBrowser">
          <div className="dot red" />
          <div className="dot yellow" />
          <div className="dot green" />
          <div className="addrBar" />
          <div className="rightDots">
            <div className="dot gray" />
            <div className="dot red" />
            <div className="dot green" />
          </div>
        </div>

        <h1 className="bigTitle">Labodc</h1>

        <div className="loginCard">
          <div className="loginTitle">ĐĂNG KÝ TÀI KHOẢN</div>

          <div className="field">
            <span className="icon">👤</span>
            <input placeholder="Họ và tên" />
          </div>

          <div className="field">
            <span className="icon">✉️</span>
            <input placeholder="Email / Tài khoản" />
          </div>

          <div className="field">
            <span className="icon">🔒</span>
            <input type="password" placeholder="Mật khẩu" />
          </div>

          <div className="field">
            <span className="icon">🔒</span>
            <input type="password" placeholder="Xác nhận mật khẩu" />
          </div>

          <div className="field">
            <span className="icon">👤</span>
            <input placeholder="Vai trò" />
          </div>

          <button className="btnPrimary" type="button">
            Đăng kí
          </button>

          <div className="loginLinks">
            <div className="row">
              <span className="muted">Đã có tài khoản ?</span>
              <Link className="btnSmall" to="/login">
                Đăng nhập
              </Link>
            </div>

            <Link className="backHome" to="/">
              ← Về Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
