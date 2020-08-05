import React from 'react';
import './TodoListTemplate.scss';


const TodoListTemplate = (props) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                Todo List
            </div>
            <section className="form-wrapper">
                {props.form}
            </section>
            <section className="todos-wrapper">
                {props.children}
            </section>
        </main>
    );
};

export default TodoListTemplate;