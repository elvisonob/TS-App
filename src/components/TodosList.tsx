interface Todo {
  id: number;
  text: string;
}

interface Props {
  todo: Todo[];
  remove: (id: number) => void;
}

export default function TodosList({ todo, remove }: Props) {
  return (
    <div>
      <h3>Todo List</h3>
      {todo.map((eachTodo) => (
        <div key={eachTodo.id}>
          <li>{eachTodo.text}</li>
          <button onClick={() => remove(eachTodo.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
