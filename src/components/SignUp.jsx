
import axios from "axios";
import { useState, useRef } from "react";

const SignUp = () => {
    const [Username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("");

    const passwordRef = useRef(null);
    const iconRef = useRef(null);

    const evaluatePasswordStrength = (pwd) => {
        let strength = 0;

        if (pwd.length >= 8) strength += 1;
        if (/[A-Z]/.test(pwd)) strength += 1;
        if (/[a-z]/.test(pwd)) strength += 1;
        if (/[0-9]/.test(pwd)) strength += 1;
        if (/[^A-Za-z0-9]/.test(pwd)) strength += 1;

        if (strength <= 2) {
            setPasswordStrength("Weak");
        } else if (strength === 3 || strength === 4) {
            setPasswordStrength("Medium");
        } else {
            setPasswordStrength("Strong");
        }
    };

    const generatePassword = () => {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        let generatedPassword = "";
        for (let i = 0; i < 12; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomIndex];
        }
        setPassword(generatedPassword);
        evaluatePasswordStrength(generatedPassword);
    };

    const togglePassword = () => {
        const input = passwordRef.current;
        const icon = iconRef.current;

        if (input.type === "password") {
            input.type = "text";
            icon.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
        } else {
            input.type = "password";
            icon.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
        }
    };

    const clearForm = () => {
        setUsername("");
        setEmail("");
        setPhone("");
        setPassword("");
        setPasswordStrength("");
    };

    const submitForm = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const data = new FormData();
            data.append("username", Username);
            data.append("email", email);
            data.append("phone", phone);
            data.append("password", password);

            const response = await axios.post("https://Shantel.pythonanywhere.com/api/signup", data);
            setSuccess("Account created successfully!");
            clearForm();
        } catch (err) {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4 bg-info">
                <h2>Sign Up</h2>
                {loading && <b className="text-warning">Please wait as we upload your data...</b>}
                {error && <b className="text-danger">{error}</b>}
                {success && <b className="text-success">{success}</b>}

                <form onSubmit={submitForm} className="bg-info">
                    <input
                        type="text"
                        placeholder="Enter Username"
                        required
                        className="form-control"
                        onChange={(e) => setUsername(e.target.value)}
                        value={Username}
                    />
                    <br />
                    <input
                        type="email"
                        placeholder="Enter Email"
                        required
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <br />
                    <input
                        type="tel"
                        placeholder="Enter phone number"
                        required
                        className="form-control"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                    <br />

                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Enter password"
                            required
                            className="form-control"
                            ref={passwordRef}
                            onChange={(e) => {
                                const pwd = e.target.value;
                                setPassword(pwd);
                                evaluatePasswordStrength(pwd);
                            }}
                            value={password}
                        />
                        <span className="input-group-text" onClick={togglePassword} style={{ cursor: "pointer" }}>
                            <i ref={iconRef} className="bi bi-eye-fill"></i>
                        </span>
                    </div>

                    {password && (
                        <small
                            className={`text-${
                                passwordStrength === "Weak"
                                    ? "danger"
                                    : passwordStrength === "Medium"
                                    ? "warning"
                                    : "success"
                            }`}
                        >
                            Password Strength: {passwordStrength}
                        </small>
                    )}

                    <br />
                    <button type="button" className="btn btn-primary mt-2" onClick={generatePassword}>
                        Generate Password
                    </button>

                    <br />
                    <br />
                    <button className="btn btn-primary" type="submit">
                        Sign Up
                    </button>
                    <br />
                    <br />
                    <p>
                        Already have an account?{" "}
                        <a href="/signin" className="text-decoration-none">
                            Sign In
                        </a>
                    </p>
                    <p>
                        By signing up, you agree to our{" "}
                        <a href="/terms" className="text-decoration-none">
                            Terms and Conditions
                        </a>
                    </p>
                    <p>
                        <a href="/contactus" className="text-decoration-none">
                            Contact Us
                        </a>
                    </p>      
                  
                </form>
            </div>
        </div>
    );
};

export default SignUp;

