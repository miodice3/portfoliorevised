import Header from './Containers/header.js'

import Footer from './Containers/footer.js'

import MainPage from './Components/mainPage.js'
import EmissionsDetail from './Components/emissionsDetail.js'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
function App() {
  return (
    <Router>
    <div>
      <Header />
      <Route exact path='/' component={MainPage} />
      <Route exact path='/emissions' component={EmissionsDetail}/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;