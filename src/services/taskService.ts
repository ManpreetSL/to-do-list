import { ToDo } from '../types';

export interface TaskService {
  loadTasks: () => Promise<ToDo[]>;
  saveTasks: (toDos: ToDo[]) => Promise<void>;
  clearTasks: () => Promise<void>;
}
