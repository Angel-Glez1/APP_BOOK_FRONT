import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../atoms/Button';
import { Container } from '../atoms/Container';
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';
import { BackNavBar } from '../molecules/BackNavBar';
import { When } from '../components/When';
import { Text } from '../atoms/Text';
import { IBookService } from '../../domain/services/bookService.interface';
import { AlignContent } from '../atoms/AlignContent';






const RegisterBookViewFactory = (bookService : IBookService) => {

    
    
    return function RegisterBookView() {
        
        const navigate = useNavigate();
        const { search } = useLocation();

        const { success } = queryString.parse(search, { parseBooleans: true });


        const handleSubmit = async (event: any) => {
            event.preventDefault();

            const { bookName, bookAuthor } = event.target;

            // TODO: Fetch API
            await bookService.registerBook({ name: bookName.value, authorName: bookAuthor.value });

            navigate('/book?success=true');
        }

        
        return (
            <main>

                <BackNavBar backTo='/' />

                <Container>


                    <When predicate={Boolean(!success)}>
                        <h2>Register Book</h2>
                        <form onSubmit={handleSubmit} >
                            <Label htmlFor="bookName">Nombre</Label>
                            <Input type="text" name="bookName" id="bookName" required />

                            <Label htmlFor="bookAuthor">Author</Label>
                            <Input type="text" name="bookAuthor" id="bookAuthor" required />

                            <Button>Registro</Button>
                        </form>
                    </When>

                    <When predicate={Boolean(success)}>

                        <AlignContent aling='center' >
                            <Text>Success</Text>
                        </AlignContent>

                        <AlignContent aling='center' >
                            <Button onClick={() => navigate('/')}> Okey Boomer </Button>
                        </AlignContent>

                    </When>


                </Container>
            </main >
        )

    }
}

export {
    RegisterBookViewFactory
}