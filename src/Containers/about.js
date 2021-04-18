import resumepdf from '../Resume/Michael Iodice Resume.pdf'
import resumedocx from '../Resume/Michael Iodice Resume.docx'

function About() {
    return (
        <section className="page-section bg-primary text-white mb-0" id="about">
            <br></br>
            <br></br>
            <div className="container">

                <h2 className="page-section-heading text-center text-uppercase text-white">About Me</h2>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="row">
                    <div className="col-lg-4 ml-auto"><p className="lead">
                    I love to analyze problems and build tools.  I have previously found success working in Real Estate coordinating major renovations, handling the purchase and sale of property ranging from $1.5mm-$45mm per transaction, coordinating new construction, and long term strategy advising for Trust and LLC dissolution.
                        </p></div>
                    <div className="col-lg-4 mr-auto"><p className="lead">
                    I am currently seeking a mature engineering team that will help me develop production grade habits and provide excellent mentorship.  I can add value to any company that needs a solutions oriented software engineer that loves to work hard and think outside the box.
                        </p></div>
                </div>

                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" target="blank" href={resumepdf}>
                        <i className="fas fa-file mr-2"></i>
                        View Resume
                    </a>
                </div>

                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href={resumedocx}>
                        <i className="fas fa-download mr-2"></i>
                        Download Resume
                    </a>
                </div>

            </div>
        </section>
    );
  }
  
  export default About;