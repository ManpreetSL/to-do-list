import { useEffect, useState } from 'react';
import { ToDo } from '../types';
import { TaskService } from '../../types/taskService';
import { hybridTaskService } from '../services/hybridTaskService';

const useToDos = (taskService: TaskService = hybridTaskService) => {
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
