import React, { useCallback } from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
    const { id, text, done } = todo;
    const toggle = useCallback(() => onToggle(id), [id, onToggle]);
    const remove = useCallback(() => onRemove(id), [id, onRemove]);

    return(
        <li>
            <span style={{
                textDecoration: done ? 'line-through' : 'none'
                // 결과 : 조건 A ? '참일 때의 결과 B' : '거짓일 때의 결과 C' => if문의 단축 형태
            }} onClick={toggle}>{text}</span>
            <button onClick={remove}>삭제</button>
        </li>
    );
};

export default TodoItem;
// export default React.memo(TodoItem);