import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth-slice";
import Input from "../UI/Input";

const btnStyle = {
  backgroundColor: "#8b005d",
};
const linkStyle = {
  color: "#8b005d",
  fontWeight: "bold",
};

const AuthForm = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const contactInputRef = useRef();
  const passwordInputRef = useRef();
  const navigation = useNavigate();
  const [searchParams] = useSearchParams();
  const inLoginMode = searchParams.get("mode") === "login";

  const [error, setError] = useState({ status: false, message: "" });

  const dispatch = useDispatch();

  // const [isRegistered, setIsRegistered] = useState(false)
  // const confirmPasswordInputRef = useRef();

  async function handleAuthUser(user) {
    // console.log(user);
    const response = await fetch(
      `http://localhost:8080/${!inLoginMode ? "users" : "userlogin"}`,
      {
        method: "POST",
        body: user,
        headers: new Headers({
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:8080",
        }),
      }
    );

    if (inLoginMode) {
      if (response.ok) {
        setError({ status: false, message: "" });
        alert("Login successful");
        dispatch(authActions.setIsAuthenticated(JSON.parse(user).email));
        localStorage.setItem("email", JSON.parse(user).email);
        navigation("../dashboard");
      } else {
        const data = await response.json();
        setError({ status: false, message: data.message });
      }
    } else {
      if (response.ok) {
        setError({ status: false, message: "" });
        // setIsRegistered(prev => !prev)
        alert("User registered Succesfully");
        nameInputRef.current.value = "";
        emailInputRef.current.value = "";
        contactInputRef.current.value = "";
        passwordInputRef.current.value = "";
        navigation("?mode=login");
      } else {
        const data = await response.json();
        setError({ status: false, message: data.message });
      }
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!inLoginMode) {
      const userRegister = {
        name: nameInputRef.current.value,
        email: emailInputRef.current.value,
        phone: contactInputRef.current.value,
        password: passwordInputRef.current.value,
      };
      handleAuthUser(JSON.stringify(userRegister));
    } else {
      const loginUser = {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      };
      handleAuthUser(JSON.stringify(loginUser));
    }
  };

  return (
    <>
      <section className="vh-90 my-5">
        <div className="mask d-flex align-items-center h-100 ">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      {inLoginMode ? "Login" : "Register"}
                    </h2>
                    {!error.status && <p className="text-center text-danger fw-bold bg-warning">{error.message}</p>}
                    <form method="post" onSubmit={onSubmitHandler}>
                      {!inLoginMode && (
                        <Input
                          type="text"
                          id="name"
                          label="Your Name"
                          reference={nameInputRef}
                        />
                      )}

                      <Input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        label="Email"
                        reference={emailInputRef}
                      />

                      {!inLoginMode && (
                        <Input
                          type="tel"
                          id="phone"
                          label="Contact"
                          reference={contactInputRef}
                        />
                      )}

                      <Input
                        type="password"
                        id="password"
                        label="Password"
                        reference={passwordInputRef}
                      />

                      {/* {!inLoginMode && (
                        <Input
                          type="password"
                          id="repPassword"
                          label="Confirm Password"
                          reference={confirmPasswordInputRef}
                        />
                      )} */}

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg text-white"
                          style={btnStyle}
                        >
                          {inLoginMode ? "Login" : "Register"}
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        {inLoginMode
                          ? "Do not have an account?"
                          : "Have already an account?"}
                        <Link
                          to={`?mode=${inLoginMode ? "register" : "login"}`}
                          className="fw-bold text-body"
                        >
                          <u style={linkStyle}>
                            {inLoginMode ? "Register" : "Login"}
                          </u>
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AuthForm;
