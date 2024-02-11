import React from 'react';
import { Filters } from '../Filters/Filters';
import { SearchBar } from '../SearchBar/SearchBar';
import './Header.css';

export function Header({ handleChange, handleSubmit, search, debouncedFilterBooks }) {

  return (
    <header className="header-container">
      <h1 className="header-title">Reading-List 📚</h1>
      <section className='header-filters'>
        <div className='search-container'>
          <SearchBar
            onSubmit={(e) => handleSubmit(e, filterBooks, filteredBooks)}
            onChange={(e) => handleChange(e, debouncedFilterBooks)}
            value={search}
            placeholder='Buscar por título...'
          />
        </div>
        <div className='filters-container'>
            <Filters/>
        </div>

        
      </section>
    </header>
  )
}
