import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';

const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://ancient-oasis-10210.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);

    return (
        <div className="container">
            <div className="row">
                {
                    events.map(event => <Activity key={event._id} event={event}></Activity>)
                }

            </div>


        </div>

    );
};

export default Home;