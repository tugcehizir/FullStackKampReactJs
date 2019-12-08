import React from 'react';

const Button = ({ title = 'Button', handleOnClick }) => { //Varsayılan olarak title parametresine Button verildi.
    return (<button onClick={handleOnClick}>{title}</button>);
};

export default Button;