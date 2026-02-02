// src/pages/Register.tsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirm) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    if (password !== confirm) {
      alert("Mật khẩu nhập lại không khớp");
      return;
    }

    // ✅ coi như đăng ký xong là login luôn
    localStorage.setItem("isLogin", "true");

    alert("Đăng ký thành công!");
    navigate("/", { replace: true });
  };

  return (
    <div className="loginWrap">
      <h1 className="bigTitle">Labodc</h1>

      <div className="loginCard">
        <div className="loginTitle">REGISTER</div>

        <form
          onSubmit={handleRegister}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="field">
            <span className="icon">👤</span>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Họ và tên"
            />
          </div>

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
              placeholder="Mật khẩu"
              type="password"
            />
          </div>

          <div className="field">
            <span className="icon">🔒</span>
            <input
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Nhập lại mật khẩu"
              type="password"
            />
          </div>

          <button className="btnPrimary" type="submit">
            TẠO TÀI KHOẢN
          </button>
        </form>

        <div className="loginLinks">
          <div className="row">
            <span className="muted">Đã có tài khoản?</span>
            <Link className="btnSmall" to="/login">
              Đăng nhập
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
