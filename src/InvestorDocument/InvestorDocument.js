import React from 'react';
import { SideBar } from './SideBar'
import { DocumentList } from './DocumentList'
import './InvestorDocument.css'

export function InvestorDocument() {
  // Declare a new state variable, which we'll call "count"

  return (

    <div className='Card'>
      <div className='row'>
        <h2 className='Card-Title'>Investor Documents</h2>
      </div>
      <div className='row'>
        <SideBar />
        <DocumentList />
      </div>
    </div>
  );
}
