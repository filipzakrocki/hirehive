import React from "react";
import './Results.css'

// components
import JobEntry from './JobEntry/JobEntry.js'
import RowHeaders from './RowHeaders/RowHeaders.js'

const Results = props => {

  let finalList = props.jobs ? props.jobs : <p>Awaiting data....</p>;

  //category filter
  const categoryFilter =
    props.category && props.jobs
      ? props.jobs.filter(job => props.category === job.category)
      : props.jobs;

  //input filter
  const inputFilter =
    props.inputFilter && props.inputFilter.length > 1
      ? categoryFilter.filter(
          job =>
            job.description.text
              .toLowerCase()
              .includes(props.inputFilter.trim().toLowerCase()) ||
            job.title.toLowerCase().includes(props.inputFilter.trim().toLowerCase())
        )
      : categoryFilter;

  finalList =
    inputFilter.length !== 0 ? (
      inputFilter.map(job => {
        return <JobEntry
        url={job.hostedUrl}
        key={job.id}
        title={job.title}
        stateCode={job.stateCode}
        country={job.country}
        location={job.location}
        category={job.category}/>;
      })
    ) : (
      <h1 className='Results-noResults'>No results found...</h1>
    );

  return (
  <div className='Results__wrapper'>
    <RowHeaders/>
    <ul >{finalList}</ul>
  </div>);
};

export default Results;


