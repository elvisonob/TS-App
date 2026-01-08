interface Todo {
  id: number;
  text: string;
}

// interface Props {
//   todo: Todo[];
// }

export default function TodoList({ todo }: { todo: Todo[] }) {
  return (
    <div>
      <h2>List of Todo</h2>
      {todo.map((eachTodo) => (
        <div>
          <li key={eachTodo.id}>{eachTodo.text}</li>
        </div>
      ))}
    </div>
  );
}
