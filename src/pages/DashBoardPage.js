import DashBoard from "../components/Dashboard/DashBoard";
import { Outlet, useLoaderData,redirect } from "react-router-dom";
const DashBoardPage = () => {

  const walletData = useLoaderData();

  return (
    <>
      <DashBoard wallet={walletData.amount}/>
      <Outlet />
    </>
  );
};
export default DashBoardPage;
export async function loader() {
  const isLoggedIn = localStorage.getItem("email");
  if(!isLoggedIn){
    return redirect('../authentication?mode=login')
  }
  const response = await fetch("http://localhost:8080/wallet/"+localStorage.getItem("email"));

  if (!response.ok) {
    /**COME BACK TO THIS */
  } else {
    const resData = response.json();
    return resData;
  }
}
