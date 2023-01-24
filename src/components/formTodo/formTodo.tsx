import { useState, ChangeEvent, FormEvent } from 'react';
import './style.scss';

interface IProps {
	addTodo: (value: string) => void;
}

export const FormTodo = ({ addTodo }: IProps) => {
	const [value, setValue] = useState<string>('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-wrapper">
				<input
					type="text"
					className="input"
					value={value}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setValue(e.target.value)
					}
					placeholder="Add new todo"
				/>
				<button className="input-button" type="submit">
					Add Todo
				</button>
			</div>
		</form>
	);
};
