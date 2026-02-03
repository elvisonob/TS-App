import { useState } from 'react';
import TodosList from './TodosList';

interface ArrayContent {
  id: number;
  text: string;
}
export default function Todo() {
  const [todos, setTodos] = useState<string>('');
  const [todoList, setTodoList] = useState<ArrayContent[]>([]);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setTodos(e.target.value);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!todos.trim()) {
      alert('You should type a Todo');
      return;
    }
    setTodoList((prev) => {
      return [{ id: Math.random(), text: todos }, ...prev];
    });

    setTodos('');
  }

  function removeButton(id: number) {
    setTodoList((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  }
  return (
    <div className="container">
      <h1>TODO APP</h1>
      <h3>ADD A TODO</h3>
      <input id="text" type="text" value={todos} onChange={handleInput} />
      <form onSubmit={onSubmit}>
        <button>Submit</button>
      </form>
      <TodosList todo={todoList} removeButton={removeButton} />
    </div>
  );
}
