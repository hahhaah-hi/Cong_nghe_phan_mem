import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FundSplit.css";

type ProjectOption = {
  id: string;
  name: string;
  sub: string;
  total: number;
};

type Member = {
  id: string;
  initials: string;
  name: string;
  amount: number;
  percent: number;
};

export default function FundSplit() {
  const navigate = useNavigate();

  // dropdown tổng quỹ theo dự án (mô phỏng)
  const projectOptions: ProjectOption[] = useMemo(
    () => [
      { id: "p1", name: "LabOdc", sub: "Kết nối DN & SV UTH", total: 30_000_000 },
      { id: "p2", name: "Kho hàng", sub: "Hệ thống quản lý kho", total: 20_000_000 },
      { id: "p3", name: "Trường học", sub: "App quản lý trường học", total: 50_000_000 },
    ],
    []
  );

  const [projectId, setProjectId] = useState(projectOptions[0].id);

  const selectedProject = useMemo(
    () => projectOptions.find((p) => p.id === projectId) ?? projectOptions[0],
    [projectId, projectOptions]
  );

  // mô phỏng đã nhận theo từng đợt (hình mẫu: 9m, 12m, 9m nếu total=30m)
  const basePhases = useMemo(() => {
    const base = [9_000_000, 12_000_000, 9_000_000];
    const baseTotal = 30_000_000;
    const t = selectedProject.total;
    // scale theo total để nhìn hợp lý (nếu khác 30m)
    const ratio = t / baseTotal;
    return base.map((x) => Math.round(x * ratio));
  }, [selectedProject.total]);

  const [phase1Paid] = useState(true);
  const [phase2Paid, setPhase2Paid] = useState(false);
  const [phase3Paid, setPhase3Paid] = useState(false);

  // tổng đã nhận = sum các đợt đã paid
  const received = useMemo(() => {
    let sum = 0;
    if (phase1Paid) sum += basePhases[0];
    if (phase2Paid) sum += basePhases[1];
    if (phase3Paid) sum += basePhases[2];
    return sum;
  }, [phase1Paid, phase2Paid, phase3Paid, basePhases]);

  // tỷ lệ phân bổ
  const [groupPct, setGroupPct] = useState(70);
  const [councilPct, setCouncilPct] = useState(20);
  const [leaderPct, setLeaderPct] = useState(10);

  // đảm bảo tổng = 100 (mô phỏng đơn giản)
  const normalizePct = (next: { g?: number; c?: number; l?: number }) => {
    const g = next.g ?? groupPct;
    const c = next.c ?? councilPct;
    const l = next.l ?? leaderPct;
    const sum = g + c + l;

    if (sum === 100) {
      setGroupPct(g);
      setCouncilPct(c);
      setLeaderPct(l);
      return;
    }

    // nếu lệch, ưu tiên giữ g, c; tự điều chỉnh l để đủ 100
    const newL = Math.max(0, 100 - g - c);
    setGroupPct(g);
    setCouncilPct(c);
    setLeaderPct(newL);
  };

  // thành viên mô phỏng
  const members: Member[] = useMemo(
    () => [
      { id: "va", initials: "VA", name: "Nguyễn Văn Anh", amount: 3_000_000, percent: 50 },
      { id: "tb", initials: "TB", name: "Trần Thị Bích", amount: 1_500_000, percent: 24 },
      { id: "tm", initials: "TM", name: "Võ Thị Mai", amount: 1_200_000, percent: 19 },
      { id: "mh", initials: "MH", name: "Nguyễn Minh Hùng", amount: 600_000, percent: 9 },
    ],
    []
  );

  const money = (n: number) =>
    n.toLocaleString("vi-VN", { maximumFractionDigits: 0 }) + " VNĐ";

  const groupAmount = Math.round((received * groupPct) / 100);
  const councilAmount = Math.round((received * councilPct) / 100);
  const leaderAmount = Math.round((received * leaderPct) / 100);

  const handleBack = () => navigate("/talent/leader");
  const handleNext = () => alert("Mô phỏng: Bước tiếp theo");

  return (
    <div className="fsPage">


      {/* Header brand */}
      <div className="fsTop">
        <div className="fsTopLeft">
          <div className="fsIcon" aria-hidden="true">▭</div>
          <div className="fsTopTitle">THANH TOÁN DỰ ÁN</div>
        </div>

        <div className="fsBrandWrap">
          <div className="fsBrand">Labodc</div>
        </div>
      </div>

      {/* Main card */}
      <div className="fsCard">
        {/* Project line */}
        <div className="fsProjectRow">
          <div className="fsAvatar">LA</div>

          <div className="fsProjectInfo">
            <div className="fsProjectName">{selectedProject.name}</div>
            <div className="fsProjectSub">{selectedProject.sub}</div>
          </div>

          <div className="fsProjectSelectWrap">
            <select
              className="fsSelect"
              value={projectId}
              onChange={(e) => {
                setProjectId(e.target.value);
                // reset paid trạng thái (mô phỏng)
                setPhase2Paid(false);
                setPhase3Paid(false);
              }}
            >
              {projectOptions.map((p) => (
                <option key={p.id} value={p.id}>
                  {money(p.total)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* phases table */}
        <div className="fsTable">
          <div className="fsRow">
            <div className="fsColLeft">Đợt 1 : Bắt đầu dự án</div>
            <div className="fsColMid">{money(basePhases[0])}</div>
            <div className="fsColRight">
              <span className="fsPill success">Đã thanh toán</span>
            </div>
          </div>

          <div className="fsRow">
            <div className="fsColLeft">Đợt 2 : Hoàn thành giai đoạn giữa</div>
            <div className="fsColMid">{money(basePhases[1])}</div>
            <div className="fsColRight">
              {phase2Paid ? (
                <span className="fsPill success">Đã thanh toán</span>
              ) : (
                <button className="fsBtnTiny" onClick={() => setPhase2Paid(true)}>
                  Xác nhận thanh toán
                </button>
              )}
            </div>
          </div>

          <div className="fsRow">
            <div className="fsColLeft">Đợt 3 : Kết thúc dự án</div>
            <div className="fsColMid">{money(basePhases[2])}</div>
            <div className="fsColRight">
              {phase3Paid ? (
                <span className="fsPill success">Đã thanh toán</span>
              ) : (
                <span className="fsPill muted">Sắp tới</span>
              )}
            </div>
          </div>

          <div className="fsRow fsRowTotal">
            <div className="fsColLeft">Tổng đã nhận</div>
            <div className="fsColMid">{money(received)}</div>
            <div className="fsColRight">{money(received)}</div>
          </div>
        </div>

        {/* bottom panels */}
        <div className="fsPanels">
          {/* LEFT panel */}
          <div className="fsPanel">
            <div className="fsPanelTitle">Phân chia thanh toán cho thành viên</div>
            <div className="fsPanelSub">
              Thiết lập tỉ lệ phân chia thanh toán phần nhận được từ doanh nghiệp.
            </div>

            <div className="fsFormGrid">
              <div className="fsFormLabel">Phân Bổ Cho Nhóm</div>
              <div className="fsFormControl">
                <div className="fsPctWrap">
                  <input
                    className="fsPctInput"
                    type="number"
                    value={groupPct}
                    onChange={(e) => normalizePct({ g: Number(e.target.value) })}
                  />
                  <span className="fsPctUnit">%</span>
                </div>
              </div>
              <div className="fsFormValue">{money(groupAmount)}</div>

              <div className="fsFormLabel">Trích Hội Đồng/ Quỹ</div>
              <div className="fsFormControl">
                <div className="fsPctWrap">
                  <input
                    className="fsPctInput"
                    type="number"
                    value={councilPct}
                    onChange={(e) => normalizePct({ c: Number(e.target.value) })}
                  />
                  <span className="fsPctUnit">%</span>
                </div>
              </div>
              <div className="fsFormValue">{money(councilAmount)}</div>

              <div className="fsFormLabel">Trích Cho Trưởng</div>
              <div className="fsFormControl">
                <div className="fsPctWrap">
                  <input
                    className="fsPctInput"
                    type="number"
                    value={leaderPct}
                    onChange={(e) => normalizePct({ l: Number(e.target.value) })}
                  />
                  <span className="fsPctUnit">%</span>
                </div>
              </div>
              <div className="fsFormValue">{money(leaderAmount)}</div>

              <div className="fsFormLabel fsBold">Tổng đã nhận</div>
              <div />
              <div className="fsFormValue fsBold">{money(received)}</div>
            </div>

            <div className="fsToggleRow">
              <label className="fsToggle">
                <input type="checkbox" defaultChecked />
                <span className="fsToggleUi" />
              </label>
              <span className="fsToggleText">Cho phép cụ thể hóa phân chia</span>
            </div>

            <div className="fsFooterLeft">
              <button className="fsBackBtn" onClick={handleBack}>
                ← Quay lại
              </button>
              <button className="fsNextBtn" onClick={handleNext}>
                Bước tiếp theo
              </button>
            </div>
          </div>

          {/* RIGHT panel */}
          <div className="fsPanel">
            <div className="fsPanelTitle">Phân chia thanh toán cho thành viên</div>

            <div className="fsInfoLine">
              <span>Tổng đã nhận : </span>
              <b>{money(received)}</b>
            </div>
            <div className="fsInfoLine">
              <span>Phân Bổ Cho Nhóm ( {groupPct}% ) : </span>
              <b>{money(groupAmount)}</b>
            </div>

            <div className="fsMemberList">
              {members.map((m) => (
                <div className="fsMemberRow" key={m.id}>
                  <div className="fsMemberAvatar">{m.initials}</div>
                  <div className="fsMemberMain">
                    <div className="fsMemberTop">
                      <div className="fsMemberName">{m.name}</div>
                      <div className="fsMemberAmount">{money(m.amount)}</div>
                      <div className="fsMemberPct">{m.percent}%</div>
                    </div>

                    <div className="fsBar">
                      <div
                        className="fsBarFill"
                        style={{ width: `${Math.min(100, Math.max(0, m.percent))}%` }}
                      />
                    </div>
                  </div>

                  <div className="fsMemberArrow" aria-hidden="true">▾</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
