import { createContext, useState } from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorage';

export const ReadingListContext = createContext()

export function ReadingListProvider ({ children }) {

  const [readingList, setReadingList] = useLocalStorage('readingList', [])

  const addToReadingList = book => {
    const isBookInList = readingList.some(item => item.ISBN === book.ISBN); 

    if (!isBookInList) {
      setReadingList([...readingList, book]);
    } else {
      console.log('El libro ya está en tu lista de lectura.');
    }
  }

  const removeFromReadingList = book => {
    const newReadingList = readingList.filter(item => item.ISBN !== book.ISBN)
    setReadingList(newReadingList)
  }

  const clearReadingList = () => {setReadingList([])}

  return (
    <ReadingListContext.Provider value={{
      readingList,
      addToReadingList,
      clearReadingList,
      removeFromReadingList
    }}
    >
      {children}
    </ReadingListContext.Provider>
  )
}