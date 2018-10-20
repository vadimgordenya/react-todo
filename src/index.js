import React from 'react';
import ReactDOM from 'react-dom';
import AppHeder from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-items';

const App = () => {
    return (
        <div>
            <AppHeder />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
