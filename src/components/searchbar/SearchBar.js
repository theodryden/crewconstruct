import React from 'react'
import './SearchBar.css'
import SearchButton from '../buttons/searchbutton/SearchButton'

const SearchBar = () => {
  return (
    <div className='searchbar-container'>
      <input placeholder='Enter industry keywords'></input>
      <SearchButton/>
    </div>
  )
}

export default SearchBar
