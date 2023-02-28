import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
import AuthPage from "./pages/AuthPage";
import DashBoardPage from "./pages/DashBoardPage";
import PaymentPage from "./pages/PaymentPage";
import RechargePage from "./pages/RechargePage";
import TransactionRoot from "./pages/TransactionRoot";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index:true, element: <HomePage /> },
      { path: "authentication", element: <AuthPage /> },
      {path:"dashboard", element:<TransactionRoot />, children:[
        {index:true, element:<DashBoardPage />},
        {path:"pay",element:<PaymentPage />},
        {path:"recharge",element:<RechargePage />}
      ]}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
