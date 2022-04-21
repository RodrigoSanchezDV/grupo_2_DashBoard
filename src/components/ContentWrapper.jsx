import React from 'react';
import ContentRowTop from './ContentRowTop';
import Movie from './Products';
import Footer from './Footer';
import TopBar from "./TopBar"
function ContentWrapper(){
    return (
        <React.Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <ContentRowTop />
                    <Movie />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;