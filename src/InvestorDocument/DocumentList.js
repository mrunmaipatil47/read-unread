import React, { useState, useEffect } from 'react';
import { RECORDS } from '../shared/constants'
import unread_icon from '../assets/icons/unread.svg'
import read_icon from '../assets/icons/read.svg'
import './DocumentList.css'
import sortArrows from '../assets/icons/sortArrows.svg'
import filterIcon from '../assets/icons/filterIcon.svg'

export function DocumentList() {
    const [read, setRead] = useState(false)
    const [globalList, setList] = useState(RECORDS.map((item, i) => { return ({ id: i, read: item.read }) }))
    const [selected, mark_selected] = useState([])
    useEffect(() => {
        if (selected.findIndex(item => item.read === true) !== -1)
            setRead(true)
        if (selected.findIndex(item => item.read === false) !== -1)
            setRead(true)
        if (selected.every(item => item.read === true))
            setRead(false)
    }, [read, selected])

    return (
        <div className='DocumentList'>
            <div className='row DocumentList-Options'>
                <p className='Filters-selected'>No Filters Selected</p>
                <div className='row'>
                    <button disabled>Download</button>
                    <button onClick={ () => {
                        setRead(null)
                        if (read === true) {
                            const newArray = globalList.map((record, i) => {
                                if (selected.findIndex(item => item.id === record.id) !== -1) {
                                    let newArray = [...selected]
                                    var index = newArray.findIndex(i => i.id === record.id)
                                    if (index > -1) {
                                        newArray[index].read = read
                                        mark_selected(newArray)
                                    }
                                    return ({
                                        id: record.id,
                                        read: true
                                    })
                                }
                                else
                                    return ({
                                        id: record.id,
                                        read: record.read
                                    })
                            })
                            setList(newArray)
                        }
                        if (read === false) {
                            const newArray = globalList.map(record => {
                                if (selected.findIndex(item => item.id === record.id) !== -1) {
                                    let newArray = [...selected]
                                    var index = newArray.findIndex(i => i.id === record.id)
                                    if (index > -1) {
                                        newArray[index].read = false
                                        mark_selected(newArray)
                                    }
                                    return ({
                                        id: record.id,
                                        read: false
                                    })
                                }
                                else
                                    return ({
                                        id: record.id,
                                        read: record.read
                                    })
                            })

                            setList(newArray)

                        }


                    } }>Mark as { read ? 'Read' : 'Unread' }</button>
                </div>
            </div>
            <div className='row DocumentList-Table'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img src={ unread_icon } alt='o' />
                            </td>
                            <td>
                                <div className='Checkbox-container row'>
                                    <input type='checkbox' checked={selected.length === globalList.length}
                                        onChange={ (e) => {
                                        if (e.target.checked)
                                            mark_selected(RECORDS.map((item, i) => { return ({ id: i, read: globalList[i].read }) }))
                                        if (!e.target.checked)
                                            mark_selected([])
                                    } } />
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
                    
                        { RECORDS.map((item, i) => {
                            return <tr key={ i } id={ i } style={ { fontWeight: (globalList[i].read ? 200 : 500) } }>
                                <td>
                                    <img src={ globalList[i].read ? read_icon : unread_icon } alt='' />
                                </td>
                                <td>
                                    <div className='Checkbox-container row'>
                                        <input id={ i }

                                            checked={ (selected.findIndex(item => item.id === parseInt(i)) !== -1) ? true : false }

                                            onChange={ ({ target }) => {

                                                if (target.checked) {
                                                    mark_selected([...selected, {
                                                        id: parseInt(target.id),
                                                        read: globalList[i].read
                                                    }])
                                                }
                                                if (!target.checked) {
                                                    let newArray = [...selected]
                                                    var index = newArray.findIndex(i => i.id === parseInt(target.id))
                                                    if (index > -1) {
                                                        newArray.splice(index, 1);
                                                        mark_selected(newArray)
                                                    }
                                                }
                                            } }
                                            type='checkbox' />
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
