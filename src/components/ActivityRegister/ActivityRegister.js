import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const ActivityRegister = () => {
    const { eventTitle } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        const userActivityDetails = { ...data };
        fetch('https://ancient-oasis-10210.herokuapp.com/addUserActivity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userActivityDetails)
        })
            .then(res => res.json())
            .then(data => {

                if (data) {
                    history.replace("/activities");
                }
            })
    };

    return (
        <div>
            <div className="container">
                <form className="event-form" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Register as a volunteer</h1>

                    <div className="form-group mt-2">
                        <label htmlFor="firstName">Name</label>
                        <input className="form-control" type="text" name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} />

                    </div>
                    <div className="form-group">

                        <label htmlFor="lastName">Email</label>
                        <input className="form-control" type="text" name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Date</label>
                        <input className="form-control" type="date" name="date" ref={register({ required: true })} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Description</label>
                        <input className="form-control" type="text" name="description" ref={register({ required: true })} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Activity</label>
                        <input className="form-control" type="text" name="activity" defaultValue={eventTitle} ref={register({ required: true })} />

                    </div>

                    <input type="submit" className='btn btn-primary' value="Register" />

                </form>
            </div>
        </div>
    );
};

export default ActivityRegister;