import React from 'react';
import { SideBarFilters } from './SideBar_Filters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {FILTERS} from '../shared/constants'
import './SideBar.css'

export function SideBar() {
    // Declare a new state variable, which we'll call "count"
    return (
        <div className='SideBar'>
            <div className='Search-wrapper'>
                <input className='SearchBar' type='text' placeholder='Search documents' />
                <span><FontAwesomeIcon className='Search-icon' icon={ faSearch } /></span>
            </div>
            <hr />
            { FILTERS.map(item => <SideBarFilters title={ item.title } params={item.params } />)}
        </div>
    );
}
