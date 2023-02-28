import DashBoard from "../components/Dashboard/DashBoard";
import { Outlet } from "react-router-dom";
const DashBoardPage = () => {
  return (
    <>
      <DashBoard />
      <Outlet />
    </>
  );
};
export default DashBoardPage;
