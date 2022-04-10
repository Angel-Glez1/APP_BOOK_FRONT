import { useEffect, useState } from "react"
import { Container } from "../atoms/Container"
import { Title } from "../atoms/Title"
import { BackNavBar } from "../molecules/BackNavBar"
import { IBookService } from "../../domain/services/bookService.interface"
import { IBook } from '../../domain/models/Book';
import { BookCard } from "../molecules/BookCard"


const ListBookViewFactory = (bookService: IBookService) => {

    return function ListBookView() {

        const [books, setBooks] = useState<IBook[]>([])

        useEffect(() => {

            (async () => {

                const data = await bookService.getListAll();
                setBooks(data);

            })();

        }, [])




        return (
            <section>
                <BackNavBar backTo="/" textAnchor="Menu" />

                <Container>
                    <Title>Book List</Title>


                    {
                        books.map(book => (
                            <BookCard key={book.id} {...book} />
                        ))
                    }
                </Container>
            </section>
        )
    }
}





export {
    ListBookViewFactory
}


