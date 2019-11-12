import React from "react";

const Results = props => {
  const list = props.jobs ? props.jobs.map(job => <li>{job.title}</li>) : null;

  return <ul>{list}</ul>;
};

export default Results;
