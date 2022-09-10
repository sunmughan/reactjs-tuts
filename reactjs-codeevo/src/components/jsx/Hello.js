// CREATING REACT COMPONENT WITHOUT JSX

import React from "react"

const Hello = () => {
    // JSX SYNTAX

    // return (
    //     <h3 id='peter' className='dummyClass'>Namaste peter!!!</h3>
    // );

    // WITHOUT JSX

    // return React.createElement('div', null, '<h3>Namaste peter!!!</h3>');

    return React.createElement('div', { id: 'peter', className: 'dummyClass' }, React.createElement('h3', null, 'Namaste peter!!!'));

}

export default Hello