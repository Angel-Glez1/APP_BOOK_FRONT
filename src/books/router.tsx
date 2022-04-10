import { Routes, Route } from 'react-router-dom';
import { bookMemoryService } from './domain/services/bookMemoryService';
import { ListBookViewFactory } from './ui/views/ListBookView';
import { RegisterBookViewFactory } from './ui/views/RegisterBookView';



const RegisterBookView = RegisterBookViewFactory(bookMemoryService())
const ListBookView = ListBookViewFactory(bookMemoryService())

const BooksRouter = () => {

    return (
        <Routes>

            <Route path='/' element={<ListBookView />} />
            <Route path='/add' element={<RegisterBookView />} />

        </Routes>
    )
}


export { BooksRouter }