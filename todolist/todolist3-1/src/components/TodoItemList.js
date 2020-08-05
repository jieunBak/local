import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
        //shouldComponentUpdate는 component가  reRendering 할 지 말지 결정 => 따로 구현되지 않을 시 언제나 true를 반환.
        //업데이트에 영향을 끼치는 조건을 return하면 됨
        //todos 값이 바뀔때 리렌더링하면 되므로 this.props.todos 와 nextProps.todos를 비교해서 이 값이 다를 때만 리렌더링하도록 설정
    }
    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todolist = todos.map(
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
        );
        
        // == 동일 : 객체의 값을 props 로 전달
        // const todolist = todos.map(
        //     (todo) => (
        //         <TodoItem
        //             {...todo}
        //             onToggle={onToggle}
        //             onRemove={onRemove}
        //             key={todo.id}
        //         />
        //     )
        // );

        return(
            <div>
                {todolist}
            </div>
        );
    }
}

export default TodoItemList;