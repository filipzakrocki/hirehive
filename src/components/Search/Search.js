import React from "react";

//components
// job row
// input field?

const Search = props => {
  // mapping unique categories to display as buttons
  const categories = props.jobs ? props.jobs.map(el => el.category) : null;
  const categoryButtons = categories
    ? [...new Set(categories)].map(uniqueCategory => {
        return (
          <button
            key={uniqueCategory}
            active="true"
            onClick={() => props.categoryChangeHandler(uniqueCategory)}
          >
            #{uniqueCategory.toUpperCase()}
          </button>
        );
      })
    : null;

  return (
    <div>
      <input
        type="text"
        onChange={e => props.filterChangeHandler(e.target.value)}
      ></input>
      <div>{categoryButtons}</div>
    </div>
  );
};

export default Search;
