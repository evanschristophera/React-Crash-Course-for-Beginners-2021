// Custom components should start with an uppercase letter.
//https://youtu.be/Dorf8i6lCuk?t=2936

//props is a javascript object key value pairs
function Todo(props) {
    return (
        <div className='card'>
            <h2>
            {/*Javascript expression to be evaluated**/}
            {/*Single line only */}
                {props.text}
            </h2>
            <div className={'actions'}>
                <button className='btn'>Delete</button>
            </div>
        </div>);
}

export default Todo;