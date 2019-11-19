import React, { useState, useEffect } from "react";
import axios from "axios";

//components
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import Spinner from "./components/UI/Spinner/Spinner";

import "./App.css";

function App() {
  // useEffect hook for API data fetching once when component is rendered
  useEffect(() => {
    async function fetchJobs() {
      try {
        const results = await axios.get(
          "https://hirehive-testing-account.hirehive.com/api/v1/jobs"
        );
        const jobs = await results.data.jobs;
        setJobs(jobs);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    }
    fetchJobs();
  }, []);

  //state with react hooks
  const [jobs, setJobs] = useState();
  const [inputFilter, setinputFilter] = useState("");
  const [category, setCategory] = useState();
  const [error, setError] = useState();

  //input handler for 'search' component
  const filterChangeHandler = input => {
    setinputFilter(input);
  };

  //category handler for 'search' component's Category buttons
  const categoryChangeHandler = uniqueCategory => {
    if (category !== uniqueCategory) {
      setCategory(uniqueCategory);
    } else {
      setCategory();
    }
  };

  //error message for errors, spinner for data fetching
  let resultsComponent = null;
  if (error) {
    resultsComponent = <h1 className="App-error">{error}</h1>;
  } else if (jobs) {
    resultsComponent = (
      <Results jobs={jobs} inputFilter={inputFilter} category={category} />
    );
  } else {
    resultsComponent = <Spinner />;
  }

  return (
    <div className="App">
      <Search
        jobs={jobs}
        disabled={error}
        category={category}
        inputFilter={inputFilter}
        filterChangeHandler={e => filterChangeHandler(e.target.value)}
        categoryChangeHandler={categoryChangeHandler}
      />
      {resultsComponent}
    </div>
  );
}

export default App;
