import React, { Component } from 'react';
import TodoListTemplate from './component/TodoListTemplate';
import Form from './component/Form';
import TodoItemList from './component/TodoItemList';

class App extends Component{

  id = 3 //이미 0,1,2가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false },
      { id: 1, text: '리액트 소개', checked: true },
      { id: 2, text: '리액트 소개', checked: false }
    ]
  }

  handleChange = (e) => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({ //concat 사용해 배열 추가
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    //눌려진 키가 enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    this.setState({
      todos:[
        ...todos.slice(0, index),
        {
          ...selected,
          checked: !selected.checked
        },
        ...todos.slice(index + 1, todos.length)
      ]
    });
    // = 위와 동일
    // const nextTodos = [...todos];

    // nextTodos[index] = {
    //   ...selected,
    //   checked: !selected.checked
    // };

    // this.setState({
    //   todos: nextTodos
    // });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return(
      <TodoListTemplate form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      </TodoListTemplate>
    )
  }
}

export default App;
