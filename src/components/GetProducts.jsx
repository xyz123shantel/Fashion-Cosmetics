import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import Footer from "./Footer";

const GetProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [sortOrder, setSortOrder] = useState("low-to-high");

  const img_url = "https://shantel.pythonanywhere.com/static/images/";
  const navigate = useNavigate();

  // Fetch Products
  const getProducts = async () => {
    setError(null);
    setLoading("Please wait... Fetching products");

    try {
      const response = await axios.get("https://shantel.pythonanywhere.com/api/getproducts");
      if (response.data && Array.isArray(response.data)) {
        const validProducts = response.data.filter(
          p => p.product_id && p.product_name && p.product_cost !== undefined
        );
        setProducts(validProducts);
      } else {
        setError("Invalid product data received.");
      }
    } catch (error) {
      setError(error?.response?.data?.message || "Failed to fetch products. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  useEffect(() => {
    getProducts();
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    if (cart.length) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product) => {
    const existing = cart.find(item => item.product_id === product.product_id);
    if (existing) {
      setCart(cart.map(item =>
        item.product_id === product.product_id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const visibleProducts = products.filter((product) => 
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.product_desc?.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, visibleCount);

  const sortedProducts = visibleProducts.sort((a, b) => {
    if (sortOrder === "low-to-high") {
      return a.product_cost - b.product_cost;
    } else if (sortOrder === "high-to-low") {
      return b.product_cost - a.product_cost;
    }
    return 0; // no sorting
  });

  return (
    <div className="container mt-4">
      <Carousel />
      <br />
      <hr />
      <br />

      {/* Search Bar and Filter Dropdown */}
      <div className="row justify-content-between mt-4">
        <div className="col-md-6 mb-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control border border-primary"
              placeholder="🔍 Search for a product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="input-group-text">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>

        {/* Price Filter Dropdown */}
        <div className="col-md-3 mb-3">
          <select
            className="form-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <h3 className="text-success mt-4">Available Products</h3>
      {error && <b className="text-danger">{error}</b>}
      {loading && <b className="text-warning">{loading}</b>}

      <div className="row mt-4">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <div key={product.product_id} className="col-md-3 mb-4">
              <div className="card shadow-sm">
                <img
                  src={img_url + (product.product_photo || 'default-image.jpg')}
                  alt={product.product_name || "Product image"}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="text-warning">{product.product_name || "Unnamed Product"}</h5>
                  <p className="text-muted">
                    {product.product_desc ? product.product_desc.slice(0, 50) + "..." : "No description"}
                  </p>
                  <b className="text-success">
                    Ksh {product.product_cost !== undefined ? product.product_cost : "N/A"}
                  </b>
                  <div className="mt-3">
                    <button
                      className="btn btn-success w-100"
                      onClick={() => navigate("/singleproduct", { state: { product } })}
                    >
                      View Product
                    </button>

                    <button
                      className="btn btn-primary w-100 mt-2"
                      onClick={() => addToCart(product)}
                    >
                      🛒 Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-muted mt-4">No products found.</div>
        )}
      </div>

      {/* Load More Button */}
      {visibleCount < products.length && (
        <div className="text-center mt-4">
          <button className="btn btn-primary btn-outline-info" onClick={() => setVisibleCount(prev => prev + 8)}>
            Load More
          </button>
        </div>
      )}

      {/* View Cart Button */}
      <div className="text-center mt-4">
        <button className="btn btn-success" onClick={() => navigate("/cart")}>
          View Cart ({cart.length})
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default GetProducts;
