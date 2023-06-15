import React from 'react';
// import './card.css';

const card = ({ name, email, id }) => {
    // const { name, email, id } = props;
    return (
        // <h1>Robot Frindly</h1>
        // <div>
        //     <h1>Robot Frindly</h1>
        // </div>
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200X200`} />
            <div>
                {/* call the api */}
                {/* <h2>{props.name}</h2> */}
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default card;