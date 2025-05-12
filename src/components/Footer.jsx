import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="">
              <section className="row bg-warning p-4">
                <div className="col-md-4 text-light">
                    <h6 className="text-center">About us</h6>
                    <p>Welcome all to our beaty shop. We are located at Uthiru Dumbonne estate place near main stage,,, welcome all we are very hospitable to everyone and all the genders,,, we treat everyone same either male or female or either adults or children,, welcome all ....THANK YOU</p>
                    <p>We do different activities in our beauty shop,, we do massage to all genger and to adults and children too in a very hospitable way,, we do make nails in a very affordable price,, we sale clothes of every gender and of different sizes, we also sale shoes of different sizes and there are of different gender....WELCOME ALL</p>
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
                        <img src="Images/fb.png" alt="" />
                    </Link>
                    <Link to="https://instagram.com">
                        <img src="Images/in.png" alt="" />
                    </Link>
                    <Link to="https://twitter.com">
                        <img src="Images/tw.png" alt="" />
                    </Link>
                    <Link to="https://whatsapp.com">
                        <img src="Images/whatsapp.png" alt="" />
                    </Link>
                    <p className="text-dark">We are located at Uthiru Dumbonne estate place near main stage,, we  welcome you all for different services,, you can whatsapp or contact us with the number below,, or found us on internet using the following </p>

                    
                </div>
             </section>
             
             <footer className="bg-dark text-white text-center p-2">
                <h5>Developed by Libendi Shantel Rachael &copy; 2025. All rights reserved</h5>
             </footer>
        </div>
      );
}
 
export default Footer;