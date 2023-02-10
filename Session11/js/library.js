//From the library object
//1-> Get the number of books that are being read
//2-> Get the authors list
//3-> Get a list with all the books



let library = [{
    author: "Robert Greene",
    title: "The Art of Seduction",
    readingStatus: true
},
{
    author: "Napoleon Hills",
    title: "Think and Grow Rich",
    readingStatus: false
},
{
    author: "Paulo Coehlo",
    title: "The Alchemist",
    readingStatus: true
}]

const getBookInfo = (bookCollection)=>{
    let bookInfo = {}
    let bookAccumulator = 0; //Add 1 when reading status is true
    let bookList = []
    let authorsList = []
    bookCollection.forEach((book, index) => { 
        bookList.push(book.title)
        bookInfo.authors = authorsList
        bookInfo.booksList = bookList
        authorsList.push(book.author)
        if(book.readingStatus === true){
            bookAccumulator += 1
            bookInfo.readingInProgress = bookAccumulator
        }
    }
    );
    console.log(`You are reading ${bookInfo.readingInProgress} books`)
    console.log(`Books Available: ${bookInfo.booksList} `)
    console.log(`Authors available: ${bookInfo.authors}`)
}

getBookInfo(library);