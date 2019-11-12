import React from 'react';
import './Searchbar.css'
import {searchIcon} from '../../../assets/search-solid.png'

import { url } from 'inspector';

const Searchbar = (props) => {
    return (
        <div className='Searchbar'>
            <input
            className='Searchbar-input'
            type="text"
            placeholder={'Search by keyword, technology or job title'}
            onChange={props.changed}/>
        </div>
    );
}

export default Searchbar;
