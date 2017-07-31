import React from 'react';

//material-ui components
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

//component style
import './styles/TodoFilter.css';


const TodoFilter = (props) => {
    const { filter, updateTodoState } = props
    return (
        <div className="TodoFilter">
            <label>Filter : </label>
            <DropDownMenu
                value={filter}
                onChange={(e, k, filter) => {

                    updateTodoState({ filter });
                }}
            >
                <MenuItem value='all' primaryText="All" />
                <MenuItem value='active' primaryText="Active" />
                <MenuItem value='completed' primaryText="Completed" />
            </DropDownMenu>
        </div>
    );
}

export default TodoFilter;