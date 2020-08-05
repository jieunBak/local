import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;

        return(
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {e.stopPropagation(); onRemove(id)}}> 
                {/* stopPropagation : onToggle이 실행되지 않도록 처리 */}
                    &times;
                </div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    {/* `todo-text ${checked && 'checked'}` : 는 무슨 역할? */}
                    {text}
                </div>
                { checked && (<div className="check-mark">✓</div>) }
            </div>
        );
    }
}

export default TodoItem;