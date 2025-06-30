import { ToDo } from '../types';
import { TaskService } from '../../types/taskService';
import { localStorageTaskService } from './localStorageTaskService';

const fetchToDos = async (userId = 7, limit = 3) =>
  await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}&_limit=${limit}`
  ).then((res) => res.json());

export const hybridTaskService: TaskService = {
  async loadTasks() {
    let tasks = await localStorageTaskService.loadTasks();

    try {
      // If we don't have any tasks stored locally, use the JSON placeholder API to fetch some example ones for our app
      if (!tasks.length) {
        tasks = await fetchToDos().then(
          (
            toDos: {
              userId: string;
              id: string;
              title: string;
              completed: boolean;
            }[]
          ) =>
            toDos.map((jsonToDo) => ({
              id: jsonToDo.id,
              text: jsonToDo.title,
              status: jsonToDo.completed ? 'Complete' : 'Not Started',
              dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
            }))
        );
      }
    } catch (e) {
      console.error('Failed to parse stored tasks', e);
    }

    return tasks;
  },

  async saveTasks(tasks: ToDo[]) {
    await localStorageTaskService.saveTasks(tasks);
  },

  async clearTasks() {
    await localStorageTaskService.clearTasks();
  },
};
