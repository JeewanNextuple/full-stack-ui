import PageHeader from "../components/UI/PageHeader";
import { useLoaderData, redirect } from "react-router-dom";
import History from "../components/History.js/History";
const HistoryPage = () => {
    const transactions = useLoaderData()
  return (
    <>
      <PageHeader heading="TRANSACTION HISTORY" />

      {transactions.length === 0 ? (
        <h4 className="text-center text-danger my-5">No transactions as of now</h4>
      ) : (
        <div className="container w-50 my-5">
          {transactions.map((transaction) => (
            <History
              key={transaction.transactionId}
              id={transaction.transactionId}
              timestamp={transaction.dateAndTime}
              cashback={transaction.cashback}
              amount={transaction.amount}
              email={transaction.email}
              recipient={transaction.name}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default HistoryPage;
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
