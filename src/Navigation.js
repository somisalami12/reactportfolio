import React, {Component} from "react";
import './Navigation.css';

class Navigation extends Component{
    render(){
        const sections = ['HomePage', 'Services', 'About','Portfolio','Contact'];
        const navLinks = sections.map( section => {
            return(
                <li><a href={'#' + section}>{section}</a></li>

                
            )

        });
        return(
            <nav>
                <h2 className="Logo">Som Safavi</h2>

                <ul>
                    {navLinks}
                </ul>
            </nav>

            

        );
    }
}



export default Navigation;


