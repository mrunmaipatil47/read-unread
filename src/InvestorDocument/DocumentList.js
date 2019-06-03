import React, { useState } from 'react';
import { RECORDS } from '../shared/constants'
import unread_icon from '../assets/icons/unread.svg'
import read_icon from '../assets/icons/read.svg'
import './DocumentList.css'
import sortArrows from '../assets/icons/sortArrows.svg'
import filterIcon from '../assets/icons/filterIcon.svg'

export function DocumentList() {
    const [read, mark] = useState(false)
    return (
        <div className='DocumentList'>
            <div className='row DocumentList-Options'>
                <p className='Filters-selected'>No Filters Selected</p>
                <div className='row'>
                    <button disabled>Download</button>
                    <button onClick={ () => { mark(!read) } }>Mark as Read</button>
                </div>
            </div>
            <div className='row DocumentList-Table'>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <img src={ unread_icon } alt='o' />
                            </td>
                            <td>
                                <div className='Checkbox-container row'>
                                    <input type='checkbox' />
                                    <span className='Checkbox-checkmark'></span>
                                </div>
                            </td>
                            <td>
                                <img src={ sortArrows } alt='' />{ ' ' }
                                Date { '  ' }
                                <img src={ filterIcon } alt='' />
                            </td>
                            <td>
                                Account{ '  ' }
                                <img src={ filterIcon } alt='' />
                            </td>
                            <td>
                                Document Name { '  ' }
                            </td>
                            <td>
                                Funds{ '  ' }
                                <img src={ filterIcon } alt='' />
                            </td>
                            <td>
                                Document Type{ '  ' }
                                <img src={ filterIcon } alt='' />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        { RECORDS.map(item => {
                            return <tr>
                                <td>
                                    <img src={ (item.read) ? read_icon : unread_icon } alt='' />
                                </td>
                                <td>
                                    <div className='Checkbox-container row'>
                                        <input type='checkbox' />
                                        <span className='Checkbox-checkmark'></span>
                                    </div>
                                </td>
                                <td>
                                    { item.date }
                                </td>
                                <td>
                                    { item.account }
                                </td>
                                <td>
                                    { item.name }
                                </td>
                                <td>
                                    { item.funds }
                                </td>
                                <td>
                                    { item.type }
                                </td>
                            </tr>
                        }) }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
