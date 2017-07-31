import React from 'react';
// material-ui components
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';

//theme
import theme from '../config/theme';
// component style
import './styles/NewTodo.css';

const NewTodo = (props) => {
    const { newTodo, updateTodoState, createTodo } = props
    const disabled = newTodo.length <= 0;
    const color = disabled ? theme.palette.disabledColor : theme.palette.primary1Color;
    return (
        <div className="NewTodo">
            <div>
                <form onSubmit={createTodo}>
                    <TextField
                        hintText="New Todo"
                        value={newTodo}
                        onChange={(e, newTodo) => {

                            updateTodoState({ isFetching: true, newTodo });

                        }}


                    />
                </form>
            </div>
            <div >
                <IconButton
                    disabled={disabled}
                    iconClassName="fa fa-plus"
                    iconStyle={{ color }}
                    onTouchTap={createTodo}
                />
            </div>
        </div>

    );
}

export default NewTodo;