import axios from "axios";
import { useState } from "react";

const SignUp = () => {

    let[Username, setUsername] = useState("");
    let[email, setEmail] = useState("");
    let[phone, setPhone] = useState("");
    let[password, setPassword] = useState("");
    let[loading, setLoading] = useState("");
    let[error, setError] = useState("");
    let[success, setSuccess] = useState("");

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            setLoading("Please wait as we upload your data")
              const data = new FormData()
        data.append("username", Username);
        data.append("email", email);
        data.append("phone", phone);
        data.append("password", password);

        const responce =await axios.post("https://Shantel.pythonanywhere.com/api/signup", data);
        setLoading("");
        setError("")
        setSuccess(responce.data.success);
        setUsername("");
        setEmail("");
        setPhone("");
        setPassword("");
        console.log(responce);
        } catch (error) {
            setLoading("")
            setError("Something went wrong");
        }
    }
    return ( 
       <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4 bg-info">
                <h2>Sign Up</h2>
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                <b className="text-success">{success}</b>
                <form onSubmit={submitForm} className="bg-info">
                    <input type="text" placeholder="Enter Username" required  className="form-control" onChange={(e)=>setUsername(e.target.value)} value={Username}/>
                   
                    <br />
                    <input type="email" placeholder="Enter Email" required className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    
                    <br />
                    <input type="tel" placeholder="Enter phone number" required className="form-control" onChange={(e) => setPhone(e.target.value)} value={phone} />
                    
                    <br />
                    <input type="password"placeholder="Enter Password" required className="form-control" onChange={(e) => setPassword(e.target.value)} value={password}/>
                   
                    <br />
                    <button className="btn btn-primary" type="submit">Sign Up</button>
                </form>
            </div>
       </div>

     );
}
 
export default SignUp;