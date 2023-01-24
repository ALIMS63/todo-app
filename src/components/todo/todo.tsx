import { ITodo } from '../../interface';
import './style.scss';

interface IProps {
	todo: ITodo;
	markTodo: (id: number) => void;
	removeTodo: (id: number) => void;
}

export const Todo = ({ todo, markTodo, removeTodo }: IProps) => {
	return (
		<div className="todo">
			<span
				style={{ textDecoration: todo.isDone ? 'line-through' : '' }}
				className={`${todo.isDone ? 'todo-done' : ''}`}
			>
				{todo.text}
			</span>
			<div className="buttons-wrapper">
				<button
					className="btn-success"
					onClick={() => markTodo(todo.id)}
				>
					✓
				</button>

				<button
					className="btn-danger"
					onClick={() => removeTodo(todo.id)}
				>
					✕
				</button>
			</div>
		</div>
	);
};
