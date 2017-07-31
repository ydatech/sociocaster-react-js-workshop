import React from 'react';

// app components
import TodoItem from './TodoItem';

// component style
import './styles/TodoList.css';

const TodoList = (props) => {
    const { todos, filterTodos, ...rest } = props;

    if (todos.length <= 0) {
        return (
            <div className="NoTodoList"> There is no To Do yet! </div>
        )
    }
    return (
        <div className="TodoList">
            {
                todos.filter(filterTodos).map((todo) => {

                    return (
                        <TodoItem
                            key={todo.id}

                            todo={todo}
                            {...rest}
                        />
                    );
                })
            }
        </div >
    );
}

export default TodoList;