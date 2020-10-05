import React, { useEffect, useState } from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import SingleUserActivity from '../SingleUserActivity/SingleUserActivity';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 150,
  },

}));

const Admin = () => {
  const classes = useStyles();
  const [userActivities, setUserActivities] = useState([]);

  useEffect(() => {
    fetch('https://ancient-oasis-10210.herokuapp.com/usersActivities')
      .then(res => res.json())
      .then(data => setUserActivities(data))
  }, [])
  const deleteActivity = (id) => {
    fetch(`https://ancient-oasis-10210.herokuapp.com/usersActivities/delete/${id}`, {
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
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email_ID</th>
                  <th scope="col">Registrating Date</th>
                  <th scope="col">Volunteer List</th>
                  <th scope="col">Action</th>

                </tr>
              </thead>
              <tbody>
                {
                  userActivities.map(userActivity => <SingleUserActivity deleteActivity={deleteActivity} userActivity={userActivity}></SingleUserActivity>)
                }
              </tbody>
            </table>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Admin;