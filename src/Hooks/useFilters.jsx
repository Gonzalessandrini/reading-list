import { useContext, useState } from 'react';
import { FiltersContext } from '../Context/filters';

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterBooks = (books, searchTerm = '') => {
    const searchTermLower = searchTerm.toLowerCase();
    return books.filter(book => {
      return book.title.toLowerCase().includes(searchTermLower) &&
        book.pages >= filters.pages &&
        (filters.genre === 'all' || book.genre === filters.genre);
    });
  }


  return { filters, filterBooks, setFilters };
}
