import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="my-5 text-center">
      <h1>Error has occurred!!!</h1>
      <p>Check the URL once.</p>
      <Link to="/">
        <h3>Go back</h3>
      </Link>
    </main>
  );
};
export default ErrorPage;
