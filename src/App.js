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



function App() {
  
  return (
    <Router>

    <div className="App">
      <header className="App-header">
    <h1>Fashion & Cosmetict Shop</h1>
      </header>
      <Routes>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/addproduct" element={<AddProducts/>} />
        <Route path="/"element={<GetProducts/>} />
        <Route path="/singleproduct" element={<SingleProduct/>} />
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
