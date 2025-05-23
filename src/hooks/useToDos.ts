import { useEffect, useState } from 'react';
import { ToDo } from '../types';
import { TaskService } from '../services/taskService';
import { localStorageTaskService } from '../services/localStorageTaskService';

const useToDos = (taskService: TaskService = localStorageTaskService) => {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      taskService.loadTasks().then((tasks) => {
        setToDos(tasks);
        setLoaded(true);
      });
    }
  }, [taskService, loaded]);

  useEffect(() => {
    if (loaded) taskService.saveTasks(toDos);
  }, [toDos, taskService, loaded]);

  return [toDos, setToDos] as const;
};

export default useToDos;
