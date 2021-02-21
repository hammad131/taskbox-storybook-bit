import React from 'react';
import { TaskState } from '../constants/task-state'

export interface TaskProps {
  task: ITask;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

export interface ITask {
  id: string;
  title: string;
  state: string;
}

const Task: React.FC<TaskProps> = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input type="checkbox" defaultChecked={state === TaskState.TASK_ARCHIVED} disabled={true} name="checked" />
        <span className="checkbox-custon" onClick={() => id && onArchiveTask(id)} />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly placeholder="Input title" />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {
          state !== TaskState.TASK_ARCHIVED && (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a onClick={() => id && onPinTask(id)}>
              <span className={`icon-star`} />
            </a>)
        }
      </div>
    </div>
  );
}

export default Task;
