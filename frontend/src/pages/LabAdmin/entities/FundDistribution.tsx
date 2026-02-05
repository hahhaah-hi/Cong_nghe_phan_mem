import { useState } from "react";
import "./FundDistribution.css";
import BackButton from "../BackButton";


export default function FundDistribution() {
  const [totalBudget, setTotalBudget] = useState(100000000);

  const lab = totalBudget * 0.7;
  const mentor = totalBudget * 0.2;
  const admin = totalBudget * 0.1;

  return (
    <div className="fund-container">
      <BackButton />
      <h2>Phân bổ quỹ 70 - 20 - 10</h2>

      <div className="fund-card">
        <label>Tổng kinh phí (VNĐ)</label>
        <input
          type="number"
          value={totalBudget}
          onChange={(e) => setTotalBudget(Number(e.target.value))}
        />
      </div>

      <div className="fund-result">
        <div className="fund-box">
          <h4>70% Lab</h4>
          <p>{lab.toLocaleString()} đ</p>
        </div>
        <div className="fund-box">
          <h4>20% Mentor</h4>
          <p>{mentor.toLocaleString()} đ</p>
        </div>
        <div className="fund-box">
          <h4>10% Quản trị</h4>
          <p>{admin.toLocaleString()} đ</p>
        </div>
      </div>
    </div>
  );
}
