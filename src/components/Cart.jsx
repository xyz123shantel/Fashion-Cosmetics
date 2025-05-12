import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCartState] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [cartTotal, setCartTotal] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");

  const calculateTotal = () => {
    if (cart.length === 0) {
      setCartTotal(0);
      return;
    }

    const total = cart.reduce((sum, item) => {
      const cost = parseFloat(item.product_cost) || 0;
      const quantity = parseInt(item.quantity) || 0;
      return sum + cost * quantity;
    }, 0);

    setCartTotal(total);
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const setCart = (newCart) => {
    setCartState(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeFromCart = (productIdToRemove) => {
    const updatedCart = cart.filter(item => item.product_id !== productIdToRemove);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item =>
      item.product_id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ).filter(item => item.quantity > 0);
    setCart(updatedCart);
  };

  const handleMpesaCheckout = async () => {
    const normalizedPhone = phoneNumber
      .replace(/\s+/g, "")                // remove all whitespace
      .replace(/^(\+?254|0)/, "254");     // ensure phone starts with '254'

    if (!/^2547\d{8}$/.test(normalizedPhone)) {
      alert("Please enter a valid Safaricom phone number (e.g. 0712345678 or +254712345678)");
      return;
    }

    if (cartTotal <= 0) {
      alert("Cart is empty or total is invalid.");
      return;
    }

    try {
      const response = await fetch("https://your-backend.com/api/mpesa/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: normalizedPhone,
          amount: cartTotal,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("M-Pesa prompt sent. Please complete the payment.");
        setCart([]);
        setCartTotal(0);
        setPhoneNumber("");
        navigate("/order-success");
      } else {
        alert(`Payment failed: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("M-Pesa Checkout Error:", error);
      alert("Error connecting to M-Pesa server.");
    }
  };

  return (
    <div className="container mt-4 bg-info">
      <h3 className="text-success">🛒 Your Cart</h3>

      {cart.length === 0 ? (
        <p>Your cart is empty. Add some products!</p>
      ) : (
        <div className="row">
          {cart.map((item) => (
            <div key={item.product_id} className="col-md-3 mb-4 text-center">
              <div className="card shadow-sm">
                <img
                  src={`https://shantel.pythonanywhere.com/static/images/${item.product_photo}`}
                  alt={item.product_name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex justify-content-between">
                  <div>
                    <h5>{item.product_name}</h5>
                    <p>{item.product_cat}</p>
                    <p>Price: Ksh {item.product_cost}</p>
                    <div>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.product_id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.product_id, parseInt(e.target.value, 10))
                      }
                      min="1"
                      className="form-control"
                      style={{ width: "60px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <>
          <div className="mt-4">
            <h4>Total: Ksh {cartTotal.toFixed(2)}</h4>
            <input
              type="tel"
              placeholder="Enter M-Pesa phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="form-control my-2"
            />
            <button className="btn btn-success w-100" onClick={handleMpesaCheckout}>
              Pay with M-Pesa
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
