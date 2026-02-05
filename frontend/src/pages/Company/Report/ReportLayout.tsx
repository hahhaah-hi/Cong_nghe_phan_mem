import { Outlet } from "react-router-dom";
import EnterpriseTopNav from "../EnterpriseTopNav";
import ReportSideMenu from "./ReportSideMenu";
import "./ReportLayout.css";

export default function ReportLayout() {
  return (
    <div className="rl">
      <div className="rl__wrap">
        <div className="rl__brand">Labodc</div>
        <EnterpriseTopNav />

        <div className="rl__body">
          <ReportSideMenu />
          <main className="rl__content">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
