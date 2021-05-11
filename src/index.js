import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './Navigation';
import Header from './Header';
import Services from './Services';

class App extends Component{
  render() {
    return(
    <div>
      <Navigation LogoTitle ="React Portfolio"></Navigation>
      <Header title= "Stylish Portfolio" button="Explore"/>
      <Services />
   </div>  

    );
  }
  
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 