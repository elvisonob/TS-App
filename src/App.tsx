import Todos from './components/Todos';
import Todo from './models/todo';

const App = () => {
  const modeledTodo = [new Todo('Learn React'), new Todo('Learn TypeScript')];
  return (
    <div>
      <Todos items={modeledTodo} />
    </div>
  );
};

export default App;
