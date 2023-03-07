const cardHeaderStyle = {
    backgroundColor:"#8b0074"
}
const History = (props) => {
    return (
      <div className="card my-4 rounded-3 shadow-lg">
        <div className="card-header text-white" style={cardHeaderStyle}>
          <span>{props.timestamp}</span><br />
          <span>Transaction ID: {props.id}</span><br/>
          <span>Recipient Name: {props.recipient}</span><br/>
          <span>Email: {props.email}</span>
          </div>
        <div className="card-body">
          <h3 className="card-title">AMOUNT</h3>
          <h5 className="card-text">
            Rs.{props.amount}
          </h5>
        </div>
      </div>
    );
  };
  export default History;