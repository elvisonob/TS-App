import Todo from '../models/todo';
import TodoItems from './TodosItems';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <TodoItems key={item.id} text={item.text} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
