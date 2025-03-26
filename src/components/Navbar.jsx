import { Link } from "react-router-dom";
const Navbar = () => {
    return (  
        <div>
             <section className="row">
            <div className="col-md-12">
                <div className="navbar navbar-expand-md navbar-light bg-light">
                    <Link to="/" className="navbar-brand">Fashion & Cosmetics Shop</Link>
                    <button className="navbar-toggler" data-bs-target="#prada" data-bs-toggle="collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="prada">
                        <div className="navbar-nav">
                            <Link to="/" className="btn btn-primary mx-2">Home</Link>
                            <Link to="/addproduct" className="btn btn-primary mx-2">Add Product</Link>
                            
                        </div>

                        <div className="navbar-nav ms-auto">
                            <Link to="/signin" className="btn btn-info mx-2">login</Link>
                            <Link to="/signup" className="btn btn-info mx-2">signup</Link>
                        </div>
                    </div>
                </div>
            </div>
         </section>
        </div>
    );
}
 
export default Navbar;