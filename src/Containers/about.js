import resumepdf from '../Resume/Michael Iodice Resume.pdf'
import resumedocx from '../Resume/Michael Iodice Resume.docx'

function About() {
    return (
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">

                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="row">
                    <div className="col-lg-4 ml-auto"><p className="lead">
                    You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
                        </p></div>
                    <div className="col-lg-4 mr-auto"><p className="lead">
                        You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
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