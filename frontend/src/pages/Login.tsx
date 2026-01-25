import { Link } from "react-router-dom";

export default function Login() {
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
          <div className="loginTitle">ĐĂNG NHẬP HỆ THỐNG</div>

          <div className="field">
            <span className="icon">👤</span>
            <input placeholder="Tài khoản đăng nhập" />
          </div>

          <div className="field">
            <span className="icon">🔒</span>
            <input type="password" placeholder="Đăng nhập" />
          </div>

          <button className="btnPrimary" type="button">
            ĐĂNG NHẬP
          </button>

          <div className="loginLinks">
            <Link className="link" to="/forgot">
              Quên mật khẩu ?
            </Link>

            <div className="row">
              <span className="muted">Chưa có tài khoản ?</span>
              {/* NÚT ĐĂNG KÍ PHẢI LÀ Link */}
              <Link className="btnSmall" to="/register">
                Đăng kí
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
