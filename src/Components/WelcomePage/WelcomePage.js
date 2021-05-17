
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class WelcomePage extends Component {

    render(){


        return(


        <div className="d-flex justify-content-center" style={{marginTop:"200px"}}>
            
            
            
            <h3 style={{color:"#0074B1"}}>Hello {this.props.match.params.name}! Manage your todos <Link to="/todos" style={{textDecoration:"underline"}}>here</Link> </h3></div>
        );
    }

}

export default WelcomePage;