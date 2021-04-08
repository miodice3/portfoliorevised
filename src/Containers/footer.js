function Footer() {
    return (
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Location</h4>
                            <p className="lead mb-0">
                                {/* 2215 John Daniel Drive */}
                                <br />
                                Littleton, CO 80127
                            </p>
                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Around the Web</h4>
                            <a className="btn btn-outline-light btn-social mx-1" target="blank" href="https://github.com/miodice3"><i className="fab fa-fw fa-github"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" target="blank" href="https://www.linkedin.com/in/michael-iodice-0158/"><i className="fab fa-fw fa-linkedin-in"></i></a>
                            {/* <a className="btn btn-outline-light btn-social mx-1" target="blank" href="https://www.facebook.com/michael.iodice.14"><i className="fab fa-fw fa-facebook-f"></i></a> */}
                            <a className="btn btn-outline-light btn-social mx-1" target="blank" href="https://www.youtube.com/channel/UCB3OcWnhiAyw3oyIlimWWrA"><i className="fab fa-fw fa-youtube"></i></a>                            
                        </div>

                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4">About Freelancer</h4>
                            <p className="lead mb-0">
                                Freelance is a free to use, MIT licensed Bootstrap theme created by
                                <a href="http://startbootstrap.com"> Start Bootstrap</a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
    );
  }
  
  export default Footer;