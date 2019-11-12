import React from "react";

import './Search.css'

//components
import Searchbar from './Searchbar/Searchbar'
import CategoryButtons from './CategoryButtons/CategoryButtons'
//category buttons

const Search = props => {

  return (
    <div className='Search__wrapper'>
      <Searchbar changed={props.filterChangeHandler}/>
      <CategoryButtons category={props.category} clicked={props.categoryChangeHandler} jobs={props.jobs}/>
    </div>
  );
};

export default Search;
