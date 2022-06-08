import { FC } from 'react';
import { Event } from 'type/event';

interface TodoListProps {
  data: Event[];
}

const TodoList: FC<TodoListProps> = ({ data }: TodoListProps) => {
  console.log(data);
  return (
    <div>
      {/* {events.map(({ id, title }) => (
        <p key={id}>{title}</p>
      ))} */}
    </div>
  );
};

export default TodoList;
