import Grid from "./Grid";

const Card = (props) => {
  return (
    <>
      <div className="container my-5 p-5">
        <div className="card p-5">
          <div
            className="card-header d-flex justify-content-between text-white"
            style={{ backgroundColor: "#8b005d" }}
          >
            <h3>{props.title}</h3>
            <h4 className="fw-bold">
              <span>₹</span>
              {props.amount}
            </h4>
          </div>
          <div className="card-body p-4 my-5">
            <Grid />
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
