import React from 'react';
import './CategoryButtons.css'

const CategoryButtons = (props) => {

    let categoryButtons = null;
    // mapping unique categories to display as buttons
    if (props.jobs) {
        const categories = props.jobs.map(el => el.category);
        categoryButtons = [...new Set(categories)].map(uniqueCategory => {
            return (
            <button
            key={uniqueCategory}
            className={props.category === uniqueCategory ? 'active' : null}
            onClick={() => props.clicked(uniqueCategory)}
          >
            #{uniqueCategory.toUpperCase()}
          </button>
            );
        })
    }
    
    return <div className='CategoryButtons__wrapper'>
        {categoryButtons}
    </div>;
}

export default CategoryButtons;
