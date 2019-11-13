import React, { useState, useEffect } from "react";
import axios from "axios";

//components
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import Spinner from "./components/Spinner/Spinner";

import "./App.css";

function App() {

  // hook for API data fetching once when component is rendered
  useEffect(() => {
    async function fetchJobs() {
      try {
        const results = await axios.get(
        "https://hirehive-testing-account.hirehive.com/api/v1/jobs");
        const jobs = await results.data.jobs;
        setJobs(jobs);
      } catch(error) {
        setError(error.message);
      }
    }
    fetchJobs();
  }, []);

  //state with react hooks
  const [jobs, setJobs] = useState();
  const [inputFilter, setinputFilter] = useState();
  const [category, setCategory] = useState();
  const [error, setError] = useState();


  //input handler for 'search' component
  const filterChangeHandler = input => {
    setinputFilter(input);
  };

  //category handler for 'search' component
  const categoryChangeHandler = uniqueCategory => {
    if (category !== uniqueCategory) {
      setCategory(uniqueCategory);
    } else {
      setCategory();
    }
  };

  //error message for errors, spinner for data fetching
  let results = null;
  if (error) {
    results = <h1 className='App-error'>{error}</h1>;
  } else if (jobs) {
    results = <Results error={error} jobs={jobs} inputFilter={inputFilter} category={category} />
  } else {
    results = <Spinner />
  }

  return (
    <div className="App">
      <Search
        jobs={jobs}
        disabled={error}
        category={category}
        filterChangeHandler={e => filterChangeHandler(e.target.value)}
        categoryChangeHandler={categoryChangeHandler}
      />
      {results}
    </div>
  );
}

export default App;
