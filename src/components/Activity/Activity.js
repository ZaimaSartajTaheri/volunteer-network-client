import React from 'react';
import { Link } from 'react-router-dom';
import './Activity.css';

const Activity = ({ event }) => {

    return (
        <div>
            <div className="col-md-3">
                <Link to={"/activityRegister/" + event.event.eventTitle} className="card-link">
                    <div className="card" style={{ width: "15rem" }}>
                        <img className="card-img-top" src={require(`../../utilities/images/${event.event.eventImage}`)} alt="" />
                        <div className="card-body title">
                            <h5 className="card-title">{event.event.eventTitle}</h5>
                        </div>
                    </div>
                </Link>
            </div>
        </div>


    );
};

export default Activity;
