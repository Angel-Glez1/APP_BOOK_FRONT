import { ReactElement } from "react"


interface IWhenProps {
    children: ReactElement | ReactElement[];
    predicate?: boolean
}

const When = ({ children, predicate }: IWhenProps) => {

    return !predicate ? <></> : <>{children}</>
}
 


export {
    When
}
