import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import dateFilter from '../assets/icons/dateFilter.svg'
import './SideBar_Filters.css'

export function SideBarFilters(props) {
    const [expand, toggle] = useState(false)
    return (
        <div className='Filter'>
            <div className='row'> 
                <h3 className='Filter-title'>{ props.title }</h3>
                <FontAwesomeIcon className='Filter-icon' onClick={ () => { toggle(!expand) } } icon={ (expand) ? faChevronDown : faChevronUp } />
            </div>
            <div hidden={ expand }>
                {(props.title === 'Date')?
                    <div>
                    <img src={dateFilter} alt=''/>
                </div> : <div/>}
                { (props.params) ? (props.params.map((item,i) => {
                    return (
                        <div key={ i } className='Checkbox-container row'>
                            <input  type='checkbox' />
                            <span className='Checkbox-checkmark'></span>
                            <label className='Checkbox-title'>{ item.text }({ item.count })</label>
                        </div>
                    )
                }) ): null}
            </div>
        </div>

    );
}
