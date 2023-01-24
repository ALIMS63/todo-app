import { useState } from 'react';
import { FormTodo } from '../components/formTodo';
import { Todo } from '../components/todo';
import { ITodo } from '../interface';
import './style.scss';

export const MainPage = () => {
	const [todos, setTodos] = useState<ITodo[]>([
		{
			id: new Date().getTime(),
			text: 'This is a sampe todo',
			isDone: false,
		},
	]);

	const addTodo = (text: string) => {
		const newTodos = [
			...todos,
			{
				id: new Date().getTime(),
				text,
				isDone: false,
			},
		];
		setTodos(newTodos);
	};

	const markTodo = (id: number) => {
		const newTodos = todos.map((todo: ITodo) => {
			if (todo.id === id) return { ...todo, isDone: !todo.isDone };
			return todo;
		});

		setTodos(newTodos);
	};

	const removeTodo = (id: number) => {
		const newTodos = todos.filter((todo: ITodo) => todo.id !== id);
		setTodos(newTodos);
	};

	return (
		<div className="page">
			<h1>Todo List</h1>
			<FormTodo addTodo={addTodo} />
			<div className="list-wrapper">
				{todos.length
					? todos.map((todo: ITodo) => (
							<Todo
								key={todo.id}
								todo={todo}
								markTodo={markTodo}
								removeTodo={removeTodo}
							/>
					  ))
					: 'There is no todo'}
			</div>
		</div>
	);
};
