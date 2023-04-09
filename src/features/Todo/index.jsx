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


    return (
        <div>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
        </div>
    );
}

export default TodoFeature;