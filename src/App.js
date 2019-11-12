import React, { useState, useEffect } from "react";
import axios from "axios";

//components
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";

import "./App.css";

function App() {
  useEffect(() => {
    async function fetchJobs() {
      const results = await axios.get(
        "https://hirehive-testing-account.hirehive.com/api/v1/jobs"
      );
      const jobs = await results.data.jobs;
      console.log(jobs);
      setJobs(jobs);
    }
    fetchJobs();
  }, []);

  const [jobs, setJobs] = useState();
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <Search
        jobs={jobs}
        filterChangehandle={null}
        categoryChangehandler={null}
      />
      <Results jobs={jobs} filter={filter} category={category} />
    </div>
  );
}

export default App;
