import { Link } from 'react-router-dom';

import mitappinventor from '../images/mitappinventor.jpg'

function Emissions() {
    return (
                    <div className="col-md-6 col-lg-4 mb-5">
                        {/* <Link to="/emissions"> */}
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white">MIT App Builder application features persistence of box IP address, tasks, utilizes network requests</div>
                            </div>
                            <img className="img-fluid" src={mitappinventor} alt="..." />
                        </div>
                        {/* </Link> */}
                    </div>
    );
  }
  
  export default Emissions;