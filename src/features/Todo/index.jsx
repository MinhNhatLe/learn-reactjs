import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList/index'
TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        },
    ];

    // sử dụng usetate để set lại giá trị
    // props thì không thể chỉnh sửa chỉ có thể truyền xuống
    // state sử dụng trong component và có thể chỉnh sửa
    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState('all');

    const handleTodoClick = (todo, idx) => {
        // clone current array to the new one
        const newTodoList = [...todoList];

        console.log(todo, idx);
        // toggle state
        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };

        newTodoList[idx] = newTodo;

        //update todo list
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        setFilteredStatus('all');
    }
    const handleShowNewClick = () => {
        setFilteredStatus('new')
    }
    const handleShowCompletedClick = () => {
        setFilteredStatus('completed')
    }

    const renderTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);

    return (
        <div>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAllClick}>Show all</button>
                <button onClick={handleShowNewClick}>Show New</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
            </div>
        </div>
    );
}

export default TodoFeature;