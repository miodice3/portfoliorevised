import Emissions from '../Components/emissions.js'
import Emissions2 from '../Components/emissions2.js'
import Emissions3 from '../Components/emissions3.js'

import SolSearch from '../Components/solsearch.js'

import ReportCard from '../Components/reportcard.js'

import WifiBox1 from '../Components/WifiBox1.js'
import WifiBox2 from '../Components/WifiBox2.js'
import WifiBox3 from '../Components/WifiBox3.js'

function Portfolio() {
    return (

        <section className="page-section portfolio" id="portfolio">
            <div className="container">

                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <h5 className="page-section-heading text-center text-lowercase text-secondary mb-0">React / Redux - A Useful Tool</h5>
                {/* <h5 className="page-section-heading text-center text-lowercase text-secondary mb-0">A Useful Tool</h5> */}
                <br/>
                <div className="row justify-content-center">
                    <Emissions />
                    <Emissions2 />
                    <Emissions3 />
                </div>

                <h5 className="page-section-heading text-center text-lowercase text-secondary mb-0">Ruby on Rails - sol-search</h5>
                {/* <h5 className="page-section-heading text-center text-lowercase text-secondary mb-0">Sol-Search - a Renewable Energy Marketplace</h5> */}
                <br/>
                <div className="row justify-content-center">
                    <SolSearch />
                </div>

                <h5 className="page-section-heading text-center text-lowercase text-secondary mb-0">Ruby / Sinatra - report card</h5>
                {/* <h5 className="page-section-heading text-center text-lowercase text-secondary mb-0">Report Card - Goal setting with analysis!</h5> */}
                <br/>
                <div className="row justify-content-center">
                    <ReportCard />
                </div>

                <h5 className="page-section-heading text-center text-lowercase text-secondary mb-0">Arduino, C++, Android App Builder - motivational box</h5>
                {/* <h5 className="page-section-heading text-center text-lowercase text-secondary mb-0">Motivational Box - A motivational tool</h5> */}
                <br/>
                <div className="row justify-content-center">
                    <WifiBox1 />
                    <WifiBox2 />
                    <WifiBox3 />
                </div>

            </div>
        </section>


    );
  }
  
  export default Portfolio;

                      {/* <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/cabin.png" alt="..." />
                        </div>
                    </div> */}