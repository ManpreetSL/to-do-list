import { ToDo } from '../src/types';

export interface TaskService {
  loadTasks: () => Promise<ToDo[]>;
  saveTasks: (toDos: ToDo[]) => Promise<void>;
  clearTasks: () => Promise<void>;
}
