import React from 'react';
import './Searchbar.css'
import search from url("//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");

import { url } from 'inspector';

const Searchbar = (props) => {
    return (
        <div className='Searchbar'>
            <div className=''>

            </div>
            <input
            className='Searchbar-input'
            type="text"
            placeholder={'Search by keyword, technology or job title'}
            onChange={props.changed}/>
        </div>
    );
}

export default Searchbar;
