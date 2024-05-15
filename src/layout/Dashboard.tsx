import SideNavigationBasic from "@/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div className="flex justify-between ">
      <SideNavigationBasic />

      <Outlet />
    </div>
  );
};

export default Dashboard;
