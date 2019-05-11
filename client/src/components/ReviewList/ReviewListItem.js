import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Rating} from 'semantic-ui-react';

function ReviewListItem(props) {
    return (
        <Fragment>
            <div className="row  review__list__item">
                <div className="col l5 s12 center-align">
                    <img
                        className="review-list__img review-list__img2"
                        src={props.data.img
                        ? props.data.img
                        : `https://ui-avatars.com/api/?name=${props.data.displayName}&size=350&background=d37e34&color=384269`}
                        alt={props.data.displayName}/>

                </div>

                <div className="col l6 s12 review-list__text">
                    <h2>{props.data.displayName}</h2>
                    <h5>
                        <span className="category">Country:
                        </span>
                        &nbsp; {props.data.country}</h5>
                    <h5>
                        <span className="category">Program:
                        </span>
                        &nbsp; {props.data.program}
                    </h5>
                    <h5>
                        <span className="category">Organizer:
                        </span>
                        &nbsp; {props.data.tripOrg}</h5>
                    <h5>
                        <span className="category">Rating:</span>
                        &nbsp;
                        <Rating maxRating={5} disabled={true} rating={props.data.rating}/></h5>
                    <Link className="btn review__button" to={`/review/${props.data._id}`}>View Review</Link>
                </div>
            </div>

        </Fragment>
    )
}

export default ReviewListItem;
