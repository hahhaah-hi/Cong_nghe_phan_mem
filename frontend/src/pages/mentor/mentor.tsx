import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./mentor.css";

const Mentor = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.clear(); // hoặc removeItem("token")
    navigate("/login");
  };

  const [active, setActive] = useState<
    "project" | "task" | "report" | "fund" | null
  >(null);

  const [projectActive, setProjectActive] = useState<
    "approve" | "interview" | null
  >(null);

  const [taskActive, setTaskActive] = useState<
    "template" | "assign" | "progress" | null
  >(null);

  const [reportActive, setReportActive] = useState<
    "evaluate" | "submit" | null
  >(null);

  const [fundActive, setFundActive] = useState<
    "budget" | "leader" | null
  >(null);

  return (
    <div className="mentor-container">

      {/* ===== CODE CŨ GIỮ NGUYÊN TỪ ĐÂY ===== */}
      <h1>Bảng Mentor</h1>

      {/* ===== CARD CHA ===== */}
      <div className="mentor-grid">
        <div className="mentor-card" onClick={() => setActive("project")}>
          <h3>Dự án</h3>
          <p>Quản lý & tiếp nhận dự án</p>
        </div>

        <div className="mentor-card" onClick={() => setActive("task")}>
          <h3>Phân rã nhiệm vụ</h3>
          <p>Phân công & theo dõi tiến độ</p>
        </div>

        <div className="mentor-card" onClick={() => setActive("report")}>
          <h3>Đánh giá & báo cáo</h3>
          <p>Đánh giá sinh viên, gửi báo cáo</p>
        </div>

        <div className="mentor-card" onClick={() => setActive("fund")}>
          <h3>Quỹ dự án</h3>
          <p>Quản lý phân bổ & trưởng nhóm</p>
        </div>
      </div>

      {/* ===================== DỰ ÁN ===================== */}
      {active === "project" && (
        <div className="mentor-detail">
          <h2>Dự án</h2>

          {projectActive === null && (
            <div className="mentor-detail-grid">
              <div
                className="mentor-detail-card"
                onClick={() => setProjectActive("approve")}
              >
                Chấp nhận dự án
              </div>

              <div
                className="mentor-detail-card"
                onClick={() => setProjectActive("interview")}
              >
                Phỏng vấn sinh viên
              </div>
            </div>
          )}

          {projectActive === "approve" && (
            <div className="mentor-task-content">
              <h3>Danh sách dự án đang chờ duyệt</h3>

              <table className="mentor-table">
                <thead>
                  <tr>
                    <th>Tên dự án</th>
                    <th>Sinh viên đề xuất</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Website quản lý học tập</td>
                    <td>Nguyễn Văn A</td>
                    <td>
                      <button>Đồng ý</button>
                      <button>Từ chối</button>
                    </td>
                  </tr>
                  <tr>
                    <td>App theo dõi sức khỏe</td>
                    <td>Trần Thị B</td>
                    <td>
                      <button>Đồng ý</button>
                      <button>Từ chối</button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <button onClick={() => setProjectActive(null)}>
                ← Quay lại
              </button>
            </div>
          )}

          {projectActive === "interview" && (
            <div className="mentor-task-content">
              <h3>Phỏng vấn sinh viên</h3>

              <table className="mentor-table">
                <thead>
                  <tr>
                    <th>Sinh viên</th>
                    <th>Dự án</th>
                    <th>Lịch phỏng vấn</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lê Văn C</td>
                    <td>Website TMĐT</td>
                    <td>
                      <input type="date" />
                      <button>Xác nhận</button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <button onClick={() => setProjectActive(null)}>
                ← Quay lại
              </button>
            </div>
          )}
        </div>
      )}

      {/* ===================== PHÂN RÃ NHIỆM VỤ ===================== */}
      {active === "task" && (
        <div className="mentor-detail">
          <h2>Phân rã nhiệm vụ</h2>

          {taskActive === null && (
            <div className="mentor-detail-grid">
              <div
                className="mentor-detail-card"
                onClick={() => setTaskActive("template")}
              >
                Tải template Excel / Docs
              </div>
              <div
                className="mentor-detail-card"
                onClick={() => setTaskActive("assign")}
              >
                Phân công nhiệm vụ
              </div>
              <div
                className="mentor-detail-card"
                onClick={() => setTaskActive("progress")}
              >
                Theo dõi tiến độ
              </div>
            </div>
          )}

          {taskActive === "template" && (
            <div className="mentor-task-content">
              <h3>Tải template</h3>
              <button>Tải file Excel</button>
              <button>Tải file Docs</button>
              <br />
              <button onClick={() => setTaskActive(null)}>← Quay lại</button>
            </div>
          )}

          {taskActive === "assign" && (
            <div className="mentor-task-content">
              <h3>Phân công nhiệm vụ</h3>

              <table className="mentor-table">
                <thead>
                  <tr>
                    <th>Sinh viên</th>
                    <th>Nhiệm vụ</th>
                    <th>Deadline</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nguyễn Văn A</td>
                    <td><input type="text" /></td>
                    <td><input type="date" /></td>
                    <td><button>Giao việc</button></td>
                  </tr>
                </tbody>
              </table>

              <button onClick={() => setTaskActive(null)}>← Quay lại</button>
            </div>
          )}

          {taskActive === "progress" && (
            <div className="mentor-task-content">
              <h3>Theo dõi tiến độ</h3>

              <table className="mentor-table">
                <thead>
                  <tr>
                    <th>Sinh viên</th>
                    <th>Nhiệm vụ</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Trần Thị B</td>
                    <td>Thiết kế UI</td>
                    <td>
                      <select>
                        <option>Đang làm</option>
                        <option>Hoàn thành</option>
                        <option>Quá hạn</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>

              <button onClick={() => setTaskActive(null)}>← Quay lại</button>
            </div>
          )}
        </div>
      )}

      {/* ===================== ĐÁNH GIÁ & BÁO CÁO ===================== */}
      {active === "report" && (
        <div className="mentor-detail">
          <h2>Đánh giá & báo cáo</h2>

          {reportActive === null && (
            <div className="mentor-detail-grid">
              <div
                className="mentor-detail-card"
                onClick={() => setReportActive("evaluate")}
              >
                Đánh giá sinh viên
              </div>
              <div
                className="mentor-detail-card"
                onClick={() => setReportActive("submit")}
              >
                Gửi báo cáo tiến độ
              </div>
            </div>
          )}

          {reportActive === "evaluate" && (
            <div className="mentor-task-content">
              <h3>Đánh giá sinh viên</h3>

              <table className="mentor-table">
                <thead>
                  <tr>
                    <th>Sinh viên</th>
                    <th>Điểm</th>
                    <th>Nhận xét</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nguyễn Văn A</td>
                    <td><input type="number" min={0} max={10} /></td>
                    <td><input type="text" /></td>
                  </tr>
                </tbody>
              </table>

              <button>Lưu đánh giá</button>
              <button onClick={() => setReportActive(null)}>← Quay lại</button>
            </div>
          )}

          {reportActive === "submit" && (
            <div className="mentor-task-content">
              <h3>Gửi báo cáo tiến độ</h3>
              <textarea rows={4}></textarea>
              <br />
              <input type="file" />
              <br />
              <button>Gửi báo cáo</button>
              <button onClick={() => setReportActive(null)}>← Quay lại</button>
            </div>
          )}
        </div>
      )}

      {/* ===================== QUỸ DỰ ÁN ===================== */}
      {active === "fund" && (
        <div className="mentor-detail">
          <h2>Quỹ dự án</h2>

          {fundActive === null && (
            <div className="mentor-detail-grid">
              <div
                className="mentor-detail-card"
                onClick={() => setFundActive("budget")}
              >
                Xác nhận phân bổ
              </div>
              <div
                className="mentor-detail-card"
                onClick={() => setFundActive("leader")}
              >
                Chỉ định trưởng nhóm
              </div>
            </div>
          )}

          {fundActive === "budget" && (
            <div className="mentor-task-content">
              <h3>Xác nhận phân bổ ngân sách</h3>

              <table className="mentor-table">
                <thead>
                  <tr>
                    <th>Khoản chi</th>
                    <th>Số tiền</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Thiết kế UI</td>
                    <td>2.000.000</td>
                    <td>
                      <button>Phê duyệt</button>
                      <button>Điều chỉnh</button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <button onClick={() => setFundActive(null)}>← Quay lại</button>
            </div>
          )}

          {fundActive === "leader" && (
            <div className="mentor-task-content">
              <h3>Chỉ định trưởng nhóm</h3>

              <table className="mentor-table">
                <thead>
                  <tr>
                    <th>Sinh viên</th>
                    <th>Chọn</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lê Văn C</td>
                    <td><button>Chọn làm Leader</button></td>
                  </tr>
                </tbody>
              </table>

              <button onClick={() => setFundActive(null)}>← Quay lại</button>
            </div>
          )}
        </div>
      )}
      {/* ===== THANH ĐIỀU HƯỚNG DƯỚI ===== */}
<div className="mentor-footer">
  <button
    className="btn-home"
    onClick={() => navigate("/landing")}
  >
    ← Về trang chủ
  </button>

  <button
    className="btn-logout"
    onClick={handleLogout}
  >
    Đăng xuất
  </button>
</div>
    </div>
  );
};

export default Mentor;
