import React, {Component} from 'react';
import './Services.css'

class Services extends Component {
    render(){
        return(
            <div className = "services">
                <h3>
                    About Me

                </h3>
                <h2>
                    My Name is Som Safavi, and I am currently enrolled in the 
                    Full Stack bootcamp UPENN. I played colled soccer at Saint Francis
                    University, as well as attended RPI, and UPENN. Click link below to
                    check out my different projects.


                </h2>
                <a href="https://github.com/somisalami12/PasswordGenerator">Password Generator</a>
                <a href="https://github.com/somisalami12/dayplanner">Day Planner</a>
                <a href="https://github.com/somisalami12/readmegenerator">ReadMe Generator</a>
                <a href="https://github.com/PeterMoDavis/fung-id">Fung-ID</a>

            </div>



        );
    }
}

export default Services;