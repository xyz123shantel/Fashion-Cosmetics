
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Fashion & Cosmetics Shop
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item btn btn-info btn-outline-primary me-2">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item btn btn-info btn-outline-primary me-2">
              <Link className="nav-link" to="/addproduct">
                Addproduct
              </Link>
            </li>
            <li className="nav-item btn btn-info btn-outline-primary me-2">
              <Link className="nav-link" to="/chatbot">
                Chatbot
              </Link>
            </li>

            <li className="nav-item btn btn-info btn-outline-primary me-2">
              <Link className="nav-link" to="/cart">
              Cart
              </Link>
            </li>
            
            <li className="nav-item btn btn-info btn-outline-primary me-2">
              <Link className="nav-link" to="/contactus">
              ContactUs
              </Link>
            </li>

            <li className="nav-item btn btn-info btn-outline-primary me-2">
              <Link className="nav-link" to="/aboutus">
              AboutUs
              </Link>
            </li>

            <li className="nav-item btn btn-info btn-outline-primary me-2">
              <Link className="nav-link" to="/terms">
              Terms and Conditions
              </Link>
            </li>
          </ul>

          
          <div className="d-flex">
            <Link to="/signin" className="btn btn-primary btn-outline-info me-2">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary btn-outline-info me-2 ">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;//