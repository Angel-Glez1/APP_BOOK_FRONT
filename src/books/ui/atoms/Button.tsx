import styled from 'styled-components';
import * as colors from '../../../styles/base/colors';

export enum ButtonVariant {
    PRIMARY,
    SECONDARY,
}

interface IButtonProps {
    variant?: ButtonVariant;
}

const Button = styled.button<IButtonProps>`
    background-color: ${props => backgroundColor(props.variant)};
    border: none;
    color: ${colors.WHITE};
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    
`;

function backgroundColor(variant: ButtonVariant = ButtonVariant.PRIMARY) {
    if (variant === ButtonVariant.SECONDARY) {
        return '#0F0F0F';
    }
    return colors.PRIMARY_BLUE;
}

export {
    Button
}
