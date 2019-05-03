import React, {Component, Fragment} from 'react';
import ReviewListItem from './../components/ReviewList/ReviewListItem';

class ReviewList extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <ReviewListItem/>
                </div>
            </Fragment>
        )
    }
}

export default ReviewList