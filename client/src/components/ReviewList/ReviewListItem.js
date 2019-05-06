import React, {Fragment} from 'react';

function ReviewListItem(props) {
    return (
        <Fragment>
            <div className="col l2"></div>
            <div className="col l8 s12">
                <div className="col l4 s12">
                    <img src={props.img} alt="Participant Profile"/>
                </div>
                <div className="col l8 s12">
                    <h2>{props.displayName}</h2>
                    <h5>Country: {props.Country}</h5>
                    <h5>Rating: {props.rating}</h5>
                    <button className="btn" href="">View Review</button>
                </div>
            </div>
            <div className="col l2"></div>
        </Fragment>
    )
}

export default ReviewListItem;