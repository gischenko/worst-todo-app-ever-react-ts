export type TodoItem = {
  id: string; // UUIDs are strings
  text: string;
  completed: boolean;
};

const todos: TodoItem[] = [
  { id: crypto.randomUUID(), text: "Learn React", completed: false },
  { id: crypto.randomUUID(), text: "Learn react-query", completed: false },
];

export function fetchTodos(): Promise<TodoItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...todos]);
    }, 500);
  });
}

export function addTodo(text: string): Promise<TodoItem> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newTodo: TodoItem = { id: crypto.randomUUID(), text, completed: false };
      todos.push(newTodo);
      resolve(newTodo);
    }, 500);
  });
}

// Mock function to remove a todo by id
export function removeTodo(id: string): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        todos.splice(index, 1);
        resolve(true);
      } else {
        resolve(false);
      }
    }, 500);
  });
}

// Function to toggle the completion status of a todo
export function toggleTodoCompletion(id: string): Promise<TodoItem | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todo = todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        resolve(todo);
      } else {
        resolve(null);
      }
    }, 500);
  });
}
