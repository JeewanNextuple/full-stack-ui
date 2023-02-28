import Icon from "./Icon";
const Grid = () => {
  return (
    <div className="row">
      <div className="col">
        <Icon src="fa-solid fa-money-check-dollar fa-5x" tag="PAY" linkTo='pay'/>
      </div>
      <div className="col">
        <Icon src="fa-solid fa-bolt fa-5x" tag="RECHARGE" linkTo='recharge' />
      </div>
      <div className="col">
        <Icon src="fa-sharp fa-solid fa-sack-dollar fa-5x" tag="CASHBACKS" />
      </div>
      <div className="col">
        <Icon src="fa-sharp fa-solid fa-eye fa-5x" tag="VIEW BALANCE" />
      </div>
    </div>
  );
};
export default Grid;
