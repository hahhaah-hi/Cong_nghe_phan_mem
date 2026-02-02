import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./JoinRequest.css";

type Project = {
  id: string;
  name: string;
  code: string;
  mentor: string;
  unit: string;
  desc: string;
  requirements: string[];
  benefits: string[];
};

export default function JoinRequest() {
  const navigate = useNavigate();
  const { id } = useParams();

  // ===== MOCK DATA DỰ ÁN (bạn có thể thay bằng API sau) =====
  const projects: Project[] = useMemo(
    () => [
      {
        id: "UTH-001",
        name: "LabOdc - Kết nối doanh nghiệp & sinh viên UTH",
        code: "UTH-001",
        mentor: "Nguyễn Văn A",
        unit: "Lab ODC – Đại học UTH",
        desc:
          "LabOdc là hệ thống ODC phi lợi nhuận do Đại học UTH triển khai, nhằm kết nối doanh nghiệp với sinh viên trong các dự án CNTT thực tế.\n" +
          "Hệ thống giúp doanh nghiệp, đặc biệt là SME và startup, tiếp cận nguồn nhân lực trẻ với chi phí hợp lý; đồng thời tạo môi trường để sinh viên UTH tích lũy kinh nghiệm thực tế, làm việc theo quy trình chuyên nghiệp.\n" +
          "Dự án tập trung xây dựng nền tảng quản lý dự án, phân bổ quỹ, theo dõi tiến độ và đánh giá đóng góp cho sinh viên/mentor/doanh nghiệp.",
        requirements: [
          "Là sinh viên UTH (ưu tiên khối CNTT hoặc ngành liên quan).",
          "Có kiến thức nền tảng về lập trình, hệ thống thông tin hoặc phát triển phần mềm.",
          "Sẵn sàng tham gia dự án thực tế, làm việc theo nhóm và chịu trách nhiệm với nhiệm vụ được giao.",
          "Tuân thủ quy trình làm việc của LabOdc (báo cáo tiến độ, phân rã nhiệm vụ bằng mẫu Excel/Docs).",
          "Có tinh thần học hỏi, cam kết tham gia xuyên suốt vòng đời dự án.",
          "Ưu tiên sinh viên có kỹ năng Flutter, ReactJS, Python hoặc hiểu biết về REST API.",
        ],
        benefits: [
          "Tham gia dự án thực tế với doanh nghiệp dưới sự hướng dẫn của mentor.",
          "Được ghi nhận đóng góp, hiệu suất và sản phẩm bàn giao trên hệ thống LabOdc.",
          "Nhận phụ cấp dự án minh bạch theo cơ chế phân bổ quỹ 70/20/10.",
          "Tích lũy kinh nghiệm thực tế, phục vụ học tập và định hướng nghề nghiệp.",
        ],
      },
      {
        id: "UTH-002",
        name: "Ứng dụng quản lý sinh viên",
        code: "UTH-002",
        mentor: "Trần Thị B",
        unit: "Lab ODC – Đại học UTH",
        desc:
          "Xây dựng hệ thống quản lý sinh viên: hồ sơ, lớp học, điểm danh, thông báo và thống kê.",
        requirements: [
          "Biết ReactJS hoặc Flutter.",
          "Có tinh thần teamwork.",
          "Chịu học hỏi và làm đúng deadline.",
        ],
        benefits: [
          "Có mentor hướng dẫn.",
          "Có chứng nhận tham gia.",
          "Có phụ cấp theo hiệu suất.",
        ],
      },
      {
        id: "UTH-003",
        name: "Hệ thống quản lý kho hàng",
        code: "UTH-003",
        mentor: "Bùi Thị C",
        unit: "Lab ODC – Đại học UTH",
        desc:
          "Xây dựng phần mềm quản lý kho: nhập/xuất kho, tồn kho, lịch sử giao dịch, báo cáo.",
        requirements: [
          "Biết SQL cơ bản.",
          "Biết ReactJS hoặc backend NodeJS/PHP.",
        ],
        benefits: ["Có mentor", "Có kinh nghiệm thực tế", "Có phụ cấp theo quỹ"],
      },
      {
        id: "UTH-004",
        name: "App quản lý trường học",
        code: "UTH-004",
        mentor: "Phạm Minh D",
        unit: "Lab ODC – Đại học UTH",
        desc:
          "Ứng dụng quản lý trường học: quản lý học sinh, giáo viên, lịch học, thông báo, điểm số.",
        requirements: ["Có nền tảng mobile hoặc web.", "Siêng năng & trách nhiệm."],
        benefits: ["Tham gia dự án thật", "Có mentor", "Có phụ cấp"],
      },
    ],
    []
  );

  // tìm dự án theo param
  const project = useMemo(() => {
    // id trên route có thể là UTH-001 hoặc chỉ 001 => xử lý linh hoạt
    const found =
      projects.find((p) => p.id === id) ||
      projects.find((p) => p.id.toLowerCase() === (id || "").toLowerCase());

    return found || projects[0];
  }, [id, projects]);

  // ===== FORM STATE =====
  const [fullName, setFullName] = useState("");
  const [mssv, setMssv] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    // validate nhẹ
    if (!fullName.trim() || !mssv.trim() || !email.trim() || !phone.trim()) {
      alert("Vui lòng nhập đầy đủ Họ tên, MSSV, Email, SĐT.");
      return;
    }

    // lưu mock vào localStorage
    const payload = {
      projectId: project.id,
      fullName,
      mssv,
      email,
      phone,
      skills,
      note,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("joinRequest", JSON.stringify(payload));
    localStorage.setItem("joinedProjectId", project.id);

    alert("Đăng ký tham gia thành công! 🎉");

    // chuyển sang nhiệm vụ (đúng luồng bạn yêu cầu)
    navigate("/talent/projects/tasks");
  };

  return (
    <div className="joinPage">
      

      {/* breadcrumb */}
      <div className="joinBreadcrumb">
        <span className="muted">Danh sách dự án</span>
        <span className="muted"> &gt; </span>
        <b>Chi tiết dự án</b>
      </div>

      {/* header */}
      <div className="joinHeaderBox">
        <div className="joinHeaderTitle">{project.name}</div>

        <div className="joinHeaderMeta">
          <div>
            <b>Mã:</b> {project.code}
          </div>
          <div>
            <b>GVHD:</b> {project.mentor}
          </div>
          <div>
            <b>Đơn vị quản lý:</b> {project.unit}
          </div>
        </div>
      </div>

      {/* content grid */}
      <div className="joinGrid">
        {/* LEFT: MÔ TẢ */}
        <div className="joinLeft">
          <div className="joinSectionTitle">MÔ TẢ</div>
          <div className="joinText">{project.desc}</div>
        </div>

        {/* RIGHT: YÊU CẦU + QUYỀN LỢI */}
        <div className="joinRight">
          <div className="joinCard">
            <div className="joinSectionTitle teal">YÊU CẦU</div>
            <ul className="joinList">
              {project.requirements.map((r, idx) => (
                <li key={idx}>{r}</li>
              ))}
            </ul>
          </div>

          <div className="joinCard" style={{ marginTop: 12 }}>
            <div className="joinSectionTitle teal">QUYỀN LỢI</div>
            <ul className="joinList">
              {project.benefits.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FORM THAM GIA (ĐẸP) */}
      <div className="joinFormCard">
        <div className="joinFormTitle">THÔNG TIN THAM GIA</div>

        <div className="joinFormGrid">
          <div className="formGroup">
            <label>Họ và tên</label>
            <input
              className="formInput"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Nhập họ và tên"
            />
          </div>

          <div className="formGroup">
            <label>MSSV</label>
            <input
              className="formInput"
              value={mssv}
              onChange={(e) => setMssv(e.target.value)}
              placeholder="VD: 123456789"
            />
          </div>

          <div className="formGroup">
            <label>Email</label>
            <input
              className="formInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="VD: svuth@gmail.com"
            />
          </div>

          <div className="formGroup">
            <label>SĐT</label>
            <input
              className="formInput"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="VD: 0123456789"
            />
          </div>

          <div className="formGroup full">
            <label>Kỹ năng / Công nghệ</label>
            <input
              className="formInput"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="VD: ReactJS, NodeJS, Flutter..."
            />
          </div>

          <div className="formGroup full">
            <label>Ghi chú</label>
            <textarea
              className="formTextarea"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Mục tiêu khi tham gia, thời gian rảnh, link GitHub/Portfolio..."
            />
          </div>
        </div>

        <button className="joinSubmitBtn" onClick={handleSubmit}>
          ĐĂNG KÝ THAM GIA
        </button>
      </div>

      {/* bottom buttons */}
      <button
  className="backPortalBtn"
  onClick={() => navigate(-1)}
>
  ← Quay lại
</button>
    </div>
  );
}
