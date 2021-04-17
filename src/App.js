import Header from './Containers/header.js'

import Footer from './Containers/footer.js'

import MainPage from './Components/mainPage.js'
import EmissionsProjectPage from './Components/emissionsProjectPage.js'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
function App() {
  return (
    <Router>
    <div>
      <Header />
      <MainPage />
      {/* <Route exact path='/' component={MainPage} /> */}
      {/* <Route exact path='/emissions' component={EmissionsProjectPage}/> */}
      {/* add new routes for other projects */}
      <Footer />
    </div>
    </Router>
  );
}

export default App;