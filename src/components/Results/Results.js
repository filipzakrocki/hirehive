import React from "react";

// components
// job row
//

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
              .includes(props.inputFilter.trim()) ||
            job.title.toLowerCase().includes(props.inputFilter.trim())
        )
      : categoryFilter;

  finalList =
    inputFilter.length !== 0 ? (
      inputFilter.map(job => {
        return <li key={job.id}>{job.title}</li>;
      })
    ) : (
      <p>No results found...</p>
    );

  return <ul>{finalList}</ul>;
};

export default Results;

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
