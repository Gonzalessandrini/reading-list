import  { useCallback } from 'react';
import { booksData } from './Const/Books';
import { ReadingListProvider } from './Context/readingList';
import { useSearch } from './Hooks/useSearch';
import { useFilters } from './Hooks/useFilters';
import { useLocalStorage } from './Hooks/useLocalStorage';
import debounce from 'lodash';
import { Header } from './Components/Header/Header';
import { BookList } from './Components/BookList/BookList';

function App() {
  const [books, setBooks] =  useLocalStorage('availableBooks', booksData)
  const { search, handleChange, handleSubmit } = useSearch();
  const { filterBooks } = useFilters();
  const filteredBooks = filterBooks(books, search);

  const debouncedFilterBooks = useCallback(
    debounce(() => filterBooks(filteredBooks, search), 300),
    [filteredBooks, search]
  );

  const removeBookFromList = (ISBN) => {
    setBooks(books.filter(book => book.ISBN !== ISBN));
  };

  const addToBookList = (bookToRemove) => {
    setBooks([...books, bookToRemove])
  }

  return (
    <ReadingListProvider>
      <div className='container'>
        <Header handleChange={handleChange} handleSubmit={handleSubmit} search={search} debouncedFilterBooks={debouncedFilterBooks} />
        <BookList 
        books={filteredBooks}
        removeBookFromList={removeBookFromList}
        addToBookList = {addToBookList}
        />
      </div>
    </ReadingListProvider>
  );
}

export default App;
