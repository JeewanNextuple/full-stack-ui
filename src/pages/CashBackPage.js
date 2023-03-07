import { redirect, useLoaderData } from "react-router-dom";
import Cashback from "../components/CashBack/Cashback";
import PageHeader from "../components/UI/PageHeader";

const CashBackPage = () => {
  const cashbacks = useLoaderData();
  return (
    <>
      <PageHeader heading="CASHBACKS" />

      {cashbacks.length === 0 ? (
        <h4 className="text-center text-danger my-5">No cashbacks as of now</h4>
      ) : (
        <div className="container my-5 w-50">
          {cashbacks.map((transaction) => (
            <Cashback
              key={transaction.transactionId}
              id={transaction.transactionId}
              timestamp={transaction.dateAndTime}
              cashback={transaction.cashback}
              recipient={transaction.name}
              amount={transaction.amount}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default CashBackPage;
export async function loader() {
  const isLoggedIn = localStorage.getItem("email");
  if(!isLoggedIn){
    return redirect('../../authentication?mode=login')
  }
  const response = await fetch(
    "http://localhost:8080/cashbacks/" + localStorage.getItem("email")
  );

  if (!response.ok) {
    alert("Status code: 500\nServer has gone for a toss")
  } else {
    const resData = response.json();
    return resData;
  }
}
