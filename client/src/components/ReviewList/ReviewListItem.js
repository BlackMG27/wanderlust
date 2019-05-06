import React, { Fragment } from 'react';

function ReviewListItem(props) {
    return (
        <Fragment>
            <div className="col l2"></div>
            <div className="col l8 s12">
                <div className="col l4 s12">
                    <img />
                </div>
                <div className="col l8 s12">
                    <h2>{props.displayName}</h2>
                    <h3>Country: {props.Country}</h3>
                    <h3>Rating: {props.rating}</h3>
                    <button className="btn">View Review</button>
                </div>
            </div>
            <div className="col l2"></div>
        </Fragment>
    )
}

export default ReviewListItem;


