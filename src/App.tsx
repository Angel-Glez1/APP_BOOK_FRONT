import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BooksRouter } from './books/router'



const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to={'/book/'}>Add Book</Link>
    </>
  )
}

const App = () => {

  return (
    <BrowserRouter>
      <Routes>


        <Route path='/' element={<Home />} />
        <Route path='/book/*' element={<BooksRouter />} />


      </Routes>
    </BrowserRouter>
  )

}

export default App;