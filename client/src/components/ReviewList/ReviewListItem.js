import React, {Fragment} from 'react';
import {Rating} from 'semantic-ui-react';

function ReviewListItem(props) {
    console.log(props.data);
    console.log(props.data.img);
    return (
        <Fragment>
            <div className="col l2"></div>
            <div className="col l8 s12">
                <div className="col l4 s12">
                    <img src={props.data.img} alt={props.data.displayName}/>
                </div>
                <div className="col l8 s12">
                    <h2>{props.data.displayName}</h2>
                    <h5>Country: {props.data.country}</h5>
                    <h5>Program: {props.data.program}
                    </h5>
                    <h5>Organizer: {props.data.tripOrg}</h5>
                    <h5>Rating:
                        <Rating maxRating={5} disabled="true" rating={props.data.rating}/></h5>
                    <a className="btn" href={`/review/${props.data._id}`}>View Review</a>
                </div>
            </div>
            <div className="col l2"></div>
        </Fragment>
    )
}

export default ReviewListItem;
