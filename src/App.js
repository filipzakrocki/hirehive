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
      const results = await axios.get(
        "https://hirehive-testing-account.hirehive.com/api/v1/jobs"
      );
      const jobs = await results.data.jobs;
      console.log(jobs); // ----------------------------------------------------
      setJobs(jobs);
    }
    fetchJobs();
  }, []);

  //state with react hooks
  const [jobs, setJobs] = useState();
  const [inputFilter, setinputFilter] = useState();
  const [category, setCategory] = useState();

  //input handlers for 'search' component
  const filterChangeHandler = input => {
    setinputFilter(input);
  };
  const categoryChangeHandler = uniqueCategory => {
    if (category !== uniqueCategory) {
      setCategory(uniqueCategory);
    } else {
      setCategory("");
    }
  };

  let results = jobs ? (
    <Results jobs={jobs} inputFilter={inputFilter} category={category} />
  ) : (
    <Spinner />
  );

  return (
    <div className="App">
      <Search
        jobs={jobs}
        filterChangeHandler={e => filterChangeHandler(e.target.value)}
        categoryChangeHandler={categoryChangeHandler}
      />
      {results}
    </div>
  );
}

export default App;
