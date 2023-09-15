import {Card as Basecard} from 'antd';
import {ReactNode} from 'react';

interface Props{
    title?: string;
    children: ReactNode;
}
const Card = ({title,children}:Props) =>{

    return(
        <Basecard title={title} style={{width:1000}}>
            {children}
        </Basecard>
    )
}

export default Card;