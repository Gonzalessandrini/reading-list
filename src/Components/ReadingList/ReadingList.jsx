import './ReadingList.css'
import { useReadingList } from '../../Hooks/useReadingList'

export function ReadingList({addToBookList}) {
    const { readingList, removeFromReadingList } = useReadingList();

    return (
        <>  
            <aside className='reading-list'>
                {readingList.length > 0 ? ( 
                    <ul>
                        {readingList.map((book) => (
                            <li key={book.ISBN}> 
                                <img
                                    src={book.cover}
                                    alt={book.title}
                                    className="book-image"
                                />
                                <div>
                                    <strong>{book.title}</strong>
                                    <p>{book.genre}</p> {/* Añadido el género aquí */}
                                </div>
                                <button 
                                    className="remove-button"
                                    onClick={() => {
                                        removeFromReadingList(book);
                                        addToBookList(book);
                                    }} 
                                >
                                    ❌
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay libros en tu lista de lectura.</p> 
                )}
            </aside>
        </>
    );
}
