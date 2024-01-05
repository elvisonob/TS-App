import React from 'react';
const Todos = () => {
  const todos = ['Learning React', 'Learning TypeScript'];

  return (
    <div>
      {todos.map((todo) => (
        <ul>
          <li>{todo}</li>
        </ul>
      ))}
    </div>
  );
};

export default Todos;
