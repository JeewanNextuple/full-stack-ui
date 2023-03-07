import { Link } from "react-router-dom";
const PageHeader = (props) => {
  return (
    <div
      className="my-5 d-flex justify-content-center align-items-center flex-column "
      style={{ color: "#8b005d" }}
    >
      <h1 className="fw-bold">{props.heading}</h1>
      <Link
        to=".."
        type="button"
        className="btn btn-lg my-3 text-white"
        style={{ backgroundColor: "#8b0074" }}
      >
        Back to Dashboard
      </Link>
    </div>
  );
};
export default PageHeader
