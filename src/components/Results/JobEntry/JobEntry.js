import React from 'react';
import './JobEntry.css'

const JobEntry = (props) => {

    const formattedDate = new Date(props.date * 1000 );
    const UTCstring = formattedDate.toUTCString();

    return (
        <li className='JobEntry'>
            <a  className='JobEntry-content__wrapper' href={props.url} target="_blank" rel="noopener noreferrer">
            <div className='JobEntry-title'>
                <p>{props.title}</p>
                <span className='JobEntry-extra'>
                <p>Type: {props.type}, Experience: {props.experience}</p>
                <p>Posted on: {UTCstring}</p>
                </span>
                </div>     
            <div className='JobEntry-category'>{props.category}</div>     
            <div className='JobEntry-location'>
                <p>{props.location}</p>
                <span className='JobEntry-extra'>
                <p>State/Country: {props.country.code === 'US' ? `${props.stateCode}, ${props.country.name}` : props.country.name}</p>
                </span>
                </div>
                <div className='JobEntry-arrow'>></div>
            </a>
        </li>
    );
}

export default JobEntry;