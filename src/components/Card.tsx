import React, {FC, useState} from 'react';


export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}


interface CardProps {
    width?: string,
    height?: string,
    variant: CardVariant,
    onClick: (num: number) => void,
    children?: React.ReactChild | React.ReactNode
}


const Card: FC<CardProps> = ({
                                 width,
                                 height,
                                 variant,
                                 onClick,
                                 children
                             }) => {
    const [state, setState] = useState(0);
    return (
        <div onClick={() => onClick(state)} style={{
            width, height,
            border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'lightgrey' : ''
        }}>
            {children}
        </div>
    );
};

export default Card;