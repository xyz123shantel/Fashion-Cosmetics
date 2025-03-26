import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";
import  Carousel from "./Carousel";
import Navbar from "./Navbar";



const GetProducts = () => {
    let [products, setProducts] = useState([])
    let [loading, setLoading] = useState("")
    let [error, setError] = useState("")
    let [filteredProducts, setfilteredProducts] =useState([]);

    const img_url = "https://Shantel.pythonanywhere.com/static/images/"
    const navigate = useNavigate()

    // function to fetch products from api
    const getProducts = async () => {

        setError("")
        setLoading("please wait, receiving the products...")
        try {
            const response = await axios.get("https://Shantel.pythonanywhere.com/api/getproducts");
            console.log(response.data);
            setLoading("")
            setProducts(response.data)
            setfilteredProducts(response.data);
        } catch (error) {
            setLoading("")
            setError(error.message)
        }
    };

    const handleSearch = (value) => {
        const filtered = products.filter((product)=>
        product.product_name.toLowerCase().includes(value.toLowerCase()))
        setfilteredProducts(filtered);
    }
    // getProducts()
    
    useEffect(()=>{
        getProducts();
    }, []);
    return ( 
        <div className="row">
            {/* mount navbar component */}
            <Navbar/>

            
            <nav className="m-4">
                <Link className="btn btn-dark mx-2" to="/">Home</Link>
                <Link className="btn btn-dark mx-2" to="/addproduct">Add Product</Link>
                <Link className="btn btn-dark mx-2" to="/signin">Sign In</Link>
                <Link className="btn btn-dark mx-2" to="/signup">Sign Up</Link>
            </nav>
            {/* mount carousel component */}
            <Carousel/>
            
            

            <h3>Available</h3>
            <b className="text-danger">{error}</b>
            <b className="text-warning">{loading}</b>

            <div className="row justify-content-center my-4">
                <div className="col-md-4">
                    <input type="text" placeholder="search product by name" className="form-control" onChange={(e) => handleSearch(e.target.value)} />
                </div>
            </div>

            {filteredProducts.map((product)=>(
                 <div className="col-md-3 justify-content-center mb-4">

                 <div className="card shadow">
                     <img src={ img_url + product.product_photo} alt="" className="product_img mt_4"/>
                     <div className="card-body">
                         <h5 className="mt-2">{product.product_name}</h5>
                         <p className="text-muted">{product.product_desc.slice(0, 10)}</p>
                         <b className="text-warning">Ksh{product.product_cost}</b>
                         {product.product_id}
                         <button className="btn btn-dark w-100" onClick={() => navigate("/singleproduct", {state:{ product}})}>View product</button>
                     </div>
                 </div>
                 </div>
            ))}
            <Footer/>
        </div>
     );
}
export default GetProducts;