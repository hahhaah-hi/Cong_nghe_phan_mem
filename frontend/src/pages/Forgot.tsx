import { Link } from "react-router-dom";

export default function Forgot() {
  return (
    <div className="page">
      <div className="loginWrap">
        

        <h1 className="bigTitle">Labodc</h1>

        <div className="loginCard">
          <div className="loginTitle">Quên mật khẩu?</div>

          <div className="field">
            <span className="icon">✉️</span>
            <input placeholder="Email" />
          </div>

          <div className="forgotRow">
            <button className="btnPrimary btnSend" type="button">
              Gửi mã
            </button>

            <div className="field fieldSmall">
              <input placeholder="Mã xác nhận" />
            </div>
          </div>

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
