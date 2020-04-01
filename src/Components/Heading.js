import React from 'react';

function Heading() {
    return (
        <React.Fragment>
            <div className="container justify-content-center">
                <div className="row justify-content-center">
                    <header><h3>Pizza Builder</h3></header>
                </div>
                <div className="row justify-content-center">
                    <p>Here you can build your pizza using the builder with the ingredients provided.</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Heading;