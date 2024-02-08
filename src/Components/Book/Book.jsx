import './Book.css'
import { useReadingList } from '../../Hooks/useReadingList'

const Book = ({data, removeBookFromList}) => {

  const {addToReadingList, removeFromReadingList, readingList } = useReadingList()

  const isOnReadingList = readingList.some(book => book.ISBN === data.ISBN);

  const handleReadingListClick = (data) => {
    if (isOnReadingList) {
      removeFromReadingList(data)
    } else {
      addToReadingList(data);
  
      const bookCover = document.getElementById(`book-cover-${data.ISBN}`);
  
      if (bookCover) {
        bookCover.style.animation = 'flyRight 0.5s ease forwards';
  
        bookCover.addEventListener('animationend', () => {

        removeBookFromList(data.ISBN);
        });
      }
    }
  };
  

  return (
<article className='book'>
  <div className='book__cover'>
    <img
      id={`book-cover-${data.ISBN}`}
      className='book__cover-img'
      src={data.cover}
      alt={`Imagen de la portada del libro: ${data.title}`}
    />
  </div>
  <div className='book__details'>
    <h2 className='book__details-title'>
      {data.title}
    </h2>
    <p className='book__details-author'>{data.author.name}</p>
    <div className='book__details-meta'>
      <span className='book__details-genre'>{data.genre}</span>
      <span className='book__details-pages'>{data.pages} pág.</span>
    </div>
  </div>
  <div className='book__options'>
    <button
      className={`book__options-button`}
      onClick={() => { handleReadingListClick(data) }}
    >
    Añadir a la lista
    </button>
  </div>
</article>

  )
}

export default Book