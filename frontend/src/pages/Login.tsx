// src/pages/Login.tsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!email || !password) {
  //     alert("Vui lòng nhập đầy đủ Email và Password");
  //     return;
  //   }

  //   localStorage.setItem("isLogin", "true");

  //   // ✅ về trang sau đăng nhập
  //   navigate("/landing", { replace: true });
  // };
  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);

  try {
    const res = await fetch("http://127.0.0.1:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    if (!res.ok) {
      alert("Sai tài khoản hoặc mật khẩu");
      return;
    }

    const data = await res.json();
    localStorage.setItem("token", data.access_token);

    navigate("/landing", { replace: true });
  } catch (err) {
    alert("Không kết nối được server");
  }
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
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  placeholder="Tên đăng nhập"
                    type="text"
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
