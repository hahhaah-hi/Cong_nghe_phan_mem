// src/pages/Login.tsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ Email và Password");
      return;
    }

    localStorage.setItem("isLogin", "true");

    // ✅ về trang sau đăng nhập
    navigate("/landing", { replace: true });
  };

  return (
    <div className="loginWrap">
      <h1 className="bigTitle">Labodc</h1>

      <div className="loginCard">
        <div className="loginTitle">LOGIN</div>

        <form
          onSubmit={handleLogin}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="field">
            <span className="icon">📧</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
            />
          </div>

          <div className="field">
            <span className="icon">🔒</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
            />
          </div>

          <button className="btnPrimary" type="submit">
            ĐĂNG NHẬP
          </button>
        </form>

        <div className="loginLinks">
          <Link className="link" to="/forgot">
            Quên mật khẩu?
          </Link>

          <div className="row">
            <span className="muted">Chưa có tài khoản?</span>
            <Link className="btnSmall" to="/register">
              Đăng ký
            </Link>
          </div>

          <Link className="backHome" to="/">
            ← Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
