import React from "react";

import './Search.css'

//components
import Searchbar from './Searchbar/Searchbar'
// input field?
//category buttons

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
    <div className='Search__wrapper'>
      <Searchbar changed={props.filterChangeHandler}/>
      <div>{categoryButtons}</div>
    </div>
  );
};

export default Search;
