import { Link } from 'react-router-dom';

import myipis from '../images/myipis.jpg'

function Emissions() {
    return (
                    <div className="col-md-6 col-lg-4 mb-5">
                        {/* <Link to="/emissions"> */}
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white">Wifi web server controls hardware to flick open custom designed 3d printed latch</div>
                            </div>
                            <img className="img-fluid" src={myipis} alt="..." />
                        </div>
                        {/* </Link> */}
                    </div>
    );
  }
  
  export default Emissions;