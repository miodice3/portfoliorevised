import { Link } from 'react-router-dom';

import britain from '../images/britain.jpg'

function Emissions2() {
    return (
                    <div className="col-md-6 col-lg-4 mb-5">
                        {/* <Link to="/emissions"> */}
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white">When to charge an EV? Learn more using live 24 hour pollution forecasts</div>
                            </div>
                            <img className="img-fluid" src={britain} alt="..." />
                        </div>
                        {/* </Link> */}
                    </div>
    );
  }
  
  export default Emissions2;