import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import HomePage from "./pages/HomePage";
import ClanPage from "./pages/ClanPage";
import RoleList from "./pages/RoleList";
import RoleDetail from "./pages/RoleDetail";
import HistoryPage from "./pages/HistoryPage";
import HousePage from "./pages/HousePage";
import BranchList from "./pages/BranchList";
import GenealogyPage from "./pages/GenealogyPage";

function PlaceholderPage({ title, description }) {
  return (
    <div style={{ padding: 24 }}>
      <h2>{title}</h2>
      <p style={{ color: "#6b7280" }}>{description}</p>
    </div>
  );
}

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/clan" element={<ClanPage />} />
        <Route path="/branches" element={<BranchList />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/members" element={<GenealogyPage />} />
        <Route path="/houses" element={<HousePage />} />
        <Route path="/roles" element={<RoleList />} />
        <Route path="/roles/:id" element={<RoleDetail />} />

        <Route
          path="/tombs"
          element={<PlaceholderPage title="Lăng mộ tổ tiên" description="Thông tin lăng mộ tổ tiên và các khu mộ dòng họ." />}
        />

        <Route
          path="/education"
          element={<PlaceholderPage title="Khuyến học" description="Quỹ khuyến học, danh sách khen thưởng và thành tích con cháu." />}
        />

        <Route
          path="/contact"
          element={<PlaceholderPage title="Liên hệ" description="Thông tin liên hệ ban quản lý dòng họ, Facebook và Zalo." />}
        />

        <Route
          path="/settings"
          element={<PlaceholderPage title="Cấu hình hệ thống" description="Thiết lập hệ thống quản trị." />}
        />

      </Routes>
    </MainLayout>
  );
}

export default App;