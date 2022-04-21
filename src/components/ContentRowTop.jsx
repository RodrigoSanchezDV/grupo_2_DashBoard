import React from 'react';

import GenresInDb from './UsersInDb';
import ContentRowMovies from './ContentRowProducts';
import NewMovie from './LastProduct';

function ContentRowTop(){
    return(
        <React.Fragment>
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
					<ContentRowMovies />
					<div className="row">
							<NewMovie/>
						<GenresInDb/>	
					</div>
				</div>
        </React.Fragment>
    )
}
export default ContentRowTop;