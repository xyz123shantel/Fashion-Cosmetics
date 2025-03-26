import axios from "axios";
import { useState, useSyncExternalStore } from "react";
import { useLocation, Link, useSearchParams } from "react-router-dom";

const SingleProduct = () => {

    const img_url = "https://ndege25.pythonanywhere.com/static/images/"
    const {product} = useLocation().state || {};

    let [phone, setPhone] = useState("")
    let [loading, setLoading] = useState("")
    let [error, setError] = useState("")
    let [success, setSuccess] =useState("")

    const submitForm = async (e) => {
        e.preventDefault()
        setError("")
        setSuccess("")
        setLoading("Please wait.....Processing payment....")

        try {
            const data = new FormData()
            data.append("amount", product.product_cost)
            data.append("phone", phone)

            const response = await axios.post("https://ndege25.pythonanywhere.com/api/mpesa_payment", data)
            setLoading("")
            setSuccess(response.data.message)
        } catch (error) {
            setLoading("")
            setError(error.message)
        }
    };
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

                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                <b className="text-success">{success}</b>

                <form onSubmit={submitForm}>
                    <input type="number" readOnly value={product.product_cost} className="form-control" />
                    <br />
                    <input type="tel" required placeholder="Enter Mpesa No 254xxxxxxxxx" onChange={(e) => setPhone(e.target.value)} className="form-control" />
                    <br />
                    <button className="btn btn-primary">Pay Now</button>
                </form>
            </div>
        </div>
     );
}
 
export default SingleProduct;
