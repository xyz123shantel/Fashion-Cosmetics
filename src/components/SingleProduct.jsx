import axios from "axios";
import { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

const SingleProduct = () => {
    const img_url = "https://Shantel.pythonanywhere.com/static/images/";
    const { product } = useLocation().state || {};
    const navigate = useNavigate();

    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const submitForm = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading("Please wait... Processing payment...");

        try {
            const data = new FormData();
            data.append("amount", product.product_cost);
            data.append("phone", phone);

            const response = await axios.post("https://Shantel.pythonanywhere.com/api/mpesa_payment", data);
            setLoading("");
            setSuccess(response.data.message);
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    };

    // Function to remove the selected product and navigate back to the home page
    const handleRemoveProduct = () => {
        // Navigate to the home page ("/")
        navigate("/");  // This will redirect to the home page
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="row justify-content-center mt-3">
            <nav className="m-4">
                <Link className="btn btn-dark mx-2" to="/">Home</Link>
                <Link className="btn btn-dark mx-2" to="/addproduct">Add Product</Link>
                <Link className="btn btn-dark mx-2" to="/signin">Sign In</Link>
                <Link className="btn btn-dark mx-2" to="/signup">Sign Up</Link>
            </nav>
            <div className="col-md-3 card shadow">
                <img src={img_url + product.product_photo} alt={product.product_name} />
            </div>
            <div className="col-md-3 card shadow">
                <h2>{product.product_name}</h2>
                <h3 className="text-warning">{product.product_cost}</h3>
                <p className="text-muted">{product.product_desc}</p>

                {loading && <b className="text-warning">{loading}</b>}
                {error && <b className="text-danger">{error}</b>}
                {success && <b className="text-success">{success}</b>}

                <form onSubmit={submitForm}>
                    <input type="number" readOnly value={product.product_cost} className="form-control" />
                    <br />
                    <input
                        type="tel"
                        required
                        placeholder="Enter Mpesa No 254xxxxxxxxx"
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                    />
                    <br />
                    <button className="btn btn-primary" disabled={loading}>Pay Now</button>
                </form>
                <br />
                {/* Remove Product Button */}
                <button className="btn btn-danger" onClick={handleRemoveProduct}>Back</button>
            </div>
        </div>
    );
};

export default SingleProduct;

