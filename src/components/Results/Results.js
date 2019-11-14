import React from "react";
import "./Results.css";

// components
import JobEntry from "./JobEntry/JobEntry.js";
import RowHeaders from "./RowHeaders/RowHeaders.js";

const Results = props => {
  let finalList = props.jobs ? props.jobs : null;

  //category filter
  const categoryFilter =
    props.category && props.jobs
      ? props.jobs.filter(job => props.category === job.category)
      : props.jobs;

  //input in lower case without spaces before or after
  const input = props.inputFilter.trim().toLowerCase();

  //input filter
  const inputFilter =
    props.inputFilter && props.inputFilter.length > 1
      ? categoryFilter.filter(
          job =>
            job.description.text.toLowerCase().includes(input) ||
            job.title.toLowerCase().includes(input) ||
            job.location.toLowerCase().includes(input) ||
            job.country.name.toLowerCase().includes(input) ||
            `#${job.category}`.toLowerCase().includes(input)
        )
      : categoryFilter;

  finalList =
    inputFilter.length !== 0 ? (
      inputFilter.map(job => {
        return (
          <JobEntry
            url={job.hostedUrl}
            key={job.id}
            title={job.title}
            stateCode={job.stateCode}
            country={job.country}
            type={job.type.name}
            date={job.publishedDate}
            experience={job.experience.name}
            location={job.location}
            category={job.category}
          />
        );
      })
    ) : (
      <h1 className="Results-noResults">No results found... Try again!</h1>
    );

  return (
    <div className="Results__wrapper">
      <RowHeaders />
      <ul>{finalList}</ul>
    </div>
  );
};

export default Results;
