import React from "react";

//components
// job row
// input field?

const Search = props => {
  // mapping unique categories to display as buttons
  const categories = props.jobs ? props.jobs.map(el => el.category) : null;
  let categoryButtons = categories
    ? [...new Set(categories)].map(category => {
        return (
          <button
            key={category}
            onClick={() => props.categoryChangeHandler(category)}
          >
            #{category.toUpperCase()}
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
      {categoryButtons}
    </div>
  );
};

export default Search;
