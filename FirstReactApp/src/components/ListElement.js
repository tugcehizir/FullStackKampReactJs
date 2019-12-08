import React from 'react'

const ListElement = ({ text = "text" }) => {
    return (
        <>
            <li> Eklenen Eleman:  {text}</li>
        </>
    );
};

export default ListElement;