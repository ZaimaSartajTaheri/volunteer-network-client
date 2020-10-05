import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const SingleUserActivity = (props) => {
    const { _id, name, email, date, activity } = props.userActivity;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td>{activity}</td>
            <td style={{ color: "red" }}><DeleteIcon onClick={() => { props.deleteActivity(_id) }}></DeleteIcon></td>
        </tr>


    );
};

export default SingleUserActivity;
