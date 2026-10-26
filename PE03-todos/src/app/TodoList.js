import React from 'react';
import {View} from 'react-native';
import Todo from './Todo';

const getVisibleTodos = (todos, type) => {
  switch (type) {
    case 'Complete':
      return todos.filter(t => t.complete);
    case 'Active':
      return todos.filter(t => !t.complete);
    default:
      return todos;
  }
};

const TodoList = ({todos = [], deleteTodo, toggleComplete, type}) => {
  const visibleTodos = getVisibleTodos(todos, type).map(todo => (
    <Todo
      key={todo.todoIndex}
      todo={todo}
      deleteTodo={deleteTodo}
      toggleComplete={toggleComplete}
    />
  ));
  return <View>{visibleTodos}</View>;
};

export default TodoList;
