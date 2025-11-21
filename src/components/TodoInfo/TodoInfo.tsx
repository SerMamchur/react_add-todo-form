// import { use } from 'chai';
import { Todo } from '../../api/types';
import React from 'react';
import { UserInfo } from '../UserInfo';
import classNames from 'classnames';

type Props = {
  todo: Todo;
};

// const [completed, setCompleated] = useState(false);

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <article
      data-id={todo.id}
      className={classNames('TodoInfo', {
        'TodoInfo--completed': todo.completed === true,
      })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
