import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

class Footer extends Component {

    render() {


        return (


            <div>

                <footer className="footerr">


                    <div className="footer-copyright text-center py-3" style={{color:"#1376ff"}}>© 2020 Copyright:
                             <Link to="/welcome/darshan">TodoList.com</Link>
                    </div>

                </footer>


            </div>
        );
    }

}

export default Footer;