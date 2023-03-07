const Cashback = (props) => {
    return (
      <div className="card my-4 rounded-3 shadow-lg">
        <div className="card-header text-white" style={{backgroundColor:"#8b0074"}}>
          <span>{props.timestamp}</span><br />
          <span>Transaction ID: {props.id}</span><br/>
          <span>Payment of: Rs.{props.amount}</span>
          </div>
        <div className="card-body">
          <h3 className="card-title">AMOUNT</h3>
          <h5 className="card-text">
            Rs.{props.cashback}
          </h5>
        </div>
      </div>
    );
  };
  export default Cashback;