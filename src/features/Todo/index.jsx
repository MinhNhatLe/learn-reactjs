import React, { useState } from 'react';
import TodoList from './components/TodoList/index';
import TodoForm from './components/TodoForm';
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


    const handleTodoFormSubmit = (values) => {
        console.log('Form submit:', values);
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: 'new',
        };

        // lấy giá trị todoList hiện tại + newTodo mới khai báo
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
    };
    return (
        <div>
            {/* Này là page/container */}
            <h3>What to do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />

            <h3>Todo List</h3>
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