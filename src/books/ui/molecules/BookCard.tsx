import styled from 'styled-components';

import { IBook } from '../../domain/models/Book';
import { AlignContent } from '../atoms/AlignContent';


const BookCover = styled.img`
    width: 100px;
    height: 100px;
    background-color: gray;
`;




const BookCard = ({ name, authorName }: IBook) => {
    return (
        <AlignContent >
            <BookCover />

            <div>
                <h3>{name}</h3>
                <small>{authorName}</small>
            </div>
        </AlignContent>
    )
}


export {
    BookCard
}