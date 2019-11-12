import React from 'react';
import './JobEntry.css'

const JobEntry = (props) => {
    return (
        <li className='JobEntry'>
            <a  className='JobEntry-content__wrapper' href={props.url} target="_blank" rel="noopener noreferrer">
            <div className='JobEntry-title'>{props.title}</div>     
            <div className='JobEntry-category'>{props.category}</div>     
            <div className='JobEntry-location'>{props.location}, {props.country.code === 'US' ? `${props.stateCode}, ${props.country.name}` : props.country.name} <span className='JobEntr-arrow'>></span></div>
            </a>
        </li>
    );
}

export default JobEntry;

// sample job entry
// 0:
// category: "HR"
// country: {name: "United States", code: "US"}
// createdDate: 1526466951
// description: {html: "<p>Supports human resources processes by administe…munication, Teamwork, Microsoft Office Skills</p>", text: "Supports human resources processes by administerin… Communication, Teamwork, Microsoft Office Skills"}
// experience: {type: "EntryLevel", name: "Entry Level"}
// hostedUrl: "https://my.hirehive.io/hirehive-testing-account/jobs/34749/human-resources-assistant-san-francisco"
// id: 34749
// language: {name: "English", code: "en-US"}
// location: "San Francisco"
// publishedDate: 1526466961
// salary: null
// stateCode: "CA"
// title: "Human Resources Assistant"
// type: {type: "FullTime", name: "Full Time"}