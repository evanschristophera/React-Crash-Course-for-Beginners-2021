import Todo from "./components/Todo";
function App() {
    return (
        <div>
            <h1>My Todos</h1>
            {/*this is how you pass data to a component using props*/}
            <Todo text='Learn React'/>
            <Todo text='Learn React 1'/>
            <Todo text='Learn React 2'/>
            <Todo text='Learn React 3'/>
        </div>
    );
}

export default App;
