import React from "react";
import "./CategoryButtons.css";

const categoryButtons = props => {
  let categoryButtons = null;

  // checking for selected category and input to light up the button if matching
  const checkForActivity = category => {
    let active = false;
    if (category === props.category) {
      active = true;
    } else if (
      `#${category.toLowerCase()}` === props.inputFilter.trim().toLowerCase()
    ) {
      active = true;
    }
    return active;
  };

  // mapping unique categories to display as buttons
  if (props.jobs) {
    const categories = props.jobs.map(el => el.category);
    categoryButtons = [...new Set(categories)].map(uniqueCategory => {
      return (
        <button
          key={uniqueCategory}
          className={checkForActivity(uniqueCategory) ? "active" : null}
          onClick={() => props.clicked(uniqueCategory)}
        >
          #{uniqueCategory.toUpperCase()}
        </button>
      );
    });
  }

  return <div className="CategoryButtons__wrapper">{categoryButtons}</div>;
};

export default categoryButtons;
