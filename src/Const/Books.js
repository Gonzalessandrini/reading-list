import books from '../Mockup/Books.json'
let booksArray = books.library
if (booksArray.length > 0) {
  booksArray = booksArray.map((item) => item.book)
}

export const booksData = booksArray