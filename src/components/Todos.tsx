import { useState } from 'react';
import TodosList from './TodosList';

interface Todo {
  id: number;
  text: string;
}

export default function Todos() {
  const [todoText, setTodoText] = useState<string>('');
  const [todo, setTodo] = useState<Todo[]>([]);

  function handleTodoText(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoText(e.target.value);
  }

  function handleButtonSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(todoText);
    setTodo((prev) => {
      return [{ id: Math.random(), text: todoText }, ...prev];
    });
    setTodoText('');
  }

  function removeTodo(id: number) {
    setTodo((prev) => {
      return prev.filter((eachItem) => eachItem.id !== id);
    });
  }

  return (
    <div>
      <h1>TODO APP</h1>
      <h3>Add a Todo</h3>
      <input id="text" type="text" onChange={handleTodoText} value={todoText} />
      <form onSubmit={handleButtonSubmit}>
        <button>Submit</button>
      </form>
      <TodosList todo={todo} remove={removeTodo} />
    </div>
  );
}
