import { createStore } from 'redux';
import { actions } from "../constants/actions";
import { ITask } from "../components/Taskbox1/Task";
import { TaskState } from '../constants/task-state';

interface ArchiveTaskAction {
  type: typeof actions.PIN_TASK;
  id: string;
}

interface PinTaskAction {
  type: typeof actions.PIN_TASK;
  id: string;
}

export interface TaskState {
  tasks: ITask[]
}

export type TaskActionsTypes = ArchiveTaskAction | PinTaskAction;

export const archiveTask = (id: string): TaskActionsTypes => ({
  type: actions.ARCHIVE_TASK,
  id
});
export const pinTask = (id: string): TaskActionsTypes => ({
  type: actions.PIN_TASK,
  id
});

const initialState: TaskState = {
  tasks: []
}

function taskStateReducer(taskState: string) {
  return (state = initialState, action: TaskActionsTypes) => {
    return {
      ...state,
      tasks: state.tasks.map(task =>
        task.id === action.id ? { ...task, state: taskState } : task
      )
    }
  }
}

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer(TaskState.TASK_ARCHIVED)(state, action);
    case actions.PIN_TASK:
      return taskStateReducer(TaskState.TASK_PINNED)(state, action);
    default:
      return state;
  }
};

const defaultTasks = [
  { id: '1', title: 'Something', state: TaskState.TASK_INBOX },
  { id: '2', title: 'Something more', state: TaskState.TASK_INBOX },
  { id: '3', title: 'Something else', state: TaskState.TASK_INBOX },
  { id: '4', title: 'Something again', state: TaskState.TASK_INBOX },
];

export default createStore(reducer, { tasks: defaultTasks });
