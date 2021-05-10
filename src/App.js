import React from 'react';
import './body.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'; 
import Footer from './Footer'; 
import Body from './body.js';

class App extends React.Component {
  
  render() {
    return (
     <div className="maincontainer">
      <Header></Header>
       <Body></Body>
       <div className="footer">
       <Footer></Footer>
       </div>
    </div>
   )
  };
}
export default App;
