import React from "react";
import Header from "./Header";
import AddTodo from "./AddTodo";
import TodoLists from "./TodoLists";

export default class TodoList extends React.Component {
  state = {
    todos: []
  };
  handleAddTodo = event => {
    event.preventDefault();
    const todo = event.target.todo.value.trim();
    if (todo) {
      this.setState(prevState => ({
        todos: [...prevState.todos, todo]
      }));
      event.target.todo.value = "";
    }
  };
  render() {
    return (
      <div className="container">
        <Header />
        <AddTodo handleAddTodo={this.handleAddTodo} />
        <TodoLists todos={this.state.todos} />
      </div>
    );
  }
}
