import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AddIcon from '@material-ui/icons/Add';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 150,
    },

}));

const AddActivity = () => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();
    const classes = useStyles();
    const onSubmit = data => {
        const eventDetails = { event: data };
        fetch('https://ancient-oasis-10210.herokuapp.com/addActivity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    history.replace("/home");
                }
            })
    };
    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4}>
                        <div>
                            <Link to='/admin'><button className="btn btn-primary"><PeopleOutlineIcon></PeopleOutlineIcon>Volunteer Register List</button></Link><br></br>
                            <Link to='/addActivity'><button className="btn btn-primary mt-3"><AddIcon></AddIcon>Add Event</button></Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} container spacing={2}>
                        <form className="event-form" onSubmit={handleSubmit(onSubmit)}>
                            <h3 style={{ color: 'blue' }}>Add Event</h3>
                            <label htmlFor="eventTitle">Event Title</label>
                            <input className="form-control" name="eventTitle" id="eventTitle" ref={register({ required: true })} />
                            {errors.name && <span className="error">Field is required</span>}

                            <label htmlFor="eventDescription">Event Description</label>
                            <textarea className="form-control" name="eventDescription" id="eventDescription" ref={register({ required: true })} ></textarea>
                            {errors.email && <span className="error">Field is required</span>}

                            <label htmlFor="eventDate">Event Date</label>
                            <input className="form-control" name="eventDate" id="eventDate" type="date" ref={register({ required: true })} />
                            {errors.address && <span className="error">Field is required</span>}
                            <br></br>
                            <label htmlFor="evenImage">Event Image File Name</label>
                            <br></br>
                            <span className="text-success">*Event title and Event Image File Name must be same and image should be in png format</span>
                            <input className="form-control" name="eventImage" id="evenImage" type="text" ref={register({ required: true })} />
                            {errors.address && <span className="error">Field is required</span>}
                            <br></br>

                            <input type="submit" className="btn btn-primary" />
                        </form>

                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AddActivity;