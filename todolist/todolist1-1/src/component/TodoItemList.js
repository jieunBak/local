import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props; //3개의 props 

        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem 
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
            // = 위와 동일
            // (todo) => (
            //     <TodoItem 
            //         {...todo}
            //         onToggle={onToggle}
            //         onRemove={onRemove}
            //         key={todo.id}
            //     />
            // )
        );

        return(
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;