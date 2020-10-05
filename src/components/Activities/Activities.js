import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import UserActivity from '../UserActivity/UserActivity';

const Activities = () => {
    const [userActivities, setUserActivities] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://ancient-oasis-10210.herokuapp.com/activities?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setUserActivities(data))
    }, [])

    const deleteActivity = (id) => {
        fetch(`https://ancient-oasis-10210.herokuapp.com/activities/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    const remainingActivities = userActivities.filter(activity => activity._id !== id);
                    setUserActivities(remainingActivities);
                }
            })
    }

    return (
        <div className="container">
            <h3>You have: {userActivities.length} activities</h3>
            <div className="row">

                {
                    userActivities.map(userActivity => <UserActivity deleteActivity={deleteActivity} userActivity={userActivity}></UserActivity>)
                }

            </div>
            <br></br>
        </div>

    );
};

export default Activities;