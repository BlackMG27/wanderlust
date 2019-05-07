import React, {Fragment} from 'react';
import {Rating} from 'semantic-ui-react';

function ReviewListItem(props) {
    console.log(props.data);
    console.log(props.data.img);
    return (
        <Fragment>
            <div className="row">
                <div className="col l10 s12 review__list__item">
                    <img
                        className="review-list__img"
                        src={props.data.img}
                        alt={props.data.displayName}/>

                    <div className="review-list__text">
                        <h2>{props.data.displayName}</h2>
                        <h5>Country: {props.data.country}</h5>
                        <h5>Program: {props.data.program}
                        </h5>
                        <h5>Organizer: {props.data.tripOrg}</h5>
                        <h5>Rating:
                            <Rating maxRating={5} disabled="true" rating={props.data.rating}/></h5>
                        <a className="btn review__button" href={`/review/${props.data._id}`}>View Review</a>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default ReviewListItem;
