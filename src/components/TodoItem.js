import React from 'react';
//material-ui components
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';

import './styles/TodoItem.css';

const TodoItem = (props) => {
    const { todo, updateTodo, deleteTodo } = props;

    return (
        <div className="TodoItem">
            <div className="TodoItem-Content">
                <div className="TodoItem-Title">
                    {todo.title}
                </div>

                <div className="TodoItem-Checkbox">
                    <Checkbox
                        checked={todo.completed}
                        // label={todo.title}
                        labelPosition="left"
                        onCheck={(e, completed) => {
                            updateTodo({ completed }, todo.id)
                        }}
                    />
                </div>
                <div className="TodoItem-Delete">
                    <IconButton

                        iconClassName="fa fa-trash"
                        onTouchTap={() => {
                            deleteTodo(todo.id)
                        }}
                    />
                </div>

            </div>
        </div>
    );
}

export default TodoItem;