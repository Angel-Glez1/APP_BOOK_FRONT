import styled from "styled-components";

export interface IAlignContentProps {
    aling?: 'center' | 'end' | 'start'
}

const AlignContent = styled.div<IAlignContentProps>`
    display: flex;
    gap: 1rem;
    justify-content: ${props => props?.aling || 'start'};
    margin-bottom: 1rem;
`;

export {
    AlignContent
}