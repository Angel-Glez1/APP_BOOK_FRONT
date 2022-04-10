import { Anchor } from "../atoms/Anchor"
import { NavBar } from "../atoms/NavBar"


interface IBackNavBarProps {
    backTo: string;
    textAnchor?: string;
}


const BackNavBar = ({ backTo, textAnchor = 'Back' }: IBackNavBarProps) => {
    
    return (
        <NavBar>
            <Anchor to={backTo}>
                {textAnchor}
            </Anchor>
        </NavBar>
    )
}


export {
    BackNavBar
}