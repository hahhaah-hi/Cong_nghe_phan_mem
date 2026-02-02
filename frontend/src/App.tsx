import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";

import TalentPortal from "./pages/talentdashboard/TalentPortal";
import StudentProfile from "./pages/talentdashboard/StudentProfile";

import Projects from "./pages/talentdashboard/Projects";
import JoinRequest from "./pages/talentdashboard/JoinRequest";
import ProjectTasks from "./pages/talentdashboard/ProjectTasks";

import LeaderHub from "./pages/talentdashboard/LeaderHub";
import FundSplit from "./pages/talentdashboard/FundSplit";
import PerformanceReport from "./pages/talentdashboard/PerformanceReport";
import HomeLanding from "./pages/HomeLanding";

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

  <Route path="*" element={<Navigate to="/" replace />} />
</Routes>

  );
}
