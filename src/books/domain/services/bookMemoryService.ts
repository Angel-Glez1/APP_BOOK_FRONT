import cuid from 'cuid';
import { IBook } from '../models/Book';
import { IBookService } from './bookService.interface';

// Factory fuction -> toda aquella funtion que me permita crear un objeto.




const bookMemoryService = (): IBookService => {
    const books: IBook[] = [
        { id: cuid(), name: 'Harry Potter', authorName: 'JK' },
        { id: cuid(), name: 'Crepusculo', authorName: 'VOP' },
        { id: cuid(), name: 'Spider-man', authorName: 'Marvel' },
    ]


    const registerBook = (book: IBook): Promise<IBook> => {

        const newBook = { ...book, id: cuid() }
        books.push(newBook)
        
        return Promise.resolve(newBook);
    }

    const getListAll = (): Promise<IBook[]> => {
        return Promise.resolve(books)
    }

    return {
        registerBook,
        getListAll
    }

}








export {
    bookMemoryService,
}


