import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Showreview = () => {
    const {user} = useAuth();

    const [ showreview, setShowreview] = useState([]);
    useEffect( () => {
        fetch('https://still-refuge-06425.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setShowreview(data))
    }, [])

    return (
        <div>
            {
                showreview.map( review => {
                    return(
                    <div>
                        <img src={user.photoURL} alt="" />
                        <h2>{review?.name}</h2>
                        <h3>{review?.email}</h3>
                        <p>{review.comments}</p>

                    </div>
                        )
                })
            }
        </div>
    );
};

export default Showreview;