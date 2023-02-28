import { Link } from "react-router-dom"
import image from "../../assets/image.png"

const homeStyle = {
    backgroundColor:"#8b005d"
}
const Home = () => {
    return <>
    <div className="container my-5 p-2 rounded-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1">Welcome to Tuple Pay!!</h1>
          <p className="lead">Get a complete solution of transfering and handling your money with trust. Alipay, PhonePay, Paytm sabko takkar dega. Tension nahi leni!!</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start ms-5 mb-4 mb-lg-3">
            <Link to="dashboard" type="button" className="btn btn-lg px-4 me-md-2 fw-bold text-white" style={homeStyle}>Get Started</Link>
            <Link to="authentication?mode=login" type="button" className="btn btn-outline-secondary btn-lg px-4">Login</Link>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src={image} alt="" width="400" />
        </div>
      </div>
    </div>
    </>
}
export default Home