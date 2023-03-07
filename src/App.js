import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import AuthPage from "./pages/AuthPage";
import DashBoardPage, {loader as dashBoardLoader} from "./pages/DashBoardPage";
import PaymentPage from "./pages/PaymentPage";
import RechargePage from "./pages/RechargePage";
import TransactionRoot from "./pages/TransactionRoot";
import CashBackPage,{loader as cashBackLoader} from "./pages/CashBackPage";
import HistoryPage, {loader as historyLoader} from "./pages/HistoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "authentication", element: <AuthPage />},
      {
        path: "dashboard",
        element: <TransactionRoot />,
        children: [
          { index: true, element: <DashBoardPage />, loader: dashBoardLoader},
          { path: "pay", element: <PaymentPage /> },
          { path: "recharge", element: <RechargePage /> },
          {path:"cashbacks", element:<CashBackPage />,loader:cashBackLoader},
          {path:"history", element:<HistoryPage />, loader:historyLoader}
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
