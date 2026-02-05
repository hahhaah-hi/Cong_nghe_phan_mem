import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/admin", {
      state: { activeTab: "manage" }  // 👈 tab quản lý đối tượng
    });
  };

  return (
    <button onClick={handleBack} className="back-button">
      ← Trở về
    </button>
  );
}
