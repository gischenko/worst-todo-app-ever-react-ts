import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchTodos, addTodo, TodoItem, removeTodo } from '../mockApi';
import './ToDoList.css';

// We forgot to implement "marking todo as done"
// Ask someone else.
function TodoList() {
  const { data: fetchedTodos, isSuccess } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos
  });

  const [todos, setTodos] = useState<TodoItem[]>([]);
  useEffect(() => {
    if (isSuccess && fetchedTodos) {
      setTodos(fetchedTodos);
    }
  }, [isSuccess, fetchedTodos]);

  const addTodoMutation = useMutation({
    mutationFn: addTodo,
  });

  const ClickAddTodo = async () => {
    const input = document.querySelector('#todo-input') as HTMLInputElement;
    const text = input?.value;

    await addTodoMutation.mutateAsync(text).then((newTodo) => {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      input.value = "";
    }).catch((error) => {
      console.error('Error adding todo:', error);
    });
  };

  const removeTodoMutation = useMutation({
    mutationFn: removeTodo,
  });

  const ClickRemoveTodo = (id: string) => {
    removeTodoMutation.mutateAsync(id).then(() => {
      setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    }).catch((error) => {
      console.error('Error removing todo:', error);
    });
  };

  return (
    <div>
      <ol>
        {todos.map((todo) => (
          <li key={Math.random()}>{todo.text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div onClick={() => ClickRemoveTodo(todo.id)} className="removeButton">ⓧ</div></li>
        ))}
      </ol>
      <div className="ADDtoDoWrapper">
        <input id="todo-input" type="text" placeholder="Add a new todo" />
        <div onClick={ClickAddTodo} className='button'>Add</div>
      </div>
    </div>
  );
}

export default TodoList;