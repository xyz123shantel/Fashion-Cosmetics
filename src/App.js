import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddProducts from './components/AddProducts';
import GetProducts from './components/GetProducts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SingleProduct from './components/SingleProduct';
import "bootstrap-icons/font/bootstrap-icons.min.css"
import ChatBot from './components/ChatBot';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import AboutUs from'./components/AboutUs';
import TermsAndConditions from './components/TermsAndConditions';
//                 {success && <b className="text-success">{success}</b>}




function App() {
  
  return (
    <Router>

    <div className="App">
      <header className="App-header">
    <h1>Fashion & Cosmetict Shop</h1>
    <Navbar/>
      </header>
      <Routes>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/addproduct" element={<AddProducts/>} />
        <Route path="/"element={<GetProducts/>} />
        <Route path="/singleproduct" element={<SingleProduct/>} />
        <Route path="/chatbot" element={<ChatBot/>}/>
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path="/terms" element={<TermsAndConditions/>} />

       
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
