import { Link } from "react-router-dom";
const Carousel = () => {
    return (
        <div>
        <section className="row">
            <div className="col-md-12">
                <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src="Images/images.jpeg" alt="" className="d-block w-100 " height="500px"/>
                            <div className="carousel-caption">
                            <h2 className="bg-info">Sport shoes</h2>
                            <p>they are very hospitable and are of different sizes from large to small welcome all</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="Images/massage2.jpeg" alt="" className="d-block w-100 " height="500px"/>
                        </div>
                        <div className="carousel-item">
                            <img src="Images/massage.jpeg" alt="" className="d-block w-100 " height="500px"/>
                            <div className="carousel-caption">
                                <h2>Shantel Wifi</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, eius.</p>
                                <button className="btn btn-danger">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <Link to="#myCarousel" className="carousel-control-prev" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span></Link >
                    <Link to="#myCarousel" className="carousel-control-next" data-bs-slide="next"><span className="carousel-control-next-icon"></span></Link >
                  
                </div>
            </div>
         </section>
        </div>
    );
}
 
export default Carousel;