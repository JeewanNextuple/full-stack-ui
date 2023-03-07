import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import Input from "../UI/Input";

const btnStyle = {
  backgroundColor: "#8b005d",
};
const TransactionForm = (props) => {
  const recipientNameInputRef = useRef();
  const accountInputRef = useRef();
  const recipientEmailInputRef = useRef();
  const recipientContactInputRef = useRef();
  const amountInputRef = useRef();
  const navigate = useNavigate();

  const [error, setError] = useState({ status: false, message: "" });

  const username = localStorage.getItem("email");

  const isPayMode = props.mode === "PAY";

  async function handleTransaction(transDetails) {
    const response = await fetch(
      `http://localhost:8080/${isPayMode ? "transaction" : "add-to-wallet"}`,
      {
        method: `${isPayMode ? "POST" : "PUT"}`,
        body: transDetails,
        headers: new Headers({
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:8080",
        }),
      }
    );

    if (!isPayMode) {
      if (response.ok) {
        setError({ status: false, message: "" });
        alert("Recharge Successful");
        navigate("..");
      } else {
        const data = await response.json();
        setError({ status: true, message: data.message });
      }
    } else {
      if (response.ok) {
        setError({ status: false, message: "" });
        alert("Transaction Successful");
        recipientNameInputRef.current.value = "";
        accountInputRef.current.value = "";
        recipientEmailInputRef.current.value = "";
        recipientContactInputRef.current.value = "";
        recipientContactInputRef.current.value = "";
        amountInputRef.current.value = "";

        navigate("..");
      } else {
        const data = await response.json();
        setError({ status: true, message: data.message });
      }
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (isPayMode) {
      handleTransaction(
        JSON.stringify({
          name: recipientNameInputRef.current.value,
          accountNumber: accountInputRef.current.value,
          email: recipientEmailInputRef.current.value,
          contact: recipientContactInputRef.current.value,
          amount: Number(amountInputRef.current.value),
          username: username,
        })
      );
    } else {
      handleTransaction(
        JSON.stringify({
          amount: Number(amountInputRef.current.value),
          username: username,
        })
      );
    }
  };

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
                  {error.status && (
                    <p className="text-center text-danger fw-bold bg-warning">
                      {error.message}
                    </p>
                  )}

                  <form onSubmit={submitHandler}>
                    {isPayMode && (
                      <Input
                        type="text"
                        id="payName"
                        label="Recipient Name"
                        reference={recipientNameInputRef}
                      />
                    )}
                    {isPayMode && (
                      <Input
                        type="number"
                        id="account"
                        min={100000}
                        label="Account Number"
                        reference={accountInputRef}
                      />
                    )}

                    {isPayMode && (
                      <Input
                        type="email"
                        id="payEmail"
                        label="Recipient Email"
                        reference={recipientEmailInputRef}
                      />
                    )}

                    {isPayMode && (
                      <Input
                        type="tel"
                        id="payPhone"
                        label="Recipient phone number"
                        reference={recipientContactInputRef}
                      />
                    )}

                    <Input
                      type="number"
                      id="amount"
                      label="Amount"
                      min={1}
                      reference={amountInputRef}
                    />

                    <div className="row">
                      <div className="d-flex justify-content-center col">
                        <button
                          style={btnStyle}
                          type="submit"
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
                  </form>
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
