import React, {Component, Fragment} from 'react';
import ReviewListItem from './../components/ReviewList/ReviewListItem';

class ReviewList extends Component {
    componentDidMount() {}

    state = {
        img: '',
        displayName: '',
        country: '',
        tripOrg: '',
        rating: '',
        review: '',
        _id: ''
    }

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