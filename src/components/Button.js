import React from 'react';
import './styles/Button.css';


const defaultStyle = { width: 50, backgroundColor: '#4286f4' };
const Button = (props) => {
    const mixedStyle = {
        ...defaultStyle,
        ...props.style
    }
    console.log('default', defaultStyle);
    console.log('user defined', props.style);
    console.log('result', mixedStyle);
    return (
        <button
            className="btn"
        //style={mixedStyle}
        >
            {props.title}
        </button >
    )
}

export default Button;