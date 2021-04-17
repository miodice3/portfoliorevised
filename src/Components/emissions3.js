import { Link } from 'react-router-dom';
import carcomp from '../images/carcomp.jpg'

function Emissions2() {
    return (
                    <div className="col-md-6 col-lg-4 mb-5">
                        {/* <Link to="/emissions"> */}
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white">Select any US vehicle, view emissions, compare to electric using UK data</div>
                            </div>
                            <img className="img-fluid" src={carcomp} alt="..." />
                        </div>
                        {/* </Link> */}
                    </div>
    );
  }
  
  export default Emissions2;