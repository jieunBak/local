import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {

  id = 3
  // 이미 등록되어있는 list 3개 (0, 1, 2 -> 0부터 시작) 이후로 시작

  state = {
    input: '',
    todos: [
      {id: 0, text: '리액트 소개', checked: false},
      {id: 1, text: '리액트 소개', checked: true},
      {id: 2, text: '리액트 소개', checked: false}
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = (e) => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({ 
        //concat : javascript "push" 사용 x (비교 불가능, 최적화 불가) => concat은 새 배열 생성
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  // == 동일
  // handleToggle = (id) => {
  //   const { todos } = this.state;
  //   const index = todos.findIndex(todo => todo.id === id);

  //   const selected = todos[index];

  //   this.setState({
  //     todos: [
  //       ...todos.slice(0, index),
  //       {
  //         ...selected,
  //         checked: !selected.checked
  //       },
  //       ...todos.slice(index + 1, todos.length)
  //     ]
  //   });
  // }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {

    const { input, todos } = this.state;
    const { handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove } = this;
    // ==  this.handleChange, this.handleCreate, this.handleKeyPress

    return(
    <TodoListTemplate form={(
      <Form
        value={input}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
      />
    )}>
      <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
    </TodoListTemplate>
    )
  }
}

export default App;
