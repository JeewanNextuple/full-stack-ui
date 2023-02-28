import { Form, Link, useSearchParams } from "react-router-dom";

const btnStyle = {
  backgroundColor: "#8b005d",
};
const linkStyle = {
  color: "#8b005d",
  fontWeight: "bold",
};

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const inLoginMode = searchParams.get("mode") === "login";

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

                    <Form>
                      {!inLoginMode && (
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form3Example1cg"
                            className="form-control form-control-lg"
                            placeholder="Your Name"
                          />
                        </div>
                      )}

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          placeholder="Your Email"
                        />
                      </div>

                      {!inLoginMode && (
                        <div className="form-outline mb-4">
                          <input
                            type="tel"
                            id="phone"
                            className="form-control form-control-lg"
                            placeholder="Your Contact Number"
                          />
                        </div>
                      )}

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          placeholder="Password"
                        />
                      </div>

                      {!inLoginMode && (
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="confirm password"
                            className="form-control form-control-lg"
                            placeholder="Confirm Password"
                          />
                        </div>
                      )}

                      {!inLoginMode && (
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value="yes"
                            id="checkbox"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox"
                          >
                            I agree all statements in{" "}
                            <a href="#!" className="text-body">
                              <u>Terms of service</u>
                            </a>
                          </label>
                        </div>
                      )}

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
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
                    </Form>
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
