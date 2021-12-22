function App() {
    return (
        <div>
            <h1>My Todos</h1>
            {/*Attribute name differs from property name */}
            <div className='card'>
                <h2>
                    TITLE
                </h2>
                <div className={'actions'}>
                    <button className='btn'>Delete</button>
                </div>
            </div>
        </div>

    );
}

export default App;
