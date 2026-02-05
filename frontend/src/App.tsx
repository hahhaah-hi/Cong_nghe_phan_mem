import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Mentor from "./pages/mentor/mentor";

import LADashboard from "./pages/LabAdmin/LADashboard";
import Enterprises from "./pages/LabAdmin/entities/Enterprises";
import TalentPortal from "./pages/talentdashboard/TalentPortal";
import StudentProfile from "./pages/talentdashboard/StudentProfile";
import AdminProjects from "./pages/LabAdmin/entities/Projects";
import Mentors from "./pages/LabAdmin/entities/Mentors";
import Students from "./pages/LabAdmin/entities/Students";
import ProjectReview from "./pages/LabAdmin/entities/ProjectReview";
import FundDistribution from "./pages/LabAdmin/entities/FundDistribution";
import ChangeRequests from "./pages/LabAdmin/entities/ChangeRequests";
import NotifyResult from "./pages/LabAdmin/entities/NotifyResult";
import MonthlyReport from "./pages/LabAdmin/entities/MonthlyReport";
import PublishReport from "./pages/LabAdmin/entities/PublishReport";





import Projects from "./pages/talentdashboard/Projects";
import JoinRequest from "./pages/talentdashboard/JoinRequest";
import ProjectTasks from "./pages/talentdashboard/ProjectTasks";

import LeaderHub from "./pages/talentdashboard/LeaderHub";
import FundSplit from "./pages/talentdashboard/FundSplit";
import PerformanceReport from "./pages/talentdashboard/PerformanceReport";
import HomeLanding from "./pages/HomeLanding";

import EnterpriseDashboard from "./pages/Company/EnterpriseDashboard";
import CompanyProfileMenu from "./pages/Company/CompanyProfileMenu";
import CompanyVerifySubmit from "./pages/Company/CompanyVerifySubmit";
import CompanyVerifyStatus from "./pages/Company/CompanyVerifyStatus";
import CompanyProfileView from "./pages/Company/CompanyProfileView";
import CompanyProfileEdit from "./pages/Company/CompanyProfileEdit";

// Projects
import ProjectMenu from "./pages/Company/Projects/ProjectMenu";
import ProjectProposalCreate from "./pages/Company/Projects/ProjectProposalCreate";
import ProjectScopeBudgetTimeline from "./pages/Company/Projects/ProjectScopeBudgetTimeline";
import ProjectSubmitApproval from "./pages/Company/Projects/ProjectSubmitApproval";
import ProjectStatus from "./pages/Company/Projects/ProjectStatus";

// Payments
import PaymentMenu from "./pages/Company/Payments/PaymentMenu";
import PaymentInfo from "./pages/Company/Payments/PaymentInfo";
import PaymentPayOS from "./pages/Company/Payments/PaymentPayOS";
import PaymentResult from "./pages/Company/Payments/PaymentResult";
import PaymentHistory from "./pages/Company/Payments/PaymentHistory";

// Change / Cancel
import ProjectChangeCancelFlow from "./pages/Company/Change/ProjectChangeCancelFlow";
import ChangeCancelRequest from "./pages/Company/Change/ChangeCancelRequest";
import ChangeCancelStatus from "./pages/Company/Change/ChangeCancelStatus";

// Reports (NESTED with layout)
import ReportLayout from "./pages/Company/Report/ReportLayout";
import ReportEvaluationFlow from "./pages/Company/Report/ReportEvaluationFlow";
import ReportProgress from "./pages/Company/Report/ReportProgress";
import ReportAcceptance from "./pages/Company/Report/ReportAcceptance";
import ProjectEvaluation from "./pages/Company/Report/ProjectEvaluation";

import Dashboard from "./pages/talent/Dashboard";
import SystemConfig from "./pages/talent/SystemConfig";
import AppConfig from "./pages/talent/AppConfig";
import JwtSession from "./pages/talent/JwtSession";

import UserManage from "./pages/talent/UserManage";
import Role from "./pages/talent/Role";
import Permission from "./pages/talent/Permission";
import UnlockAccount from "./pages/talent/UnlockAccount";

import ExcelTemplate from "./pages/talent/ExcelTemplate";
import UploadTemplate from "./pages/talent/UploadTemplate";
import UpdateTemplate from "./pages/talent/UpdateTemplate";
import DeleteTemplate from "./pages/talent/DeleteTemplate";


export default function App() {
  return (
    <Routes>
      {/* Trang chính */}
      <Route path="/" element={<Home />} />

      {/* Sau đăng nhập */}
      <Route path="/landing" element={<HomeLanding />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot" element={<Forgot />} />

      {/* CỔNG SINH VIÊN */}
      <Route path="/talent" element={<TalentPortal />} />
      <Route path="/talent/profile" element={<StudentProfile />} />
      <Route path="/talent/projects" element={<Projects />} />
      <Route path="/talent/projects/:id/join" element={<JoinRequest />} />
      <Route path="/talent/projects/tasks" element={<ProjectTasks />} />
      <Route path="/talent/leader" element={<LeaderHub />} />
      <Route path="/talent/leader/fund" element={<FundSplit />} />
      <Route path="/talent/leader/report" element={<PerformanceReport />} />

      {/* Enterprise dashboard */}
      <Route path="/enterprise" element={<EnterpriseDashboard />} />

      {/* Company */}
      <Route path="/enterprise/company" element={<CompanyProfileMenu />} />
      <Route path="/enterprise/company/view" element={<CompanyProfileView />} />
      <Route path="/enterprise/company/edit" element={<CompanyProfileEdit />} />
      <Route
        path="/enterprise/company/verify-submit"
        element={<CompanyVerifySubmit />}
      />
      <Route
        path="/enterprise/company/verify-status"
        element={<CompanyVerifyStatus />}
      />

      {/* Projects */}
      <Route path="/enterprise/projects" element={<ProjectMenu />} />
      <Route
        path="/enterprise/projects/proposal"
        element={<ProjectProposalCreate />}
      />
      <Route
        path="/enterprise/projects/scope"
        element={<ProjectScopeBudgetTimeline />}
      />
      <Route
        path="/enterprise/projects/submit"
        element={<ProjectSubmitApproval />}
      />
      <Route path="/enterprise/projects/status" element={<ProjectStatus />} />

      {/* Change / Cancel */}
      <Route
        path="/enterprise/projects/change-cancel"
        element={<ProjectChangeCancelFlow />}
      />
      <Route
        path="/enterprise/projects/change-cancel/request"
        element={<ChangeCancelRequest />}
      />
      <Route
        path="/enterprise/projects/change-cancel/status"
        element={<ChangeCancelStatus />}
      />

      {/* Payments */}
      <Route path="/enterprise/payments" element={<PaymentMenu />} />
      <Route path="/enterprise/payments/info" element={<PaymentInfo />} />
      <Route path="/enterprise/payments/payos" element={<PaymentPayOS />} />
      <Route path="/enterprise/payments/result" element={<PaymentResult />} />
      <Route path="/enterprise/payments/history" element={<PaymentHistory />} />

      {/* Redirect cũ payments */}
      <Route
        path="/enterprise/company/payments"
        element={<Navigate to="/enterprise/payments" replace />}
      />
      <Route
        path="/enterprise/company/payments/:any"
        element={<Navigate to="/enterprise/payments" replace />}
      />

      {/* Redirect cũ change */}
      <Route
        path="/enterprise/change"
        element={<Navigate to="/enterprise/projects/change-cancel" replace />}
      />
      <Route
        path="/enterprise/change/change-cancel-flow"
        element={<Navigate to="/enterprise/projects/change-cancel" replace />}
      />
      <Route
        path="/enterprise/change/change-cancel-flow/request"
        element={
          <Navigate to="/enterprise/projects/change-cancel/request" replace />
        }
      />
      <Route
        path="/enterprise/change/change-cancel-flow/status"
        element={
          <Navigate to="/enterprise/projects/change-cancel/status" replace />
        }
      />

      {/* Reports (đã bọc menu trái bằng ReportLayout) */}
      <Route path="/enterprise/reports" element={<ReportLayout />}>
        <Route index element={<ReportEvaluationFlow />} />
        <Route path="progress" element={<ReportProgress />} />
        <Route path="acceptance" element={<ReportAcceptance />} />
        <Route path="evaluation" element={<ProjectEvaluation />} />
      </Route>
       {/* BẢNG QUẢN TRỊ */}
      <Route path="/talent" element={<Dashboard />} />
      <Route path="/talent/settings" element={<SystemConfig />} />
      <Route path="/talent/settings/app" element={<AppConfig />} />
      <Route path="/talent/settings/jwt" element={<JwtSession />} />

      <Route path="/talent/users" element={<UserManage />} />
      <Route path="/talent/users/role" element={<Role />} />
      <Route path="/talent/users/permission" element={<Permission />} />
      <Route path="/talent/users/unlock" element={<UnlockAccount />} />

      <Route path="/talent/templates" element={<ExcelTemplate />} />
      <Route path="/talent/templates/upload" element={<UploadTemplate />} />
      <Route path="/talent/templates/update" element={<UpdateTemplate />} />
      <Route path="/talent/templates/delete" element={<DeleteTemplate />} />

      <Route path="/admin" element={<LADashboard />} />
      <Route path="/admin/enterprises" element={<Enterprises />} />
      <Route path="/admin/projects" element={<AdminProjects />} />
      <Route path="/admin/mentors" element={<Mentors />} />
      <Route path="/admin/students" element={<Students />} />
      <Route path="/admin/project-review" element={<ProjectReview />} />
      <Route path="/admin/fund-distribution" element={<FundDistribution />} />
      <Route path="/admin/change-requests" element={<ChangeRequests />} />
      <Route path="/admin/notify-result" element={<NotifyResult />} />
      <Route path="/admin/report/monthly" element={<MonthlyReport />} />
      <Route path="/admin/report/publish" element={<PublishReport />} />

      




<Route path="/mentor" element={<Mentor />} />

      {/*  - LUÔN để cuối */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
