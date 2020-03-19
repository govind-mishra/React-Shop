import React, { Component } from 'react'

class Default extends Component {
    render() {
        console.log(this.props);
        return (
            
            <div className="container">
                 <div className="row">
                     <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                         <h1 className="display-3">404</h1>
                         <h1>Error</h1>
                         <h2>Page Not found</h2>
                         <h3>Tech Requested Url 
                             <span className="text-danger mx-auto">{this.props.location.pathname}</span>{" "}was not found
                         </h3>
                     </div>
                 </div>
            </div>
        )
    }
}

export default Default
