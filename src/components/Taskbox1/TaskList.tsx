import React from 'react';
import Task, { ITask } from './Task'
import { TaskState } from '../constants/task-state';

import { connect } from 'react-redux';
import { archiveTask, pinTask, TaskActionsTypes } from '../lib/redux'
import { Dispatch } from 'redux';

export interface TaskListProps {
  loading?: boolean;
  tasks: ITask[];
  onPinTask: (id: string) => void;
  onArchiveTask: (id: string) => void;
}

export const PureTaskList: React.FC<TaskListProps> = ({
  loading = false, tasks, onPinTask, onArchiveTask
}) => {
  const events = {
    onPinTask, onArchiveTask
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return <div className="list-items">
      {LoadingRow}
      {LoadingRow}
      {LoadingRow}
      {LoadingRow}
      {LoadingRow}
      {LoadingRow}
    </div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">
      <div className="wrapper-message">
        <span className="icon-check" />
        <div className="title-message">No tasks</div>
        <div className="subtitle-message">Sit back</div>
      </div>
    </div>;
  }

  const tasksInOrder = [
    ...tasks.filter(t => t.state === TaskState.TASK_PINNED),
    ...tasks.filter(t => t.state !== TaskState.TASK_PINNED),
  ]

  return (
    <div className="list-items">
      {tasksInOrder.map((task, id) => (
        <Task key={id} task={task} {...events} />
      ))}
    </div>
  );
};

export default connect(
  ({ tasks }: { tasks: ITask[] }) => ({
    tasks: tasks.filter(
      t => t.state === TaskState.TASK_INBOX || t.state === TaskState.TASK_PINNED
    ),
  }),
  (dispatch: Dispatch<TaskActionsTypes>) => ({
    onArchiveTask: (id: string) => dispatch(archiveTask(id)),
    onPinTask: (id: string) => dispatch(pinTask(id))
  })
)(PureTaskList);



