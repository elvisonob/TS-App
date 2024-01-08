import React from 'react';

const TodoItems: React.FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};

export default TodoItems;
