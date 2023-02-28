import { Link } from "react-router-dom";
const Icon = (props) => {
  const iconStyle = {
    color: "#8b005d",
  };
  const tagStyle = {
    fontWeight: "bold",
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <Link to={props.linkTo}>
        <span className={props.src} style={iconStyle} />
      </Link>

      <p className="text-center" style={tagStyle}>
        {props.tag}
      </p>
    </div>
  );
};
export default Icon;
