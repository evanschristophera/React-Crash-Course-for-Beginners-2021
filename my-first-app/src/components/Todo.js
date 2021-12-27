import { useState } from 'react';
import Modal from



// Custom components should start with an uppercase letter.
//https://youtu.be/Dorf8i6lCuk?t=2936

//props is a javascript object key value pairs
function Todo(props) {
    const [ showModal, setModalIsOpen ] = useState(false); // react hook.  Can only be called directly

    function deleteHandler () {
        setModalIsOpen(true);
    }

    return (
        <div className='card'>
            <h2>
            {/*Javascript expression to be evaluated**/}
            {/*Single line only */}
                {props.text}
            </h2>
            <div className={'actions'}>
                {/*
                Note: no parenthesis on the deleteHandler call.  Parenthesis woudl]
                cause the deleteHandler code to be executed when javascript evaluates
                the code.
                https://youtu.be/Dorf8i6lCuk?t=3844
                */}
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
        </div>);
}

export default Todo;