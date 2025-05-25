export type ToDo = {
  id: string;
  text: string;
  status: string;
  dueDate: Date;
};

export type SerialisedToDo = {
  id: string;
  text: string;
  status: string;
  dueDate: string;
};
