import { Link } from 'react-router-dom';
import styled from 'styled-components'
import * as colors from '../../../styles/base/colors';


const Anchor = styled(Link)`
    color: ${colors.WHITE};
    text-decoration: none;
    font-weight: bold ;

    &::hover{
        text-decoration: underline;
    }

    


`;

export { Anchor }
