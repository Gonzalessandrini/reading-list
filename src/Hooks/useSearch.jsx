import { useState, useEffect, useRef, useCallback } from "react"
import { debounce } from "lodash"

export function useSearch() {

    const [search,updateSearch]= useState('')
    const [error,setError]= useState(null)
    const firstInput= useRef(true)

    const handleSubmit = (event, filterBooks, filteredBooks) => {
      event.preventDefault();
      filterBooks(filteredBooks, search);
    };
  
    const handleChange = (event, debouncedFilterBooks) => {
      const newSearch = event.target.value;
      updateSearch(newSearch);
      debouncedFilterBooks(newSearch);
    };

    useEffect(()=>{

      if(firstInput.current){
        firstInput.current= search == ''
        return
      }  

      if (search=='') {
        setError('No se pueden buscar libros vacios')
        return
      }
      
      if (search.length< 3){
        setError('No se puede buscar un libro con menos de 3 caracteres')
        return
      }

      setError(null)
    },[search])
  
    return { search, handleSubmit, handleChange, error }
  }