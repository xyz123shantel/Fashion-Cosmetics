import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="">
              <section className="row bg-warning p-4">
                <div className="col-md-4 text-light">
                    <h6 className="text-center">About us</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aperiam explicabo unde eius id quis!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam consequuntur magnam sint, eum mollitia ullam dolore. Placeat voluptatem qui corrupti id molestias, nesciunt, officiis laborum illum voluptate recusandae ipsam neque, odio debitis. Sapiente, aspernatur facere.</p>
                </div>

                <div className="col-md-4">
                    <h6 className="text-center text-light">Contact us</h6>
                    <form action="">
                        <input type="email" placeholder="Enter email" className="form-control"/><br/>
                        <textarea placeholder="leave a comment" rows="7" className="form-control"></textarea>
                        <br/>
                        <input type="submit" value="send messages" className="btn btn-outline-danger"/>
                    </form>
                </div>

                <div className="col-md-4">
                    <h4 className="text-center">Stay connected</h4>
                    <br/>
                    <Link to="https://facebook.com">
                        <img src="IMAGES/fb.png" alt="" />
                    </Link>
                    <Link to="https://instagram.com">
                        <img src="IMAGES/in.png" alt="" />
                    </Link>
                    <p className="text-dark">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ea error aliquid? Atque, sed deleniti! Assumenda iste aliquid asperiores in.</p>
                </div>
             </section>
             
             <footer className="bg-dark text-white text-center p-2">
                <h5>Developed by D. shantel &copy; 2025. All rights reserved</h5>
             </footer>
        </div>
      );
}
 
export default Footer;