interface Todo {
  id: number;
  text: string;
}

interface Props {
  todo: Todo[];
  removeButton: (id: number) => void;
}

export default function TodoList({ todo, removeButton }: Props) {
  return (
    <div>
      <h2>List of Todo</h2>
      {todo.map((eachTodo) => (
        <div className="listTodos">
          <li key={eachTodo.id}>{eachTodo.text}</li>
          <button onClick={() => removeButton(eachTodo.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
