interface Tag {
  id: number;
  name: string;
}

interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
  category: string;
  tags?: Tag[];
}

let todos: Todo[] = [];
interface CreateTodo {
  (todo: Pick<Todo, "content" | "category" | "tags">): Promise<Todo | void>;
}

const createTodo: CreateTodo = async (todo) => {
  const newTodo = {
    ...todo,
    id: Math.random(),
    isCompleted: false,
  };

  todos = [...todos, newTodo];
  return newTodo;
};

interface GetTodos {
  (): Promise<Todo[] | void>;
}

const getTodos: GetTodos = async () => {
  return todos;
};

interface GetTodoById {
  (id: Pick<Todo, "id">): Promise<Todo | void>;
}

const getTodoById: GetTodoById = async (id) => {
  const foundItem = todos.find((item) => item.id === id.id);

  if (!foundItem) {
    throw new Error("Couldn't find item");
  }

  return foundItem;
};

interface UpdateTodo {
  (todo: Todo): Promise<Todo | void>;
}

const updateTodo: UpdateTodo = async (todo) => {
  const foundIndex = todos?.findIndex((item) => item.id === todo.id);

  if (foundIndex === -1) {
    throw new Error("Couldn't find item");
  }

  todos.splice(foundIndex, 1, todo);
};

interface UpdateTags {
  (id: Pick<Todo, "id">, tags: Tag[]): Promise<Todo | void>;
}

const updateTags: UpdateTags = async (id, tags) => {
  const foundIndex = todos?.findIndex((item) => item.id === id.id);

  if (foundIndex === -1) {
    throw new Error("Couldn't find item");
  }

  const foundItem = todos[foundIndex];

  todos.splice(foundIndex, 1, { ...foundItem, tags });
};

interface DeleteAllTodos {
  (): Promise<void>;
}

const deleteAllTodos: DeleteAllTodos = async () => {
  todos = [];
};

interface DeleteById {
  (id: Pick<Todo, "id">): Promise<void>;
}

const deleteTodoById: DeleteById = async (id) => {
  if (!todos?.some((item) => item.id === id.id)) {
    throw new Error("Couldn't find item");
  }

  todos = todos?.filter((item) => item.id !== id.id);
};

const deleteAllTags: DeleteById = async (id) => {
  const foundIndex = todos?.findIndex((item) => item.id === id.id);

  if (foundIndex === -1) {
    throw new Error("Couldn't find item");
  }

  todos.splice(foundIndex, 1);
};

interface DeleteTag {
  (id: Pick<Todo, "id">, tagId: Pick<Tag, "id">): Promise<Todo | void>;
}

const deleteTag: DeleteTag = async (id, tagId) => {
  const foundIndex = todos?.findIndex((item) => item.id === id.id);

  if (foundIndex === -1) {
    throw new Error("Couldn't find item");
  }

  const foundItem = todos[foundIndex];

  const newTags = foundItem.tags?.filter((item) => item.id !== tagId.id);

  todos.splice(foundIndex, 1, { ...foundItem, tags: newTags });
};
