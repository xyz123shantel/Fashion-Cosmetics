import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
  const [theme, setTheme] = useState("dark");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.classList.remove("dark-mode", "light-mode");
    document.body.classList.add(`${newTheme}-mode`);
  };

  useEffect(() => {
    // Set initial theme class on first load
    document.body.classList.add(`${theme}-mode`);
  }, []);

  const productKnowledge = {
    hi: "Hello! How can I assist you today?",
    services: "We offer a range of beauty services including facials, massages, haircuts, nail treatments, makeup, and more! Feel free to ask for specific services.",
    skincare:
      "Skincare products help in maintaining healthy skin. We offer moisturizers, cleansers, toners, serums, and masks. Would you like to know more about any specific product?",
    makeup:
      "We have a variety of makeup products, from foundations to lipsticks, eye shadows, and highlighters. What are you looking for in makeup today?",
    haircare:
      "Our haircare services include haircuts, coloring, treatments, and styling. We also have hair care products like shampoos, conditioners, and styling gels. Need help with your hair?",
    nails:
      "We offer nail services such as manicures, pedicures, and gel nails. We also sell nail care products. Want to know more about nail treatments?",
    cosmetics:
      "Our cosmetics line includes foundations, concealers, blushes, eye shadows, lipsticks, and mascaras. Let me know what you're looking for!",
    massage:
      "We offer relaxing and therapeutic massage services like Swedish massage, deep tissue massage, and aromatherapy. Would you like to book a session?",
    facial:
      "Our facials are designed to nourish and rejuvenate your skin. We have treatments for all skin types, including anti-aging facials and hydrating facials.",
    fragrance:
      "Explore our selection of perfumes and fragrances from top beauty brands. Whether you're looking for something floral, woody, or fruity, we have something for everyone.",
    "beauty tips":
      "Some beauty tips include moisturizing daily, using sunscreen, and always removing your makeup before bed. Hydration is key for a healthy glow!",
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    setMessages((prev) => [...prev, { text: input, sender: "user-message" }]);
    setLoading(true);

    setTimeout(() => {
      const response =
        productKnowledge[input.toLowerCase()] ||
        "Sorry, I don't have information on that. Can I help with something else related to beauty and cosmetics?";
      setMessages((prev) => [
        ...prev,
        { text: response, sender: "bot-message" },
      ]);
      setLoading(false);
      setInput("");
    }, 1000);
  };

  return (
    <div className="container-fluid">
      <div className="bg getproducts-background">
        <div className="chatbot">
          <button onClick={toggleTheme}>Toggle Theme</button>

          <div className="chat-box">
            {messages.map((message, index) => (
              <div key={index} className={message.sender}>
                <p>{message.text}</p>
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              placeholder="Ask me about beauty and cosmetics services..."
            />
            <button onClick={handleSend} disabled={loading}>
              {loading ? "Loading..." : "Send"}
            </button>
          </div>

          <button className="home-button" onClick={() => navigate("/")}>
            <br />
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
