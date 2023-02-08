interface Todo {
  id: number;
  content: string;
  isDone: boolean;
  category: string;
  tags?: Tag[];
}

interface Tag {
  id: number;
  content: string;
}

let TodoList: Todo[];

const createTodo = (content?: string): void => {};
const readTodo = (id?: number): void => {};
const updateTodo = (id: number, tagId?: number): void => {};
const deleteItem = (id: number, tagId?: number): void => {};
const clearTagList = (id: number) => {};
const clearTodoList = () => {};
