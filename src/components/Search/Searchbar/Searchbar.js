import React from 'react';
import './Searchbar.css'


//fort awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Searchbar = (props) => {
    return (
        <div className='Searchbar__wrapper'>
            <div className={'Searchbar-glass'}>
                <FontAwesomeIcon icon={faSearch}  color='black'/>
            </div>
            <input
            disabled={props.disabled}
            className='Searchbar-input'
            type="text"
            placeholder={'Search by keyword, technology or job title'}
            onChange={props.changed}>
            </input>

        </div>
    );
}

export default Searchbar;
