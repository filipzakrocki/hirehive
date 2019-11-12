import React from "react";

const Search = props => {
  const categories = props.jobs ? props.jobs.map(el => el.category) : null;
  let categoryButtons = categories
    ? [...new Set(categories)].map(category => {
        return (
          <button
            key={category}
            onClick={() => props.categoryChangeHandler(category)}
          >
            #{category}
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
