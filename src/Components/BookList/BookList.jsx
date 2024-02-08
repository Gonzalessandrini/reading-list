import Book from "../Book/Book";
import { ReadingList } from "../ReadingList/ReadingList";
import './BookList.css'; 
import { useReadingList } from "../../Hooks/useReadingList";

export function BookList ({books, removeBookFromList, addToBookList}) {
    const { readingList } = useReadingList();
    return (
        <div className="books-list">
            <div className="books-section">
              <h3>Libros disponibles ({books.length})</h3>
              <ul className="books-container">
                {books.map(book => (
                    <li className='books__element' key={book.ISBN}>
                      <Book data={book} removeBookFromList={removeBookFromList} />
                    </li>
                ))}
              </ul>
            </div>
            <div className="reading-list-section">
              <h3>Lista de lectura ({readingList.length})</h3>
              <ReadingList addToBookList={addToBookList} />
            </div>
        </div>
    );
}