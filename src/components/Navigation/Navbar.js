import { NavLink, useNavigate } from "react-router-dom";
import classes from "./Navbar.module.css";
import { authActions } from "../../store/auth-slice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const localUser = localStorage.getItem("email");

  // const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutOnclickHandler = () => {
    dispatch(authActions.setIsAuthenticated(""));
    localStorage.removeItem("email");
    navigate("");
    alert("Logout Successfull, Come back soon");
  };

//  const profileOnClickHandler = () => {
//   return <Notification />
//  }

  return (
    <header>
      <nav className={`navbar navbar-expand-lg ${classes.navbar}`}>
        <div
          className="container-fluid"
          style={{ paddingLeft: "7%", paddingRight: "7%" }}
        >
          <NavLink className="navbar-brand text-white" to="/">
            TuplePay
          </NavLink>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " to="/">
                  Home
                </NavLink>
              </li>
              {!localUser && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="authentication?mode=login">
                    Authentication
                  </NavLink>
                </li>
              )}

              {localUser && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="dashboard">
                    Dashboard
                  </NavLink>
                </li>
              )}
              {localUser && (
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-lg text-white px-4"
                    style={{ backgroundColor: "#67076e" }}
                    onClick={logoutOnclickHandler}
                  >
                    Logout
                  </button>
                </li>
              )}

              <li className="nav-item">
                <p className="nav-link text-info">
                  {localUser ? localUser : ""}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
