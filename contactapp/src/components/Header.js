// rafce : React Arrow Function Component Export
// This version of code using destructuring assignment without passing the entire props object

import React from 'react'

const Header = ({ toogleModal, nbOfContacts }) => {
  return (
    <header className='header'>
        <div className='container'>
            <h3>Contact List ({nbOfContacts})</h3>
            <button onClick={() => toogleModal(true)} className='btn'>
                <i className= 'bi bi-plus-quare'></i> Add New Contact
            </button>
        </div>
    </header>
  )
}

export default Header