import React, {Component} from 'react';
import './Header.css';

const myStyles = {
    backgroundImage: 'url(./images/images.jpg)',
    height: '80vh',
    backgroundSize: 'Cover'

}


class Header extends Component {
    
    render(){
        return (
            <header style = {myStyles}>
                
                <h1>{this.props.title}</h1>
                <p>This is Som Safavi's Portfolio</p> 
                <a href="#button">{this.props.button}</a>
            

            </header>

            


        );
    }

    

}

export default Header;