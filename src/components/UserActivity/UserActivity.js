import React from 'react';

const UserActivity = (props) => {
  const { activity, _id, date } = props.userActivity;

  return (
    <div>
      <div className="col-md-6">

        <div className="card" style={{ width: "15rem" }}>
          <div>
            <img className="card-img-top" src={require(`../../utilities/images/${activity}.png`)} alt="" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{activity}</h5>
            <h6>{date}</h6>
            <button className="btn btn-danger" onClick={() => { props.deleteActivity(_id) }}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserActivity;




