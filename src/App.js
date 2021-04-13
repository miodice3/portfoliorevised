import Header from './Containers/header.js'
import Masthead from './Containers/masthead.js'
import Portfolio from './Containers/portfolio.js'
import About from './Containers/about.js'
import Footer from './Containers/footer.js'
import ModalConductor from './Modals/modalconductor.js'

import './App.css';
function App() {
  return (
    <div>
      <Header />
      <Masthead />
      <Portfolio />
      <About />
      <Footer />
      {/* <ModalConductor /> */}
    </div>
  );
}

export default App;