import { Form, Link } from "react-router-dom";

const btnStyle = {
  backgroundColor: "#8b005d",
};
const TransactionForm = (props) => {
  const isPayMode = props.mode === "PAY";
  return (
    <section className="vh-90 my-5">
      <div className="mask d-flex align-items-center h-100 ">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  

                  <h2 className="text-uppercase text-center mb-5">
                    {props.heading}
                  </h2>

                  <Form>
                    {isPayMode && (
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="payName">
                          Recipient Name
                        </label>
                        <input
                          type="text"
                          id="payName"
                          className="form-control form-control-lg"
                        />
                      </div>
                    )}
                    {isPayMode && (
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="account">
                          Account Number
                        </label>
                        <input
                          type="number"
                          id="account"
                          min={100000}
                          className="form-control form-control-lg"
                        />
                      </div>
                    )}

                    {isPayMode && (
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="payEmail">
                          Recipient Email
                        </label>
                        <input
                          type="email"
                          id="payEmail"
                          className="form-control form-control-lg"
                        />
                      </div>
                    )}

                    {isPayMode && (
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="payPhone">
                          Recipient Number
                        </label>
                        <input
                          type="tel"
                          id="payPhone"
                          className="form-control form-control-lg"
                        />
                      </div>
                    )}

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="payPhone">
                        Amount
                      </label>
                      <input
                        type="number"
                        id="amount"
                        className="form-control form-control-lg"
                        min={1}
                      />
                    </div>
                    <div className="row">
                    <div className="d-flex justify-content-center col">
                      <button
                      style={btnStyle}
                        type="button"
                        className="btn btn-block btn-lg text-white"
                      >
                        {isPayMode ? "CONFIRM" : "RECHARGE"}
                      </button>
                    </div>

                    <div className="d-flex justify-content-center col">
                    <Link
                    style={btnStyle}
                      to=".."
                      type="button"
                      className="btn btn-lg text-white"
                    >
                      Go Back
                    </Link>
                  </div>

                    </div>

                    
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TransactionForm;
