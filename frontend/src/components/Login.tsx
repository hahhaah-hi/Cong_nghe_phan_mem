import React from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div>
      <h2>Đăng nhập</h2>
      <button onClick={onLogin}>Đăng nhập</button>
    </div>
  );
};

export default Login;