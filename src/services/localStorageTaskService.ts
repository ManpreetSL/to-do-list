import { ToDo } from '../types';
import { TaskService } from './taskService';

const TASKS_KEY = 'toDos';

export const localStorageTaskService: TaskService = {
  async loadTasks() {
    const raw = localStorage.getItem(TASKS_KEY);
    let tasks: ToDo[] = [];
    try {
      tasks = raw ? (JSON.parse(raw) as ToDo[]) : [];
    } catch (e) {
      console.error('Failed to parse stored tasks', e);
    }

    return tasks;
  },

  async saveTasks(toDos: ToDo[]) {
    localStorage.setItem(TASKS_KEY, JSON.stringify(toDos));
  },

  async clearTasks() {
    localStorage.removeItem(TASKS_KEY);
  },
};
