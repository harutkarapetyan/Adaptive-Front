import React, {MouseEventHandler} from 'react'
type ButtonProps = {
    type: 'button' | 'submit';
    title?: string;
    Style?: string;
    handleClick?: MouseEventHandler < HTMLButtonElement >;
}
export const Button = ({type, title,  Style, handleClick} : ButtonProps) => {
    return (
        <div className='G-button'>
            <button type={type} className={`custom-btn ${Style}`} onClick={handleClick}>
                {title}
            </button>
        </div>
    )
}