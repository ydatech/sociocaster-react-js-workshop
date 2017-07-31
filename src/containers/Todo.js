import React, { Component } from 'react';

// container style
import './styles/Todo.css';

// app components
import NewTodo from '../components/NewTodo';
import TodoList from '../components/TodoList';
import TodoFilter from '../components/TodoFilter';

// react-redux 
import { connect } from 'react-redux';
// redux
import { bindActionCreators } from 'redux';

// action creators
import * as todoActions from '../redux/todo/actions';

class Todo extends Component {



    filterTodos = (todo, index) => {
        const { filter } = this.props.todo;
        if (filter === 'all') {
            return true;
        }
        else if (filter === 'active' && !todo.completed) {
            return true;
        }
        else if (filter === 'completed' && todo.completed) {
            return true;
        }
        else {
            return false;
        }
    }

    updateTodoState = (newState) => {

        const { todoActions } = this.props;

        todoActions.updateTodoState(newState);

    }

    createTodo = (e) => {
        e.preventDefault();

        const { todo, todoActions } = this.props;
        const newItem = {
            id: Date.now(),
            title: todo.newTodo,
            completed: false
        }
        todoActions.createTodo(newItem);
    }

    render() {

        const { todo, todoActions } = this.props;
        const { newTodo, filter, items } = todo;
        return (
            <div className="Content">
                <h1 className="Content-Title"> To Do </h1>
                <NewTodo
                    newTodo={newTodo}
                    updateTodoState={this.updateTodoState}
                    createTodo={this.createTodo}
                />

                {
                    items.length > 0 &&
                    <TodoFilter
                        filter={filter}
                        updateTodoState={this.updateTodoState}
                    />
                }
                <TodoList
                    todos={items}
                    updateTodo={todoActions.updateTodo}
                    deleteTodo={todoActions.deleteTodo}
                    filterTodos={this.filterTodos}
                />

            </div>
        );

    }



}

const mapStateToProps = ({ todo }) => ({ todo });

const mapDispatchToProps = (dispatch) => ({ todoActions: bindActionCreators(todoActions, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(Todo);